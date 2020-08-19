const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

// Get users list
router.get("/", (req, res) =>
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err))
);

// Add a user

module.exports = router;
