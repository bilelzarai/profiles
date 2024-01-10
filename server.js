// fileName : server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Specify the port to listen on
const port = 3000; // You can use environment variables for port configuration

// Include route files
const usersRoute = require("./routes/api/usersRouters");
const productsRoute = require("./routes/api/projectsRouters");

// const Router = require("./routes/api");

app.use(express.json());
// app.use(Router);

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

// Start the server
app.listen(port, () => {
  console.log(`Node.js HTTP server is running on port ${port}`);
});

// Use routes

// app.post("", (req, res)=>{
//   res.send('this is the main');
  
// });
app.get('/', (req, res) => {
  res.send('this is the main');// this gets executed when user visit http://localhost:3000/
} );


app.use("/users", usersRoute);
app.use("/products", productsRoute);
