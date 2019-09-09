from flask import Flask, render_template, request, redirect, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
@app.route("/")
def index():
    mysql = connectToMySQL('pets_db')
    pets = mysql.query_db('SELECT * FROM pets;')
    return render_template("index.html", all_pets=pets)


@app.route("/create_pets", methods=["POST"])
def add_friend_to_db():
    query = 'INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(n)s, %(t)s, NOW(), NOW());'
    data = {
        'n': request.form['name'],
        't': request.form['type'],
    }
    mysql = connectToMySQL('pets_db')
    new_id = mysql.query_db(query, data)
    print(new_id)
    return redirect('/')
    
            
if __name__ == "__main__":
    app.run(debug=True)

# SELECT queries will return a list of dictionaries
# INSERT queries will return the auto-generated id of the inserted row
# UPDATE and DELETE queries will return nothing
# If the query goes wrong, it will return False