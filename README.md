## Simple Blog Page (Express + EJS)
# Group Three

A simple blog project built with *Express.js* and *EJS templates*, using a JSON file as the data source (no database).  
This project is for learning Express routing, EJS rendering, modular code structure, and GitHub collaboration.

---

## Features
- Display all posts from posts.json (/posts route)
- View a single post by ID (/posts/:id)
- EJS templates for dynamic rendering
- Modular routes with Express Router
- Static files served from public/
- At least 20 posts stored in JSON

---

## Project Structure

simple-blog-page/ | |--- posts.json            # blog posts data (JSON, no DB) 
|--- app.js                                    # main Express server 
|--- routes/                                   # routes folder    
|    |--- posts.js                             # /posts and /posts/:id routes 
├── views/                                     # EJS templates  
     |--- posts.ejs                            # all posts view    
     |--- post.ejs                             # single post view 
|--- public/                                   # static files (CSS, images)    
     |--- style.css 
|--- package.json 
|--- README.md

---

##  Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/<your-username>/simple-blog-express.git
   cd simple-blog-page

2. **Install dependencies:**
   ```bash
   npm install "express, ejs, nodemon, express-ejs-layouts"

3. **Start the server:**
   ```bash
   node app.js
   (or using nodemon):
   npx nodemon app.js

4. **Open in browser:**
- http://localhost:3000/posts --> all posts
- http://localhost:3000/post

---

## ROUTES

- /posts ---> Get all posts
- /post  ---> Get a single post by *ID*

## Contribution Guide
- **Create a new branch for your fix:**
  ```bash
  git checkout -b feature-or-fix/ 
  your-feature-or-fix-name

- **Stage & Commit your changes:**
  ```bash
  git add .
  git commit -m "Describe your change/ fix"

- **Push to Github:**
  ```bash
  git push origin feature-or-fix/
  your-feature-or-fix-name

- **Open a *Pull Request (PR)* for review and merging.**

## Team Notes

- Minimum of 20 posts should be added to post.json
- Everyone should commit at least once (you can even edit this README.md file and commit, or edits and fixes, etc.)
- Snitching is allowed if someone doesn't contribute
- Let's get this guys!..

# License
**This project is for educational purposes only.**