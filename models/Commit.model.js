const mongoose = require ('mongoose');

const commitSchema = mongoose.Schema({
    author: String,
    text: String,
    newsId: {
        ref: "News",
        type: mongoose.SchemaTypes.ObjectId,
    }
})

const Commit = mongoose.model('Commit', commitSchema);

module.exports = Commit;