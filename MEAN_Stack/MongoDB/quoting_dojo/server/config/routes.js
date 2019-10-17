require('./server/models/qoute.js');

const mongoose = require('mongoose'),
    Qoute = mongoose.model('Qoute', QouteSchema);

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    });
    app.get('/qoutes', (req, res) => {
        Qoute.find()
            .then(data => res.render("qoutes", { qoutes: data }))
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
}