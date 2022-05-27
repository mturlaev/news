const Commit = require("../models/Commit.model");
const { find } = require("../models/News.model");


module.exports.CommitsController = {
    getCommitId: (req, res) => {
        Commit.find({ newsId: req.params.id}).then((data) => {
            res.json(data);
        })
    },
    deleteCommitId: (req, res) => {
        Commit.findByAndRemove(req.params.id).then(() => {
            res.json("Комментарий удален")
        })
    },
    postCommitId: (req, res) => {
        Commit.create({
        author: req.body.author,
        text: req.body.text,
        newsId: req.body.newsId,
        }).then((data) => {
            res.json(data);
        })
    },
};