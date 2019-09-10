from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
my_db = 'email_validation'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods=["POST"])
def process():
    if len(request.form['my_email']) < 1:
        flash("Email cannot be blank!")
    if not EMAIL_REGEX.match(request.form['my_email']):
        flash("Invalid email address!")

    
    if not '_flashes' in session.keys():
        query = 'INSERT INTO emails (email, created_at) VALUES (%(em)s, NOW());'
        data = {
            'em': request.form['my_email'],
        }
        email = request.form['my_email']
        mysql = connectToMySQL(my_db)
        new_id = mysql.query_db(query, data)
        return redirect('/result/'+email)
    else:
        return redirect('/')

@app.route("/result/<email>")
def profile(em):
    query = "SELECT id, email, created_at FROM emails"
    data = {'id' : id}
    mysql = connectToMySQL(my_db)
    result = mysql.query_db(query,data)
    return render_template("result.html", emails = result, email= em)

if __name__ == "__main__":
    app.secret_key = "my_secret_key"
    app.run(debug=True)

# SELECT queries will return a list of dictionaries
# INSERT queries will return the auto-generated id of the inserted row
# UPDATE and DELETE queries will return nothing
# If the query goes wrong, it will return False