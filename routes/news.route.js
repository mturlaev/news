const {Router} = require("express");
const {NewsController} = require("../controllers/news.controller")

const router = Router();

router.get("/news", NewsController.getNews);
router.get("/news/:id", NewsController.getNewsId);
router.post("/news", NewsController.postNews);
router.delete("/news/:id", NewsController.deleteNewsID);
router.patch("/news/:id", NewsController.pathNewsId);
router.get("/news/categories/:id", NewsController.getNewsByCategoriesId);


module.exports = router;