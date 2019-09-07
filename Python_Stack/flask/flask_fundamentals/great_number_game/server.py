from flask import Flask, render_template, request, redirect, session
import random # import the random module
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes
# our index route will handle rendering our form
@app.route('/')
def index():
    num = random.randint(1, 100) 		# random number between 1-100
    if 'number' in session:
        print('number exists!')
    else:
        print("key 'number' does NOT exist")
        session['number'] = num
    if 'guess' in session:
        print('guess exists!')
    else:
        print("key 'guess' does NOT exist")
        session['guess'] = 0

    if 'count' in session:
        print('count exists!')
    else:
        print("key 'count' does NOT exist")
        session['count'] = 0
    return render_template("index.html", number = int(session['number']), guess = int(session['guess']), count=int(session['count']))

@app.route('/process', methods=['POST'])
def process():
    session['guess'] = request.form['guess']
    session['count'] = int(session['count']+1)
    return redirect('/')

@app.route('/clear')
def clear():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)