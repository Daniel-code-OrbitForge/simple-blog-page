import express from 'express';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';


const { format } = require('date-fns');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsFile = path.join(__dirname, '.posts.js')//


const router = express.Router();//

// Getting all posts
router.get("/", async (req, res) => {
    try {
        const data = await fs.readFile(postsFile, "utf-8");
        const posts = JSON.parse(data);
        res.render("posts", { posts });
    } catch (err) {
        res.status(500).send("Error getting posts data");
    }
});

// Getting a single post by ID
router.get("/:id", async (req, res) => {
    const postId = parseInt(req.params.id);
    try {
        const data = await fs.readFile(postsFile, "utf-8");
        const posts = JSON.parse(data);
        const post = posts.find((p) => p.id === postId);
        if (!post) return res.status(404).send("Post not found!");
        res.render("post", { post });
    } catch (err) {
        res.status(500).send("Error getting posts data");
    }
});

// Exporting the router
export default router;