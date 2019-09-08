from flask import Flask, render_template, request, redirect, session
from datetime import date
import random # import the random module
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes
# our index route will handle rendering our form
@app.route('/')
def index():
    if 'activities' in session:
        print('activities exists!')
    else:
        print("key 'activities' does NOT exist")
        session['activities'] = []
    return render_template("index.html", activities = session['activities'])

@app.route('/process_money', methods=['POST'])
def process():
    activities = session['activities']
    num = 0
    if request.form['building'] == 'farm':
        num = random.randint(10, 20)
    elif request.form['building'] == 'cave':
        num = random.randint(5, 10)
    elif request.form['building'] == 'house':
        num = random.randint(2, 5)
    elif request.form['building'] == 'casino':
        num = random.randint(-50, 50)

    if num >= 0:
        activities.append('Earned '+str(num)+' golds from the '+request.form['building']+'! ('+str(date.today())+')')
    else:
        activities.append('Entered a casino and lost '+str(num)+' golds... Ouch.. ('+str(date.today())+')')

    session['activities'] = activities
    
    return redirect('/')

@app.route('/clear')
def clear():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)