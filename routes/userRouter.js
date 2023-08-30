const express = require("express");
const router = express.Router();
const userDataController = require("../controllers/userDataController");

router
  .route("/:id")
  .get(userDataController.getUserData)
  // .post(warehouseController.createWarehouse);

// router
//   .route("/:id")
//   .get(warehouseController.getSingleWarehouse)
//   // .post((req, res) => {
//   //   console.log("Post single warehouse");
//   //   res.send("Post single warehouse");
//   // })
//   .put(warehouseController.updateWarehouse)
//   .delete(warehouseController.removeWarehouse);

// router
//   .route("/:id/inventories")
//   .get(warehouseController.getInventoriesForWarehouse);

module.exports = router;