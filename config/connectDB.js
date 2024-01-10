const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected", error);
  }
};




const cluster = "portfolio";
const userName = "potfolio";
const password = "potfolio";
const dbName = "portfolio-db";
mongoose.connect(
  `mongodb+srv://${userName}:${password}@${cluster}.hmu4zxx.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion :"));

db.once("open", () => {
  console.log("Connecté à la base de données MongoDB");
});

module.exports = connectDB;