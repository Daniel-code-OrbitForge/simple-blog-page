## Simple Blog Page (Express + EJS)

# Group Three

A simple blog project built with _Express.js_ and _EJS templates_, using a JSON file as the data source (no database).  
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

```
Simple-blog-page/
│
├── server/
│ ├── models/
│ │ └── postModel.js # Handles JSON CRUD operations
│ ├── routes/
│ │ └── main.js # Routes for pages and API endpoints
│ └── data/
│ └── posts.json # Blog post data
│
├── views/
│ ├── layouts/
│ │ └── main.ejs # Main layout
│ ├── partials/
│ │ ├── header.ejs
│ │ ├── footer.ejs
│ │ └── search.ejs
│ ├── index.ejs # Home page
│ ├── post.ejs # Single post view
│ ├── add.ejs # Add post page
│ └── edit.ejs # Edit post page
│
├── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── img/
│ └── man-sunrise.jpg
│
├── app.js # Main Express server
├── package.json
└── README.md
```

API Endpoints

These endpoints can be tested using Postman:
Method Endpoint Description

### Get all post (GET)

`http://localhost:5000/api/posts/api/posts `

### Get single post by id (GET)

`/api/posts/:id `

### Create a new post (POST)

`/api/posts `

### Update a post by id (PUT)

`/api/posts/:id `

### Delete post by id (DELETE)

`/api/posts/:id `

---

## Installation & Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Daniel-code-OrbitForge/simple-blog-page.git
   cd simple-blog-page

   ```

2. **Install dependencies:**

   ```bash
   npm install "express, ejs, nodemon, express-ejs-layouts"

   ```

3. **Start the server:**

   ```bash
   node app.js
   (or using nodemon):
   npm run dev

   ```

4. **Open in browser:**

- http://localhost:5000/posts --> all posts

---

## ROUTES

- /posts ---> Get all posts
- /posts/id ---> Get a single post by _ID_

## Contribution Guide

- **Create a new branch for your fix:**

  ```bash
  git checkout -b feature-or-fix/
  your-feature-or-fix-name

  ```

- **Stage & Commit your changes:**

  ```bash
  git add .
  git commit -m "Describe your change/ fix"

  ```

- **Push to Github:**

  ```bash
  git push origin feature-or-fix/
  your-feature-or-fix-name

  ```

- **Open a _Pull Request (PR)_ for review and merging.**

## Team Notes

- Minimum of 10 posts should be added to post.json
- Everyone should commit at least once (you can even edit this README.md file and commit, or edits and fixes, etc.)
- Snitching is allowed if someone doesn't contribute
- Let's get this guys!..

# License

**This project is for educational purposes only.**
