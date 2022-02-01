const express = require("express");
const router = express.Router();
const lessonController = require("../controller/LessonController");

router.get("/lesson", lessonController.get);
router.get("/lesson/:lessonId", lessonController.get);
router.post("/lesson", lessonController.add);
router.put("/lesson/:lessonId", lessonController.update);
router.delete("/lesson/:lessonId", lessonController.delete);
module.exports = router;