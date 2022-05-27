const Category = require("../models/Category.model");


module.exports.CategoriesController = {
    getCategory: (req, res) => {
        Category.find().then((data) => {
            res.json(data)
        })
    },
    postCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        }).then((data) => {
            res.json(data);
        })
    },
    deleteCategoryId: (req, res) => {
        Category.findByIdAndRemove(req.params.id).then(() => {
            res.json("Категория удалена! ")
        })
    },
}