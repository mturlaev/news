const {Router} = require("express");
const {CommitsController} = require("../controllers/commits.controller");

const router = Router();

router.get("/commits/:id", CommitsController.getCommitId);
router.post("/commits", CommitsController.postCommitId);
router.delete("/commits/:id", CommitsController.deleteCommitId);


module.exports = router;