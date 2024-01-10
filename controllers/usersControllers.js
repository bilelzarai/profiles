const usersModel = require("../models/usersModels");

// lister all users
exports.addUser = async (req, res) => {
  // define object
  const contactObj = {
    name: req.body.name,
    age: req.body.age,
  };

  // define model
  const users = await new usersModel(contactObj);
  try {
    // insert new users into db
     users.save();

    res.json({ message: contactObj }); // this gets executed when user visit http://localhost:3000/users
  } catch (e) {
    res.json(e); // this gets executed when user visit http://localhost:3000/users
  }
};

// lister all users
exports.listerAllUsers = async (req, res) => {
  const users = await usersModel.find({});

  try {
     res.send(users);
  } catch (error) {
    res.status(500).send(error);

  }
};
