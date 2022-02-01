const express = require("express");
const router = express.Router();
const projectController = require("../controller/ProjectController");

router.get("/project", projectController.get);
router.get("/project/:projectId", projectController.get);
router.post("/project", projectController.add);
router.put("/project/:projectId", projectController.update);
router.delete("/project/:projectId", projectController.delete);
module.exports = router;