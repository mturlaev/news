const {Router} = require("express");
const {CategoriesController} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", CategoriesController.getCategory);
router.post("/categories", CategoriesController.postCategory);
router.delete("/categories/:id", CategoriesController.deleteCategoryId);


module.exports = router;