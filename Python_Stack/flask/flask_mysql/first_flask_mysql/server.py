from flask import Flask, render_template, request, redirect, session
from mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
app = Flask(__name__)
@app.route("/")
def index():
    mysql = connectToMySQL('flask_friends')	        # call the function, passing in the name of our db
    friends = mysql.query_db('SELECT * FROM friends;')  # call the query_db function, pass in the query as a string
    print(friends)
    return render_template("index.html", all_friends=friends)


@app.route("/create_friend", methods=["POST"])
def add_friend_to_db():
    query = 'INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fn)s, %(ln)s,%(occup)s, NOW(), NOW());'
    data = {
        'fn': request.form['fname'],
        'ln': request.form['lname'],
        'occup': request.form['occ']
    }
    mysql = connectToMySQL('flask_friends')
    new_id = mysql.query_db(query, data)
    print(new_id)
    return redirect('/')
    
            
if __name__ == "__main__":
    app.run(debug=True)

# SELECT queries will return a list of dictionaries
# INSERT queries will return the auto-generated id of the inserted row
# UPDATE and DELETE queries will return nothing
# If the query goes wrong, it will return False