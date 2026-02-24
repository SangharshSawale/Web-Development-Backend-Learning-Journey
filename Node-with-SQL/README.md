# 🚀 Backend Learning – Node with SQL (Day – Node with SQL)

Hi, I’m **Sangharsh** 👋  
Today I learned how to connect a Node.js + Express application with a SQL database (MySQL) and perform complete CRUD operations using real database data.

This folder contains my practical project based on **Node with SQL**.

---

## 📌 Today’s Topic  
**Node with SQL (MySQL + Express + EJS)**

---

## 🧠 What I learned today

### 1️⃣ Connecting Node.js with MySQL

- I learned how to connect a Node.js application with a MySQL database using the `mysql2` package.
- I created a database connection using:

- host  
- user  
- database  
- password  

---

### 2️⃣ Creating Database Schema

I created a user table using SQL with:

- Primary key
- Unique constraints
- Not null constraints

File used:
- `schema.sql`

Table fields:
- id
- username
- email
- password

---

### 3️⃣ Express + MySQL Integration

I learned how to:

- execute SQL queries using `connection.query()`
- fetch records from database
- insert new records
- update existing records
- delete records safely

---

### 4️⃣ Reading data from database

I learned how to:

- fetch all users from database
- show them in EJS templates
- pass database data to views

---

### 5️⃣ Creating new users (INSERT)

I learned how to:

- read form data using `req.body`
- generate unique ids using `uuid`
- insert new users into MySQL table

---

### 6️⃣ Editing user data (UPDATE)

I learned how to:

- open edit form for a specific user
- verify user password
- update only the username in the database

---

### 7️⃣ Deleting a user (DELETE)

I learned how to:

- verify both email and password before deleting
- remove a user record from the database safely

---

### 8️⃣ Using Method Override

I learned how to use:

- PATCH request for update
- DELETE request for delete

using the `method-override` package with query parameter.

---

### 9️⃣ Dynamic Routing with Database

I learned how to:

- use route parameters
- fetch a single user using its id
- perform operations based on that id

---

### 🔟 Using EJS with Database Data

I learned how to:

- display database records in tables
- render dynamic pages using EJS
- pass SQL result sets into views

---

### 1️⃣1️⃣ Faker for dummy data

I learned how to use the Faker library to:

- generate fake users
- prepare large test data for database practice

---

## 📂 Files in this folder

### Main server file

- `index.js`  
Express server, MySQL connection and all routes for CRUD operations.

---

### Database file

- `schema.sql`  
Contains SQL code for creating the `user` table.

---

### View files (EJS)

- `home.ejs` – shows total user count  
- `user.ejs` – displays all users  
- `newUser.ejs` – form to add a new user  
- `edit.ejs` – edit username form  
- `delete.ejs` – delete confirmation form  

---

## 🧩 Features implemented

- Show total number of users
- List all users
- Add a new user
- Edit existing user
- Delete a user with validation
- Secure update and delete using password checks

---

## 🛠️ Packages used

- express
- mysql2
- ejs
- uuid
- method-override
- @faker-js/faker

---

## 🎯 Summary

Today I learned how to build a real backend application using:

- Node.js
- Express
- MySQL
- EJS templates

and how to perform full CRUD operations with a SQL database.

This helped me clearly understand how backend servers communicate with databases in real projects.

---

## 🌱 Learning note

This project helped me move from file-based data to real database-driven backend development using SQL.

---

### ⭐ Topic completed: Node with SQL
