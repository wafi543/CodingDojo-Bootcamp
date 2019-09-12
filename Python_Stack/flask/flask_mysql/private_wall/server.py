from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
app.secret_key = "my_secret_key"
my_db = 'private_wall'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[a-zA-Z]{2,}')
bcrypt = Bcrypt(app)


@app.route("/")
def main():
    if 'id' in session:
        return redirect('/wall')
    else:
        return render_template("index.html")


@app.route("/register", methods=["POST"])
def process():
    if not NAME_REGEX.match(request.form['fname']):
        flash('First name must contain at least two letters and contains only letters', 'fname')
    if not NAME_REGEX.match(request.form['lname']):
        flash(
            'Last name must contain at least two letters and contains only letters', 'lname')
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Invalid email address', 'email')
    if len(request.form['password']) < 8:
        flash('Your password must be at least 8 characters', 'password')
    if request.form['password'] != request.form['confirm']:
        flash('Passwords does not match', 'confirm')

    query = 'SELECT * from users WHERE email = %(em)s;'
    data = {'em': request.form['email'], }
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
        session['id'] = new_id
        session['email'] = request.form['email']
        return redirect('/wall')
    else:
        return redirect('/')


@app.route("/wall")
def success():
    if 'id' in session:
        mysql = connectToMySQL(my_db)
        queryUser = "SELECT * FROM users WHERE id = %(id)s;"
        data = {"id": session['id']}
        result = mysql.query_db(queryUser, data)

        mysql = connectToMySQL(my_db)
        queryUsers = "SELECT * FROM users WHERE id != %(id)s"
        data = {"id": session['id']}
        users = mysql.query_db(queryUsers, data)

        mysql = connectToMySQL(my_db)
        queryMessages = "SELECT messages.id as id, users.first_name as name ,messages.text as text FROM messages LEFT JOIN users ON messages.fromId = users.id WHERE messages.toId = %(id)s"
        data = {"id": session['id']}
        messages = mysql.query_db(queryMessages, data)
        return render_template('wall.html', user=result[0], messages=messages, users=users)
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
    data = {"email": request.form["email"]}
    result = mysql.query_db(query, data)
    if len(result) > 0:
        # assuming we only have one user with this username, the user would be first in the list we get back
        # of course, we should have some logic to prevent duplicates of usernames when we create users
        # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
            # if we get True after checking the password, we may put the user id in session
            session['id'] = result[0]['id']
            # never render on a post, always redirect!
            return redirect('/wall')
    # if we didn't find anything in the database by searching by username or if the passwords don't match,
    # flash an error message and redirect back to a safe route
    flash('You could not be logged in', 'login')
    return redirect('/')


@app.route('/send', methods=['POST'])
def send():
    query = 'INSERT INTO messages (fromId, toId, text, created_at) VALUES (%(from)s, %(to)s, %(text)s, NOW());'
    data = {
        'from': request.form['fromId'],
        'to': request.form['toId'],
        'text': request.form['text'],
    }
    mysql = connectToMySQL(my_db)
    new_id = mysql.query_db(query, data)
    return redirect('/')

@app.route("/delete/<id>")
def delete(id):
    queryMessage = "SELECT * FROM messages WHERE id = %(id)s;"
    data = {"id": id}
    mysql = connectToMySQL(my_db)
    message = mysql.query_db(queryMessage, data)
    try:
        if message[0]['toId'] == session['id']:
            query = 'delete from messages WHERE id = %(id)s'
            data = {'id':id}
            mysql = connectToMySQL(my_db)
            mysql.query_db(query, data)
            return redirect('/')
        else:
            return render_template('danger.html', id=id)
    except:
        return render_template('danger.html', id=id)

if __name__ == "__main__":
    app.run(debug=True)
