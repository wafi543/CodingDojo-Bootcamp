from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
app = Flask(__name__)
my_db = 'dojo_survey'

@app.route("/")
def users():
    return render_template("index.html")


@app.route("/process", methods=["POST"])
def process():
    is_valid = True
    if len(request.form['name']) < 1:
        is_valid = False
        flash("Please enter a valid name")
    if len(request.form['location']) < 1:
        is_valid = False
        flash("Please choose a location")
    if len(request.form['language']) < 1:
        is_valid = False
        flash("Please choose a language")
    if not '_flashes' in session.keys():
        query = 'INSERT INTO surveys (name, location, language, comment) VALUES (%(n)s, %(loc)s, %(lan)s, %(c)s);'
        data = {
            'n': request.form['name'],
            'loc': request.form['location'],
            'lan': request.form['language'],
            'c': request.form['comment'],
        }
        mysql = connectToMySQL(my_db)
        new_id = mysql.query_db(query, data)
        return redirect('/result/'+str(new_id))
    else:
        return redirect('/')

@app.route("/result/<id>")
def profile(id):
    query = "SELECT id, name, location, language, comment FROM surveys WHERE id = %(id)s"
    data = {'id' : id}
    mysql = connectToMySQL(my_db)
    result = mysql.query_db(query,data)
    return render_template("profile.html", user = result)

if __name__ == "__main__":
    app.secret_key = "my_secret_key"
    app.run(debug=True)

# SELECT queries will return a list of dictionaries
# INSERT queries will return the auto-generated id of the inserted row
# UPDATE and DELETE queries will return nothing
# If the query goes wrong, it will return False