const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Campaign = require("../models/Campaign");
const CampaignController = require("../controllers/CampaignController");

// Get campaigns list
router.get("/", CampaignController.getAll);

// // Create new user
// router.post("/", CampaignController.create);

module.exports = router;
