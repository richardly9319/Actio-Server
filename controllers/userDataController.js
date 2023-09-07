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

    console.log("req.params", req.params);
     
    const itemTypeDetails = itemType.slice(0, -1) + "details";

    

    try {
      if ((itemType == "goals") || (itemType == "challenges")) {
        await knex(`${itemTypeDetails}`).where('section_id', itemID).del();
      }

        await knex(itemType).where('id', itemID).del();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while deleting item' });
    }
};

const addItem = async (req, res) => {
    const itemType = req.params.itemType;
    const newItemData = req.body;
    console.log(itemType);
    console.log(newItemData[itemType]);

    try {
        const insertedItem = await knex(itemType).insert(newItemData[itemType]);

        res.status(201).json({
            message: 'Item added successfully',
            newItem: { id: insertedItem[0], ...newItemData },
        });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while adding item' });
    }
};

const editItem = async (req, res) => {
  const itemID = req.params.taskId;
  const itemType = req.params.itemType;

  const { item, itemDetails } = req.body;

  const itemTypeDetails = itemType.slice(0, -1) + "details";

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

    if (Array.isArray(itemDetails) && itemDetails.length > 0) {
      for (const detail of itemDetails) {
        if (detail.id) {
          await knex(itemTypeDetails)
            .where('id', detail.id)
            .update(detail);
        }
      }
    }

    const updatedItemDetails = await knex(itemTypeDetails)
      .where('section_id', itemID)
      .select('*');

    res.status(200).json({ item: updatedItem, itemDetails: updatedItemDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while updating the task and task detail',
      error: error.message,
    });
  }
};


const addDetail = async (req, res) => {
  const itemType = req.params.itemType; 
  const itemID = req.params.itemId; 
  const newDetailData = req.body; 
  const itemTypeDetails = itemType.slice(0, -1) + "details";
  try {
    newDetailData.user_id = req.params.id; 
    newDetailData.section_id = itemID;

    const insertedDetail = await knex(itemTypeDetails).insert(newDetailData);

    res.status(201).json({
      message: 'Detail added successfully',
      newDetail: { id: insertedDetail[0], ...newDetailData },
    });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while adding detail' });
  }
};




  

module.exports = {
    getUserData,
    deleteItem,
    addItem,
    editItem,
    addDetail
};