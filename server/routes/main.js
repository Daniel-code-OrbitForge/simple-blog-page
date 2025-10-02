// server/routes/main.js
const express = require("express");
const router = express.Router();
const postModel = require("../models/postModel");

// Home Page (list posts)
router.get("/", async (req, res) => {
  const posts = await postModel.getAllPosts();
  const locals = {
    title: "Fischers Blog",
    description: "Simple blog built with Node, Express & EJS",
  };
  res.render("index", { locals, posts });
});

// About Page
router.get("/about", (req, res) => {
  const locals = {
    title: "About - Fischers Blog",
    description: "Learn more about Fischers Blog",
  };
  res.render("about", { locals });
});

// Contact Page
router.get("/contact", (req, res) => {
  const locals = {
    title: "Contact - Fischers Blog",
    description: "Get in touch with Fischers Blog",
  };
  res.render("contact", { locals });
});

// View Single Post
router.get("/post/:id", async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { post });
});

// Add Post (form)
router.get("/add", (req, res) => {
  res.render("add");
});

// Handle Add Post (POST)
router.post("/add", async (req, res) => {
  const { title, body, author } = req.body;
  await postModel.addPost({ title, body, author });
  res.redirect("/");
});

// Edit Post (form)
router.get("/edit/:id", async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// Handle Edit Post (POST)
router.post("/edit/:id", async (req, res) => {
  const { title, body, author } = req.body;
  await postModel.updatePost(req.params.id, { title, body, author });
  res.redirect("/");
});

// Delete Post
router.post("/delete/:id", async (req, res) => {
  await postModel.deletePost(req.params.id);
  res.redirect("/");
});

/* =====================================================
   API Routes for CRUD operations and API testing
   (These can be tested via Postman or similar tools)
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
