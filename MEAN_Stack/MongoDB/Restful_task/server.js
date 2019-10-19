const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/RestfulTasks_db', { useNewUrlParser: true });
app.listen(8000, () => console.log("listening on port 8000"));

const TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});
const Task = mongoose.model('Task', TaskSchema);

app.get('/', (req, res) => {
    res.redirect('/tasks')
});

app.get('/tasks', (req, res) => {
    Task.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id
    Task.findOne({_id: id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

app.post('/tasks', (req, res) => {
    const doc = new Task();
    doc.title = req.body.title
    doc.description = req.body.description
    doc.completed = req.body.completed

    doc.save()
        .then(data => {
            console.log('document created: ', data)
            res.redirect('/')
        })
        .catch(err => console.log(err));
})

app.put('tasks/:id', (req, res) => {
    const id = req.params.id
    Task.updateOne({_id:id}, {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        updatedAt: Date.now()
    })
    .then(result => res.redirect('/'))
    .catch(err => res.json(err));
})

app.delete('/tasks/:id/', (req, res) => {
    const id = req.params.id
    Task.remove({_id: id})
    .then(deletedUser => {
        console.log('successfully removed document: '+ deletedUser)
        res.redirect('/')
    })
    .catch(err => res.json(err));
})

