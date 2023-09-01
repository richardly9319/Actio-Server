const express = require("express");
const router = express.Router();
const userDataController = require("../controllers/userDataController");

router
  .route("/:id/tasks/:taskId")
  .delete(userDataController.deleteTask)
  .put(userDataController.editTask);

router
  .route("/:id/:itemType/:itemId")
  .delete(userDataController.deleteItem)
  // .put(userDataController.editItem);

router
  .route("/:id/tasks")
  .get(userDataController.getTasksData)
  .post(userDataController.addTask);

router
  .route("/:id/:itemType")
  // .post(userDataController.addItem);

router
  .route("/:id")
  .get(userDataController.getUserData);

module.exports = router;