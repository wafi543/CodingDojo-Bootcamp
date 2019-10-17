
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));