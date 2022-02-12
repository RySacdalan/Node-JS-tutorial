const express = require("express");

//creating express app
const app = express();

//create listener for request
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>This is from app.js</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>This is from about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});
