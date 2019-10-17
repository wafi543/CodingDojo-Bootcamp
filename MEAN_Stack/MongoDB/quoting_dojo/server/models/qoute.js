require('/server/config/mongoose.js');

const QouteSchema = new mongoose.Schema({
    created_at: Date,
    name: String,
    content: String
});
