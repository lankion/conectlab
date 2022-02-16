const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;


// Use
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Banco de dados
mongoose.connect("mongodb://localhost:27017/conectlab", { useNewUrlParser: true , useUnifiedTopology : true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error Conexão")
else
    console.log("BD conectado")

//Rotas
const user = require("./routes/UserRoutes.js");
//const project = require("./routes/ProjectRoutes.js");
//const lesson = require("./routes/LessonRoutes.js");

app.use("/user", user);
//app.use("/project", project);
//app.use("/lesson", lesson);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Backend do ConectLab!')
})


app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
