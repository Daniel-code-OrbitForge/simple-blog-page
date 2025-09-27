// main entry
const express = require("express");
const path = require("path");
const postRoutes = require("./routes/posts");
const app = express();

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// Setting EJS as Our view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setting up our middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Setting up our ROUTER === Routes ===
app.use("/posts", postRoutes);

// Home redirect
app.get('/', (req, res) =>{
    res.redirect("/posts");
});

// Setting up our server
const PORT = 3000;
app.listen(PORT, () =>
console.log("Congrats, Server running on http://localhost:3000"));