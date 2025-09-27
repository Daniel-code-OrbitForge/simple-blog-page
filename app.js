// main entry
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './routes/posts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
// Setting up our PORT variable
const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';

import expressLayouts from 'express-ejs-layouts';
app.use(expressLayouts);

// Setting EJS as Our view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setting up our middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Setting up our ROUTER === Routes ===
app.use("/posts", postRoutes);

// Rendering the Home page view
app.get('/', function(req, res){
    res.render("home");
});
// Home redirect
app.get('/', (req, res) =>{
    res.redirect("/posts");
});

// Setting up our server

app.listen(PORT, () =>{
    console.log(`Congrats, Server running at http://${hostName}:${PORT}/`);

});