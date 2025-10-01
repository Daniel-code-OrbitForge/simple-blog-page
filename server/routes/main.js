const express = require("express");

// Creating an Express router object
const router = express.Router();

// Importing the post model for data operations
const postModel = require("../models/postModel");

// ------------------ ROUTES ------------------ //

// Home Page - Show all posts
// @route  GET /
router.get("/", async (req, res) => {
  const posts = await postModel.getAllPosts();
  const locals = {
    title: "Simple Blog",
    description: "Simple blog built with Node, Express & EJS by Group 3",
  };
  res.render("index", { locals, posts });
});

// The About Page
// @route  GET /about
router.get("/about", (req, res) => {
  const locals = {
    title: "About - Simple Blog",
    description: "Learn more about Simple Blog",
  };
  res.render("about", { locals });
});

// The Contact Page
// @route  GET /contact
router.get("/contact", (req, res) => {
  const locals = {
    title: "Contact - Simple Blog",
    description: "Get in touch with Simple Blog",
  };
  res.render("contact", { locals });
});

// The Add Post Page (form)
// @route  GET /add
router.get("/add", (req, res) => {
  res.render("add", { title: "Add New Post" });
});

// Function to View Single Post
// @route  GET /posts/:id
router.get("/post/:id", async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { post });
});

// Edit Post
router.get("/edit/:id", async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// Handle Edit Post
router.post("/edit/:id", async (req, res) => {
  const { title, body, author } = req.body;
  await postModel.updatePost(req.params.id, { title, body, author });
  res.redirect("/");
});

// Handle Delete Post
router.post("/delete/:id", async (req, res) => {
  await postModel.deletePost(req.params.id);
  res.redirect("/");
});

/* =====================================================
   API Routes for CRUD operations and API testing
   ================================================== */
// Get all posts
router.get("/api/posts", async (req, res) => {
  const posts = await postModel.getAllPosts();
  res.json(posts);
});

// Get single post
router.get("/api/posts/:id", async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// Create a new post
router.post("/api/posts", async (req, res) => {
  const { title, body, author } = req.body;
  const newPost = await postModel.addPost({ title, body, author });
  res.status(201).json(newPost);
});

// Update a post
router.put("/api/posts/:id", async (req, res) => {
  const { title, body } = req.body;
  const updatedPost = await postModel.updatePost(req.params.id, {
    title,
    body,
  });
  if (!updatedPost) return res.status(404).json({ message: "Post not found" });
  res.json(updatedPost);
});

// Delete a post
router.delete("/api/posts/:id", async (req, res) => {
  const deleted = await postModel.deletePost(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post deleted successfully" });
});

module.exports = router;
