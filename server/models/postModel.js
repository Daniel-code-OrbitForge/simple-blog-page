const fs = require("fs").promises;
const path = require("path");

const postsFilePath = path.join(__dirname, "../data/posts.json");

// Function to read posts from the JSON file
async function readPosts() {
  const data = await fs.readFile(postsFilePath, "utf-8");
  return JSON.parse(data);
}

// Function to write posts to the JSON file
async function writePosts(posts) {
  await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
}

// CRUD operations
async function getAllPosts() {
  return await readPosts();
}

async function getPostById(id) {
  const posts = await readPosts();
  return posts.find((post) => post.id === parseInt(id));
}

async function addPost(newPost) {
  const posts = await readPosts();

  const postToSave = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: newPost.title,
    body: newPost.body,
    author: newPost.author,
    createdAt: new Date().toISOString(),
  };

  posts.push(postToSave);
  await writePosts(posts);
  return postToSave;
}

async function updatePost(id, updatedData) {
  const posts = await readPosts();
  const index = posts.findIndex((post) => post.id === parseInt(id));
  if (index === -1) return null;

  posts[index] = {
    ...posts[index],
    ...updatedData,
    id: posts[index].id, // To ensure ID remains unchanged
    updatedAt: new Date().toISOString(),
  };
  await writePosts(posts);
  return posts[index];
}

async function deletePost(id) {
  const posts = await readPosts();
  const filtered = posts.filter((p) => p.id !== parseInt(id));
  await writePosts(filtered);
  return true;
}

module.exports = {
  readPosts,
  writePosts,
  getAllPosts,
  getPostById,
  addPost,
  deletePost,
  updatePost,
};
