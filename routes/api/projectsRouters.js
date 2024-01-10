// routes/projects.js
const express = require("express");
const router = express();

// Define a route
router.get("/", (req, res) => {
  res.send("this is project route"); // this gets executed when user visit http://localhost:3000/products
});

router.get("/101", (req, res) => {
  res.send("this is project 101 route"); // this gets executed when user visit http://localhost:3000/products/101
});

router.get("/102", (req, res) => {
  res.send("this is project 102 route"); // this gets executed when user visit http://localhost:3000/products/102
});

// export the router module so that server.js file can use it
module.exports = router;

