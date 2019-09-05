from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

# import statements, maybe some other routes
    
@app.route('/success')
def success():
  return "success"


@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id



@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/flask')
def hiflask():
    return "Hi Flask!"

@app.route('/say/michael')
def michael():
    return "Hi Michael!"

@app.route('/say/john')
def john():
    return "Hi John!"

@app.route('/pattern/<i>')
def pattern(i):
    return i


@app.route('/repeat/<i>/<name>')
def repeat(i, name):
    name = name+"\n"
    tmp = ""
    for i in range(1,int(i)+1):
        flask += name
    return tmp


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.