const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const postsFile = path.join(__dirname, "../posts.json");

// Getting all posts
router.get("/", (req, res) => {
    fs.readFile(postsFile, "utf-8", (err, data) => {
        if (err) return res.status(500).send("Error getting posts data");
        const posts = JSON.parse(data);
        res.render("posts", { posts });
    });
});

// Getting a single post by ID
router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    fs.readFile(postsFilePath, "utf-8", (err, data) => {
        if (err) return res.status(500).send("Error getting posts data");
        const posts = JSON.parse(data);
        const post = posts.find((p => p.id === postId));
        if (!post) return res.status(404).send("Post not found!");
        res.render("post", { post });
    });
});

// Exporting the router
module.exports = router;