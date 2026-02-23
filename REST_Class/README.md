# 🚀 Backend Learning – REST & CRUD with Express (Day – REST Class)

Hi, I’m **Sangharsh** 👋  
This folder contains my backend learning practice using **Express.js and EJS**.

Today I learned how to build a small REST-style application and how to perform full **CRUD operations** using Express.

---

## 📌 What I learned today

### Introduction to REST & CRUD

I learned how REST architecture works and how backend applications follow standard routes for creating, reading, updating and deleting data.

---

### Creating a REST-style Express application

I learned how to:

- Create multiple routes for a single resource
- Organize routes based on actions
- Follow REST naming conventions

---

### CRUD Operations

I practiced all CRUD operations:

- **Create** – adding a new post
- **Read** – showing all posts and a single post
- **Update** – editing an existing post
- **Delete** – removing a post

---

### Routing in Express

I learned how to create routes using:

- `app.get()`
- `app.post()`
- `app.patch()`
- `app.delete()`

---

### Handling form data

I learned how to read data from forms using:

- `express.urlencoded()`
- `req.body`

---

### Method Override

I learned how to use:

- `method-override`

to send `PATCH` and `DELETE` requests from HTML forms.

---

### Route Parameters

I learned how to use dynamic routes such as:

- `/posts/:id`

and access values using:

- `req.params`

---

### Using EJS templates

I learned how to:

- Render dynamic data in views
- Loop over data using EJS
- Pass variables from Express to EJS files
- Create multiple pages using EJS

---

### Serving static files

I learned how to serve CSS using:

- `express.static()`

and the `public` folder.

---

## 🧠 Summary

Today I learned:

- How RESTful routing works
- How CRUD operations are implemented in Express
- How to use GET, POST, PATCH and DELETE methods
- How to use method-override with forms
- How to read route parameters
- How to read form data using req.body
- How to use EJS with Express
- How to structure a REST-based backend project

---

## 📂 Files in this folder

- `index.js` – Main Express server and REST routes  
- `views/` – EJS templates (index, new, show, edit pages)  
- `public/` – Static files (CSS)

---

## 🎯 Goal

My goal is to become confident in building REST APIs and CRUD-based backend applications using Express before moving to database integration.
