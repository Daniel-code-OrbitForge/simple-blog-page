const express = require("express");
const fs = require("fs");
const path = require("path");

// Creating an Express router object
const router = express.Router();

// Path to posts.json (our "database")
const postsFilePath = path.join(__dirname, "../data/posts.json");

// Utility function: Read posts.json
function getPosts() {
  const data = fs.readFileSync(postsFilePath, "utf-8");
  return JSON.parse(data);
}

// ------------------ ROUTES ------------------ //

// Home Page - Show all posts
// @route  GET /
router.get("/", (req, res) => {
  const posts = getPosts(); // Load posts from JSON
  res.render("index", { title: "Home", posts });
});

// The About Page
// @route  GET /about
router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// The Contact Page
// @route  GET /contact
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// The Add Post Page (form)
// @route  GET /add
router.get("/add", (req, res) => {
  res.render("add", { title: "Add New Post" });
});

// Function to View Single Post
// @route  GET /posts/:id
router.get("/posts/:id", (req, res) => {
  const posts = getPosts();
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).render("error", { title: "Error", message: "Post not found" });
  }

  res.render("post", { title: post.title, post });
});

router.get("/posts/:id/edit", (req, res) => {
  const posts = getPosts();
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res
      .status(404)
      .render("error", { title: "Error", message: "Post not found" });
  }

  res.render("edit", { title: "Edit Post", post });
});

module.exports = router;
