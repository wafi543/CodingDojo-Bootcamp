const express = require("express");
const session = require('express-session');
const app = express(); 
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.get('/', (req, res) => {
    var tmp = ''
    if (req.session.count != null) {
        req.session.count = req.session.count + 1
        tmp = req.session.count
    }else {
        req.session.count = 1
        tmp = req.session.count
    }
    res.render('counter', {count: tmp})
 });
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
