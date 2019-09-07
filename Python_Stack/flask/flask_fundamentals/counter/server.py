from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes
# our index route will handle rendering our form
@app.route('/')
def index():
    if 'visits' in session:
        print('key exists!')
        session['visits'] +=1
    else:
        print("key 'visits' does NOT exist")
        session['visits'] = 1
    return render_template("index.html", count=session['visits'])

@app.route('/double')
def doubleVisits():
    session['visits'] +=1
    return redirect('/')

@app.route('/destroy_session')
def reset():
    session.pop('visits')
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)