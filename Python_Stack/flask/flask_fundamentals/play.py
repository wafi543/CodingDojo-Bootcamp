from flask import Flask, render_template
app = Flask(__name__)
@app.route('/play/<countVar>/<colorVar>')
def hello_world(countVar,colorVar):
    return render_template("play.html", color=colorVar, count=int(countVar))

if __name__=="__main__":
    app.run(debug=True)