from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
app.secret_key = "my_secret_key"
my_db = 'login_db'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
NAME_REGEX = re.compile(r'[a-zA-Z]{2,}')
bcrypt = Bcrypt(app)

@app.route("/")
def main():
    if 'name' in session:
        return redirect('/success')
    else:
        return render_template("index.html")


@app.route("/register", methods=["POST"])
def process():
    if not NAME_REGEX.match(request.form['fname']):
        flash('First name must contain at least two letters and contains only letters', 'fname')
    if not NAME_REGEX.match(request.form['lname']):
        flash('Last name must contain at least two letters and contains only letters','lname')
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Invalid email address','email')
    if len(request.form['password']) < 8:
        flash('Your password must be at least 8 characters','password')
    if request.form['password'] != request.form['confirm']:
        flash('Passwords does not match', 'confirm')

    query = 'SELECT * from users WHERE email = %(em)s;'
    data = {'em': request.form['email'],}
    mysql = connectToMySQL(my_db)
    result = mysql.query_db(query, data)
    if len(result) > 0:
        flash('Email is already exist', 'email')
    
    if not '_flashes' in session.keys():
        pw_hash = bcrypt.generate_password_hash(request.form['password'])  
        query = 'INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (%(fn)s, %(ln)s, %(em)s, %(pass)s, NOW());'
        data = {
            'fn': request.form['fname'],
            'ln': request.form['lname'],
            'em': request.form['email'],
            'pass': pw_hash,
        }
        mysql = connectToMySQL(my_db)
        new_id = mysql.query_db(query, data)
        session['name'] = request.form['fname']
        return redirect('/success')
    else:
        return redirect('/')

@app.route("/success")
def success():
    if 'name' in session:
        return render_template('success.html', fname = session['name'])
    else:
        return redirect('/')

@app.route("/logout")
def logout():
    session.clear()
    return redirect('/')


@app.route('/login', methods=['POST'])
def login():
    # see if the username provided exists in the database
    mysql = connectToMySQL(my_db)
    query = "SELECT * FROM users WHERE email = %(email)s;"
    data = { "email" : request.form["email"] }
    result = mysql.query_db(query, data)
    if len(result) > 0:
        # assuming we only have one user with this username, the user would be first in the list we get back
        # of course, we should have some logic to prevent duplicates of usernames when we create users
        # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
            # if we get True after checking the password, we may put the user id in session
            session['name'] = result[0]['first_name']
            # never render on a post, always redirect!
            return redirect('/success')
    # if we didn't find anything in the database by searching by username or if the passwords don't match,
    # flash an error message and redirect back to a safe route
    flash('You could not be logged in','login')
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)