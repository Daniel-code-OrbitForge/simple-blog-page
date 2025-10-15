<<<<<<< HEAD
<<<<<<< HEAD
// main entry
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './routes/posts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
const PORT = 3000;

import expressLayouts from 'express-ejs-layouts';
app.use(expressLayouts);
=======
require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
>>>>>>> 55c039c3387d65d2a03ef3a06e846877a42f6901

=======
require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

>>>>>>> 55c039c3387d65d2a03ef3a06e846877a42f6901
// To serve static files via public folder
app.use(express.static("public"));

// To use Express EJS Layouts as middleware
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Router Middleware for main routes
app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
<<<<<<< HEAD
<<<<<<< HEAD

// Setting up our server

app.listen(PORT, () =>{
    console.log(`Congrats, Server running at http://localhost:${PORT}`);

});
=======
>>>>>>> 55c039c3387d65d2a03ef3a06e846877a42f6901
=======
>>>>>>> 55c039c3387d65d2a03ef3a06e846877a42f6901
