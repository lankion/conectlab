const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

router.get("/:userId", userController.get);
router.post("/new", userController.add);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);
module.exports = router;





