const News = require('../models/News.model');

module.exports.NewsController = {
    getNews: (req, res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },
    getNewsId: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    postNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            categoryId: req.body.categoryId,
        }).then((data) => {
            res.json(data)
        })
    },
    deleteNewsID: (req, res) => {
        News.findByIdAndRemove(req.params.id).then(() => {
            res.json("Новость удалена")
        })
    },
    pathNewsId: (req, res) => {
        News.findByIdAndUpdate(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getNewsByCategoriesId: (req, res) => {
        News.find({categoryId: req.params.id}).then((data) => {
            res.json(data)
        })
    },
};