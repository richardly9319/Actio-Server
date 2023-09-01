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


module.exports = {
    getUserData,
    getTasksData,
    deleteTask,
};