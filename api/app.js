const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Database
const db = require("./config/database");
// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../app/build")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../app/build/index.html"))
);

app.get("/api", (req, res) => res.send("<p>Test</p>"));

// Users routes
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
