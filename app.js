require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
