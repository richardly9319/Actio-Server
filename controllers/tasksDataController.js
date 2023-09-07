const knex = require("knex")(require("../knexfile.js"));


const getTasksData = (req, res) => {
    const userID = req.params.id;
  
    const tasksData = {};
  
    knex("tasks")
      .where("user_id", userID)
      .then((data) => {
        tasksData.tasks = data;
        return knex('taskgroups')
          .where("user_id", userID);
      })
      .then((data) => {
        tasksData.taskgroups = data;
        return knex('taskdetails')
          .where("user_id", userID);
      })
      .then((data) => {
        tasksData.tasksdetails = data;
        res.status(200).json(tasksData);
      })
      .catch((err) => res.status(400).send(`Error retrieving TasksData: ${err}`)
      );
}


const deleteTask = async (req, res) => {
  const taskID = req.params.taskId;

  try {
    // Check if the task exists before attempting deletion
    const existingTask = await knex('tasks').where('id', taskID).first();
    if (!existingTask) {
      return res.status(404).json({
        message: `Task with ID: ${taskID} not found.`,
      });
    }

    // Perform the deletion
    await knex('tasks').where('id', taskID).del();

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while deleting the task',
      error: error.message,
    });
  }
};

const deleteTaskGroup = async (req, res) => {
  const taskGroupID = req.params.taskGroupId;

  try {
    const existingTaskGroup = await knex('taskgroups').where('id', taskGroupID).first();
    if (!existingTaskGroup) {
      return res.status(404).json({
        message: `Task Group with ID: ${taskGroupID} not found.`,
      });
    }

    await knex('taskgroups').where('id', taskGroupID).del();

    res.status(200).json({ message: 'Task Group deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while deleting the Task Group',
      error: error.message,
    });
  }
};

const deleteTaskDetail = async (req, res) => {
  const taskDetailID = req.params.taskDetailId;

  try {
    const existingTaskDetail = await knex('taskdetails').where('id', taskDetailID).first();
    if (!existingTaskDetail) {
      return res.status(404).json({
        message: `Task detail with ID: ${taskDetailID} not found.`,
      });
    }

    await knex('taskdetails').where('id', taskDetailID).del();

    res.status(200).json({ message: 'Task detail deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while deleting the task detail',
      error: error.message,
    });
  }
};



const editTask = async (req, res) => {
  const itemID = req.params.taskId;
  const itemType = req.params.itemType;
  const { item } = req.body;

  try {
    if (!item) {
      return res.status(400).json({
        message: 'Invalid request body. Item is required.',
      });
    }

    await knex(itemType).where('id', itemID).update(item);

    const updatedItem = await knex(itemType).where('id', itemID).first();
    if (!updatedItem) {
      return res.status(404).json({
        message: `Item with ID: ${itemID} to be edited not found.`,
      });
    }

    res.status(200).json({ item: updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while updating the task',
      error: error.message,
    });
  }
};

const editTaskDetail = async (req, res) => {
  const taskDetailID = req.params.taskDetailId;
  const { taskDetail } = req.body;

  try {
    if (!taskDetail) {
      return res.status(400).json({
        message: 'Invalid request body. Task Detail is required.',
      });
    }

    await knex('taskdetails').where('id', taskDetailID).update(taskDetail);

    const updatedTaskDetail = await knex('taskdetails').where('id', taskDetailID).first();
    if (!updatedTaskDetail) {
      return res.status(404).json({
        message: `Task detail with ID: ${taskDetailID} to be edited not found.`,
      });
    }

    res.status(200).json({ taskDetail: updatedTaskDetail });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while updating the task detail',
      error: error.message,
    });
  }
};

  
const addTask = async (req, res) => {
  const { task } = req.body;
  console.log(task);

  try {
    if (!task) {
      return res.status(400).json({
        message: 'Invalid request body. Task is required.',
      });
    }

    const [taskId] = await knex('tasks').insert(task);

    if (!taskId) {
      return res.status(500).json({
        message: 'Failed to add the task.',
      });
    }

    res.status(201).json({
      task: { ...task, id: taskId },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while adding the task.',
      error: error.message,
    });
  }
};

const addTaskGroup = async (req, res) => {
  const { taskGroup } = req.body;

  try {
    if (!taskGroup) {
      return res.status(400).json({
        message: 'Invalid request body. Task Group is required.',
      });
    }

    const [taskGroupId] = await knex('taskgroups').insert(taskGroup);

    if (!taskGroupId) {
      return res.status(500).json({
        message: 'Failed to add the Task Group.',
      });
    }

    res.status(201).json({
      taskGroup: { ...taskGroup, id: taskGroupId },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while adding the Task Group.',
      error: error.message,
    });
  }
};

const addTaskDetail = async (req, res) => {

    console.log("addTaskDetail hit");

    const { taskDetail, taskId, userID } = req.body;

    
  
    try {
      if (!taskDetail || !taskId) {
        return res.status(400).json({
          message: 'Invalid request body. Both taskDetail and taskId are required.',
        });
      }
  
      taskDetail.task_id = taskId;
      taskDetail.user_id = userID;

      console.log("taskDetail: ", taskDetail)
  
      const [taskDetailId] = await knex('taskdetails').insert(taskDetail);
  
      if (!taskDetailId) {
        return res.status(500).json({
          message: 'Failed to add task detail.',
        });
      }
  
      res.status(201).json({
        taskDetail: { ...taskDetail, id: taskDetailId },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'An error occurred while adding task detail.',
        error: error.message,
      });
    }
  };
  

module.exports = {
    getTasksData,
    deleteTask,
    deleteTaskDetail,
    deleteTaskGroup,
    editTask,
    editTaskDetail,
    addTask,
    addTaskDetail,
    addTaskGroup
};