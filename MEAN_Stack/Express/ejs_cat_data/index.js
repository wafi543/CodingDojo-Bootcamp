const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/cat1", (req, res) => {
    var cat = {src: 'cat1.jpg',
        name: "Cat 1",
        food: "milk",
        age: 1,
        sleeping: ['special bed','in the garden']}
    res.render('cat', {cat: cat});
})
app.get("/cat2", (req, res) => {
    var cat = {src: 'cat2.jpeg',
        name: "Cat 2",
        food: "mause",
        age: 6,
        sleeping: ['on the door','kitchen']}
    res.render('cat', {cat: cat});
})
app.get("/cat3", (req, res) => {
    var cat = {src: 'cat3.jpg',
        name: "Cat 3",
        food: "Spaghetti",
        age: 3,
        sleeping: ['under the bed','in a sunbeam']}
    res.render('cat', {cat: cat});
})