from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    strawberry_form = int(request.form['strawberry'])
    blackberry_form = int(request.form['blackberry'])
    raspberry_form = int(request.form['raspberry'])
    apple_form = int(request.form['apple'])
    first_name_form = request.form['first_name']
    last_name_form = request.form['last_name']
    student_id_form = request.form['student_id']
    return render_template("checkout.html", strawberry=strawberry_form, blackberry=blackberry_form, raspberry=raspberry_form, apple=apple_form, first_name=first_name_form, last_name=last_name_form, student_id=student_id_form)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)    