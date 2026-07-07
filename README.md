# Employee Search API

A simple REST API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to demonstrate employee creation, fetching, and searching using **MongoDB Regular Expressions (Regex)**.

---

## 🚀 Features

- Create Employee
- Get All Employees
- Search Employees by Name
- Input Validation using Express Validator
- MongoDB Regex Search
- Case-Insensitive Search
- MVC Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- Dotenv

---

## 📁 Project Structure

```text
employee-search-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── employee.controller.js
│
├── models/
│   └── employee.model.js
│
├── routes/
│   └── employee.route.js
│
├── validators/
│   └── employee.validator.js
│
├── app.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

## 📌 API Endpoints

### Create Employee

```http
POST /employee
```

Request Body

```json
{
  "fullname": "Abhishek",
  "username": "abhishek123",
  "email": "abhishek@gmail.com",
  "password": "123456",
  "role": "employee"
}
```

---

### Get All Employees

```http
GET /employee
```

---

### Search Employee

```http
GET /employee/search?name=ab
```

Example

```http
GET /employee/search?name=rah
```

---

## 📚 Concepts Learned

- Express Routing
- MVC Architecture
- MongoDB CRUD
- Query Parameters (`req.query`)
- MongoDB Regex (`$regex`)
- Case Insensitive Search (`$options: "i"`)
- Express Validator
- Error Handling using Try/Catch

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the server

```bash
npm start
```

---

## 👨‍💻 Author

**Abhishek Panwar**

Backend Learning Series 

---

## 🎯 Learning Objective

This project was built to understand the fundamentals of implementing search functionality in a Node.js and MongoDB application.

### In this project, I learned:

- How to build REST APIs using Express.js
- How to structure a project using MVC Architecture
- How to connect Express with MongoDB using Mongoose
- How to use Query Parameters (`req.query`)
- How MongoDB Regex (`$regex`) works
- How to perform Case-Insensitive Search using (`$options: "i"`)
- How to validate user input using Express Validator
- How to handle errors using Try/Catch
- Why `find()` is used for search operations
- How to hide sensitive data using `.select("-password")`

---

## 🚀 Future Improvements

- Add Pagination
- Add Sorting
- Add Filtering
- Add JWT Authentication
- Add Role-Based Authorization
- Add Password Hashing using bcrypt
- Add Centralized Error Handling
- Deploy the API

---

## 👨‍💻 Author

**Abhishek Panwar**

Backend Learning Series 🚀