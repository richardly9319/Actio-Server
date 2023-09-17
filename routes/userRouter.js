const express = require("express");
const router = express.Router();
const userDataController = require("../controllers/userDataController");
const tasksDataController = require("../controllers/tasksDataController");


router
  .route("/:id/tasks/:taskId/:taskDetailId")
  .delete(tasksDataController.deleteTaskDetail)
  .put(tasksDataController.editTaskDetail);

router
  .route("/:id/tasks/:taskId")
  .delete(tasksDataController.deleteTask)
  .put(tasksDataController.editTask)
  .post(tasksDataController.addTaskDetail);

router
  .route("/:id/tasks")
  .get(tasksDataController.getTasksData)
  .post(tasksDataController.addTask);

router
  .route("/:id/taskgroups")
  .post(tasksDataController.addTaskGroup)

router
  .route("/:id/taskgroups/:taskGroupId")
  .delete(tasksDataController.deleteTaskGroup)


router
  .route("/:id/:itemType/:itemId")
  .delete(userDataController.deleteItem)
  .put(userDataController.editItem)
  .post(userDataController.addDetail);


router
  .route("/:id/:itemType")
  .post(userDataController.addItem);

router
  .route("/:id")
  .get(userDataController.getUserData);

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API"
    });
});

module.exports = router;