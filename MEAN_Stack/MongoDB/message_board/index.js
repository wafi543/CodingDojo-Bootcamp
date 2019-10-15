const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/animals_db', {useNewUrlParser: true});
const CommentSchema = new mongoose.Schema({
    created_at: Date,
    name: {type: String, required: [true, "Comments must have a name"]},
    content: {type: String, required: [true, "Comment must have a content"]},
})
const MessageSchema = new mongoose.Schema({
    created_at: Date,
    name: {type: String, required: [true, "Messages must have a name"]},
    content: {type: String, required: [true, "Messages must have a content"]},
    comments: [CommentSchema]
})
const Comment = mongoose.model('Comment', CommentSchema)
const Message = mongoose.model('Message', MessageSchema)

app.get('/', (req, res) => {
    Message.find()
    .then(data => res.render('index', {messages: data}))
    .catch(err => res.json(err))
})

app.post('/new', (req, res) => {
    const doc = new Message();
    doc.created_at = Date.now();
    doc.name = req.body.name;
    doc.content = req.body.content;

    doc.save()
      .then(newDoc => console.log('document created: ', newDoc))
      .catch(err => console.log(err));
     
    res.redirect('/');
})

app.post('/messages/:id/new_comment', (req, res) => {
    const id = req.params.id
    const doc = new Comment();
    doc.created_at = Date.now();
    doc.name = req.body.name;
    doc.content = req.body.content;
    Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: doc}}, function(err, data){
        if(err){res.json(err)}
        else {
            res.redirect('/')
        }
   })
})