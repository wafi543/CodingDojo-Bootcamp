from flask import Flask, render_template, request, redirect, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
my_db = 'users_db'

@app.route("/")
def index():
    return redirect('/users')

@app.route("/users")
def users():
    mysql = connectToMySQL(my_db)
    users = mysql.query_db('SELECT * FROM users;')
    return render_template("index.html", all_users=users)

@app.route("/users/new")
def new_user():
    return render_template("add.html")

@app.route("/users/create", methods=["POST"])
def create_user():
    query = 'INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(em)s, NOW(), NOW());'
    data = {
        'fn': request.form['fname'],
        'ln': request.form['lname'],
        'em': request.form['email'],
    }
    mysql = connectToMySQL(my_db)
    new_id = mysql.query_db(query, data)
    return redirect("/users/"+str(new_id))


@app.route("/users/<id>")
def profile(id):
    query = "SELECT id, first_name, last_name, email, created_at, updated_at FROM users WHERE id = %(id)s"
    data = {'id' : id}
    mysql = connectToMySQL(my_db)
    result = mysql.query_db(query,data)
    return render_template("profile.html", user = result)

@app.route("/users/<id>/edit")
def edit_user(id):
    query = "SELECT id, first_name, last_name, email, created_at, updated_at FROM users WHERE id = %(id)s"
    data = {'id' : id}
    mysql = connectToMySQL(my_db)
    result = mysql.query_db(query,data)
    return render_template("edit.html", user = result)

@app.route("/users/<id>/update", methods=["POST"])
def update(id):
    query = 'UPDATE users SET first_name = %(fn)s, last_name = %(ln)s, email = %(em)s, updated_at = NOW() WHERE id = %(id)s '
    data = {
        'fn': request.form['fname'],
        'ln': request.form['lname'],
        'em': request.form['email'],
        'id': id,
    }
    mysql = connectToMySQL(my_db)
    mysql.query_db(query, data)
    return redirect("/users/"+id)

@app.route("/users/<id>/destroy")
def destroy(id):
    query = 'DELETE from users WHERE id = %(id)s '
    data = {'id': id,}
    mysql = connectToMySQL(my_db)
    mysql.query_db(query, data)
    return redirect("/users")
if __name__ == "__main__":
    app.run(debug=True)

# SELECT queries will return a list of dictionaries
# INSERT queries will return the auto-generated id of the inserted row
# UPDATE and DELETE queries will return nothing
# If the query goes wrong, it will return False