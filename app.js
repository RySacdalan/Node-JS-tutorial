const express = require("express");

//creating express app
const app = express();

//register view engines
app.set("view engine", "ejs");

//create listener for request
app.listen(3000);

//creating middleware
app.use((req, res, next) => {
  console.log("New request made");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("From the next middleware");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi find eggs", snippet: "lorem random word because im lazy" },
    {
      title: "Mario find stars",
      snippet: "lorem random word because im lazy",
    },
    {
      title: "How to defeat bowsers",
      snippet: "lorem random word because im lazy",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>This is from about page</p>");
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

//404 redirects
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
