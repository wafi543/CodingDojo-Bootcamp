const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render('index')
 });
app.post("/users", (req, res) => {
    mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
})