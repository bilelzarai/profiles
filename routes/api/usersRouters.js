// routes/users.js
const express = require("express");
const userModel = require("../../models/usersModels");
const contactControllers = require("../../controllers/usersControllers");
// const app = express();
const router = express.Router();
const { listerAllUsers, addUser } = contactControllers;

// add users
router.get("/add_user", addUser

// async (request, response) => {
//   const user = new userModel(request.body);

//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// }
);

// Define all users
router.get("/lister", listerAllUsers);


// export the router module so that server.js file can use it
module.exports = router;
