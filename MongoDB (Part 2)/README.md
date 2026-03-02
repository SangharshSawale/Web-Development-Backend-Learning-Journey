# 🚀 Backend Learning – MongoDB with Mongoose (Node.js)

Hi, I’m **Sangharsh** 👋  
Today I completed **MongoDB – Part 2** and practiced working with MongoDB using **Mongoose** in a Node.js project.

This folder contains my practical work for MongoDB using JavaScript (backend side).

---

## 📌 Today’s Topic  
**MongoDB with Mongoose (Node.js)**

---

## 🧠 What I learned and practiced today

### 1️⃣ Connecting MongoDB with Node.js

- I learned how to connect MongoDB with a Node.js application using Mongoose.
- I used the local MongoDB server:

- `mongodb://127.0.0.1:27017/test`
- `mongodb://127.0.0.1:27017/amazon`

---

### 2️⃣ Creating schemas and models

I learned how to:

- create schemas using `mongoose.Schema()`
- create models using `mongoose.model()`

I created different schemas and models such as:

- User schema
- Book schema
- Mobile schema

---

### 3️⃣ Inserting documents

I learned how to:

- create a document using `new Model()`
- save it using `.save()`
- insert multiple documents using `insertMany()`

---

### 4️⃣ Reading documents

I practiced:

- `find()`
- `findOne()`
- `findById()`

to read data from MongoDB collections.

---

### 5️⃣ Updating documents

I learned how to update records using:

- `updateOne()`
- `updateMany()`
- `findOneAndUpdate()`
- `findByIdAndUpdate()`

I also learned how to use:

- `{ new : true }`

to return the updated document.

---

### 6️⃣ Deleting documents

I practiced deleting records using:

- `deleteOne()`
- `deleteMany()`
- `findOneAndDelete()`
- `findByIdAndDelete()`

---

### 7️⃣ Using conditions and operators

I used MongoDB operators such as:

- `$gt`

to filter documents while updating and deleting.

---

### 8️⃣ Schema validation and constraints

I learned how to apply validations in schemas such as:

- `required`
- `default`
- `min`
- `enum`

Examples I practiced:

- minimum price validation
- default stock value
- enum values for mobile category (Android, IPhone)

---

### 9️⃣ Working with multiple databases and collections

I worked with:

- `test` database → users collection
- `amazon` database → books and mobiles collections

---

## 🎯 Summary

Today I learned how to use MongoDB in a real backend environment using Mongoose.

I practiced:

- connecting MongoDB with Node.js
- creating schemas and models
- applying validation rules
- performing complete CRUD operations using Mongoose methods

This helped me clearly understand how MongoDB is used in backend applications instead of using only the mongosh shell.

---

## 🌱 Learning note

All database operations were executed using Node.js files  
(`index.js`, `books.js`, `mobiles.js`) connected to the local MongoDB server.

VS Code was used to write and run the JavaScript files.

---

### ⭐ Topic completed: MongoDB with Mongoose (Part 2)
