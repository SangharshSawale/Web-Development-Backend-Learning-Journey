# 🚀 Backend Learning – MongoDB with Express (Day – MongoDB with Express)

Hi, I’m **Sangharsh** 👋  
Today I learned how to build a backend application using **MongoDB with Express and Mongoose** and perform complete CRUD operations using a NoSQL database.

This folder contains my practical project: a small **Mini WhatsApp chat app**.

---

## 📌 Today’s Topic  
**MongoDB with Express (Mongoose + EJS)**

---

## 🧠 What I learned today

### 1️⃣ Connecting MongoDB with Node.js

- I learned how to connect a Node.js application to MongoDB using **Mongoose**.
- I used a local MongoDB database:
  `mongodb://127.0.0.1:27017/whatsapp`

---

### 2️⃣ Creating a Mongoose Model

- I learned how to define a schema and model for chats.
- I created a `Chat` model with fields:
  - from
  - to
  - msg
  - create_at

---

### 3️⃣ Inserting data into MongoDB

- I learned how to create and save new documents using:
  - `new Chat()`
  - `save()`
- I also learned how to insert multiple documents using:
  - `insertMany()`

---

### 4️⃣ Reading data from MongoDB

- I learned how to fetch all chat documents using:
  - `Chat.find()`
- I passed the data to EJS templates and displayed it on the browser.

---

### 5️⃣ Updating data in MongoDB

- I learned how to update a chat message using:
  - `findByIdAndUpdate()`
- I learned how to validate and return updated documents using:
  - `runValidators` and `new: true`

---

### 6️⃣ Deleting data from MongoDB

- I learned how to delete a single chat using:
  - `findByIdAndDelete()`
- I also learned how to delete all chats using:
  - `deleteMany({})`

---

### 7️⃣ Using Express with MongoDB

- I learned how to:
  - connect routes with database operations
  - use async / await with Mongoose
  - handle database operations inside Express routes

---

### 8️⃣ Using Method Override

- I learned how to use HTTP methods that HTML forms do not support:
  - PUT
  - DELETE
- I used the `method-override` package for this.

---

### 9️⃣ Dynamic routing using MongoDB IDs

- I learned how to:
  - use route parameters with MongoDB `_id`
  - fetch and update documents using dynamic URLs

---

### 🔟 Using EJS for dynamic views

- I learned how to:
  - loop over database data using EJS
  - show chat messages dynamically
  - build edit and create forms using EJS

---

### 1️⃣1️⃣ Database seeding using init file

- I learned how to create an initialization file (`init.js`) to insert sample data into MongoDB using `insertMany()`.

---

## 🎯 Summary

Today I learned how to build a complete backend CRUD application using:

- MongoDB
- Express
- Mongoose
- EJS

This helped me understand how NoSQL databases are used in real backend projects and how MongoDB integrates with Express applications.

---

### ⭐ Topic completed: MongoDB with Express
