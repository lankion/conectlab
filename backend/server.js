const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./database/Config.js");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const user = require("./routes/UserRoutes.js");


app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", user);

app.get('/', (req, res) => {
  res.send('Bem vindo ao Backend do ConectLab!')
})


app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;