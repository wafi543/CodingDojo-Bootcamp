const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/animals_db', {useNewUrlParser: true});
const AnimalSchema = new mongoose.Schema({
    created_at: Date,
    name: String,
    type: String,
    age: Number
});
const Animal = mongoose.model('Animal', AnimalSchema);
app.get('/', (req, res) => {
    Animal.find()
    .then(data => res.render("index", {animals: data}))
    .catch(err => res.json(err));
});
app.get('/animals/:id', (req, res) => {
    const id = req.params.id
    Animal.findOne({_id: id})
    .then(data => res.render('animal', {animal: data}))
    .catch(err => res.json(err));
});

app.get('/new' , (req, res) => {
    res.render('new')
})

app.post("/animals", (req, res) => {
    const animal = new Animal();
    animal.created_at = Date.now();
    animal.name = req.body.name;
    animal.type = req.body.type;
    animal.age = req.body.age;

    animal.save()
      .then(newDoc => console.log('document created: ', newDoc))
      .catch(err => console.log(err));
     
    res.redirect('/');
 })

 app.get('/animals/edit/:id', (req, res) => {
    const id = req.params.id
    Animal.findOne({_id: id})
    .then(data => res.render('edit', {animal: data}))
    .catch(err => res.json(err));
});

app.post('/animals/:id', (req, res) => {
    const id = req.params.id
    Animal.updateOne({_id:id}, {
        name: req.body.name,
        type: req.body.type,
        age: req.body.age
    })
        .then(result => {
            res.redirect('/')
        })
        .catch(err => res.json(err));
});

app.get('/animals/destroy/:id', (req, res) => {
    const id = req.params.id
    Animal.remove({_id: id})
    .then(deletedUser => {
        console.log('successfully removed deletedUser object')
        res.redirect('/')
    })
    .catch(err => res.json(err));
});