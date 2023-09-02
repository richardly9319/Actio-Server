const knex = require("knex")(require("../knexfile.js"));

const getUserData = (req, res) => {
    const userID = req.params.id;
  
    const userData = {};
  
    knex("users")
      .where("users.id", userID)
      .then((userDataFromUsersTable) => {
        userData.user = userDataFromUsersTable[0]; // Assuming you're expecting a single user
        return knex('goals')
          .where("user_id", userID);
      })
      
      .then((goalsData) => {
        userData.goals = goalsData;
        return knex('challenges')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.challenges = data;
        return knex('challengeDetails')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.challengedetails = data;
        return knex('inspiration')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.inspiration = data;
        return knex('insightsIdeas')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.insightsIdeas = data;
        return knex('goaldetails')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.goaldetails = data;
        res.status(200).json(userData);
      })
      .catch((err) => res.status(400).send(`Error retrieving UserData: ${err}`));
  };


  const deleteItem = async (req, res) => {
    const itemType = req.params.itemType;
    const itemID = req.params.itemId;

    const itemTypeDetails = itemType.slice(0, -1) + "details";

    try {
        await knex(`${itemTypeDetails}`).where('section_id', itemID).del();

        await knex(itemType).where('id', itemID).del();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while deleting item' });
    }
};

const addItem = async (req, res) => {
    const itemType = req.params.itemType;
    const newItemData = req.body;

    try {
        const insertedItem = await knex(itemType).insert(newItemData);

        res.status(201).json({
            message: 'Item added successfully',
            newItem: { id: insertedItem[0], ...newItemData },
        });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while adding item' });
    }
};




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
    const taskId = req.params.taskId;
  
    try {
      await knex('taskdetails')
      .where('task_id', taskId).del();

      await knex('tasks')
      .where('id', taskId).del();
  
      res.status(200).json({ message: 'Task and associated details deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting task and details' });
    }
  };

  const editTask = async (req, res) => {
    const taskId = req.params.taskId;
    const { task, taskDetails } = req.body;
  
    try {
      // Check if task and taskDetails are defined
      if (!task || !taskDetails) {
        return res.status(400).json({
          message: 'Invalid request body. Both task and taskDetails are required.',
        });
      }
  
      // Update the task
      await knex('tasks').where('id', taskId).update(task);
  
      // Check if the task was updated successfully
      const updatedTask = await knex('tasks').where('id', taskId).first();
      if (!updatedTask) {
        return res.status(404).json({
          message: `Task with ID: ${taskId} to be edited not found.`,
        });
      }
  
      // Update the task detail
      await knex('taskdetails').where('id', taskDetails.id).update(taskDetails);
  
      // Check if the task detail was updated successfully
      const updatedTaskDetail = await knex('taskdetails')
        .where('id', taskDetails.id)
        .first();
      if (!updatedTaskDetail) {
        return res.status(404).json({
          message: `Task detail with ID: ${taskDetails.id} to be edited not found.`,
        });
      }
  
      res.status(200).json({ task: updatedTask, taskDetail: updatedTaskDetail });
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred while updating the task and task detail',
        error: error.message,
      });
    }
  };
  
  const addTask = async (req, res) => {
    const { task, taskDetails } = req.body;
  
    try {
      if (!task || !taskDetails) {
        return res.status(400).json({
          message: 'Invalid request body. Both task and taskDetails are required.',
        });
      }
  
      const [taskId] = await knex('tasks').insert(task);
  
      if (!taskId) {
        return res.status(500).json({
          message: 'Failed to add the task.',
        });
      }
  
      taskDetails.task_id = taskId;
  
      const [taskDetailsId] = await knex('taskdetails').insert(taskDetails);
  
      // Check if the taskDetails were inserted successfully
      if (!taskDetailsId) {
        return res.status(500).json({
          message: 'Failed to add task details.',
        });
      }
  
      res.status(201).json({
        task: { ...task, id: taskId },
        taskDetails: { ...taskDetails, id: taskDetailsId },
      });
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred while adding the task and task details.',
        error: error.message,
      });
    }
  };
  
  

module.exports = {
    getUserData,
    getTasksData,
    deleteTask,
    editTask,
    addTask,
    deleteItem,
    addItem
};