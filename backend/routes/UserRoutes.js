const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

router.get("/user/:userId", userController.get);
router.post("/user", userController.add);
router.put("/user/:userId", userController.update);
router.delete("/user/:userId", userController.delete);
module.exports = router;





