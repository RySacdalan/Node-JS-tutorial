//**BLOG ROUTES**
const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

//get method
router.get("/", blogController.blog_index);

//post method
router.post("/", blogController.blog_create_post);

//get single blog *route parameters*
router.get("/:id", blogController.blog_details);

//delete method
router.delete("/:id", blogController.blog_delete);

module.exports = router;
