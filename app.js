const express = require("express");

//creating express app
const app = express();

//register view engines
app.set("view engine", "ejs");

//create listener for request
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>This is from app.js</p>");
  res.render("index");
});

app.get("/about", (req, res) => {
  //res.send("<p>This is from about page</p>");
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

//404 redirects
app.use((req, res) => {
  res.status(404).render("404");
});
