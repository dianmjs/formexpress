const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Iniciando el servidor de express");
});
