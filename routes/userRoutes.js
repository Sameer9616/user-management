const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

console.log("you enter to route");
router.post("/users", userController.createUser);
router.get("/users/:userId", userController.readUser);
router.get("/", (req, res) => {
  res.send("Hey, welcome to the User Management System!");
});
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
