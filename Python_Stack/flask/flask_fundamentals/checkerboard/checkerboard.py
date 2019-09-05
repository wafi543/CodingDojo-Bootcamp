from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def default():
    return render_template("index.html", x=8, y=8)

@app.route('/<xVar>')
def four(xVar):
    return render_template("index.html", x=xVar, y=8)

@app.route('/<xVar>/<yVar>')
def choose(xVar,yVar):
    return render_template("index.html", x=int(xVar), y=int(yVar))

if __name__=="__main__":
    app.run(debug=True)