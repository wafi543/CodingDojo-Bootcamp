const mongoose = require('mongoose');
const express = require("express");
const app = express();
mongoose.connect('mongodb://localhost/y1955_db', { useNewUrlParser: true });
app.listen(8000, () => console.log("listening on port 8000"));

const UserSchema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    name: String
});
const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.get('/new/:name/', (req, res) => {
    const name = req.params.name
    const doc = new User();
    doc.createdAt = Date.now();
    doc.updatedAt = Date.now();
    doc.name = name;

    doc.save()
        .then(data => {
            console.log('document created: ', data)
            res.redirect('/')
        })
        .catch(err => console.log(err));
})

app.get('/remove/:name/', (req, res) => {
    const name = req.params.name
    User.remove({name: name})
    .then(deletedUser => {
        console.log('successfully removed deletedUser object')
        res.redirect('/')
    })
    .catch(err => res.json(err));
})

app.get('/:name', (req, res) => {
    const name = req.params.name
    User.findOne({name: name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

