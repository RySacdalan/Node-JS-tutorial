const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//creating express app
const app = express();

//connection to mongoDB
const dbURI =
  "mongodb+srv://netninja:test1234@node-js-guide.dfy54.mongodb.net/Node-tutorial?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engines
app.set("view engine", "ejs");

//middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Another blog",
    snippet: "About my new blog",
    body: "This is way more about my blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//routes
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
