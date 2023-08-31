const knex = require("knex")(require("../knexfile.js"));

const getUserData = (req, res) => {
    const userID = req.params.id;
  
    const userData = {};
  
    knex("users")
      .where("users.id", userID)
      .then((userDataFromUsersTable) => {
        // Assuming userDataFromUsersTable contains the user data
        userData.user = userDataFromUsersTable[0]; // Assuming you're expecting a single user
        return knex('taskgroups')
          .where("user_id", userID);
      })
      .then((taskgroupsData) => {
        userData.taskgroups = taskgroupsData;
        return knex('tasks')
          .where("user_id", userID);
      })
      .then((tasksData) => {
        userData.tasks = tasksData;
        return knex('goals')
          .where("user_id", userID);
      })
      .then((goalsData) => {
        userData.goals = goalsData;
        // res.status(200).json(userData);
        return knex('taskdetails').where("user_id", userID);
      })
      .then((data) => {
        userData.taskdetails = data;
        return knex('challenges')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.challenges = data;
        return knex('challengeDetails')
          .where("user_id", userID);
      })
      .then((data) => {
        userData.challengeDetails = data;
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
  



module.exports = {
    getUserData,

};