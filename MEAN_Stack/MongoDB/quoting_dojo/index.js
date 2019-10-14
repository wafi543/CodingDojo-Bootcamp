const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/qoutes_db', {useNewUrlParser: true});
const QouteSchema = new mongoose.Schema({
    created_at: Date,
    name: String,
    content: String
});
const Qoute = mongoose.model('Qoute', QouteSchema);
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/qoutes', (req, res) => {
    Qoute.find()
    .then(data => res.render("qoutes", {qoutes: data}))
    .catch(err => res.json(err));
});

app.post("/qoutes", (req, res) => {
    const qoute = new Qoute();
    qoute.name = req.body.name;
    qoute.content = req.body.qoute;
    qoute.created_at = Date.now();

    qoute.save()
      .then(newQoute => console.log('qoute created: ', newQoute))
      .catch(err => console.log(err));
     
    res.redirect('/');
 })