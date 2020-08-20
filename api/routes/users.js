const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const CampaignController = require("../controllers/CampaignController");

// Users
// Get users list
router.get("/", UserController.getAll);

// Create new user
router.post("/", UserController.create);

//  Contained by User
// Get all campaigns owned by user
router.get("/:userId/campaigns", CampaignController.getAllById);
// Add a new campaign on given user
router.post("/:userId/campaigns", CampaignController.create);

module.exports = router;
