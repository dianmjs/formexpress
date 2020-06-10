const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded());

//Rutas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  res.send("<h1>Hola " + req.body.name + " !</h1>");
});

app.listen(3000, () => {
  console.log("Iniciando el servidor de express");
});
