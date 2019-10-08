const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
    res.render('index')
});
app.post("/result", (req, res) => {
    console.log(req.body)
    res.render('results', {data: req.body});
})