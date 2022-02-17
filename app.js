const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//about us redirects
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

//Blog routes
app.use("/blogs", blogRoutes);

//404 redirects
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
