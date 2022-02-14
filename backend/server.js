const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;


//Banco de dados
const config = require("./database/Config.js");
const MongoClient = require('mongodb').MongoClient;
const dbUrl = config.dbUrl;

MongoClient.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology : true} ,(err, client) => {
  if (err) return console.log(err)
  console.log("BD conectado")
});

//Rotas
const user = require("./routes/UserRoutes.js");
//const project = require("./routes/ProjectRoutes.js");
//const lesson = require("./routes/LessonRoutes.js");

// Use
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user", user);
//app.use("/project", project);
//app.use("/lesson", lesson);

app.get('/', (req, res) => {
  res.send('Bem vindo ao Backend do ConectLab!')
})


app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
