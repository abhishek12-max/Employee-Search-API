# 🚀 Employee Management API

A production-style REST API built with **Node.js**, **Express.js**, and **MongoDB**.

This project demonstrates common backend features used in real-world applications such as CRUD operations, search, filtering, sorting, pagination, and combined query handling.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator

---

## ✨ Features

- ✅ Create Employee
- ✅ Get All Employees
- ✅ Search Employees (Regex)
- ✅ Filter Employees by Role
- ✅ Sort Employees
- ✅ Pagination
- ✅ Combined Search + Filter + Sort + Pagination
- ✅ Input Validation
- ✅ Error Handling

---

## 📂 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /employee | Create Employee |
| GET | /employee | Get All Employees |
| GET | /employee/search | Search Employees |
| GET | /employee/filter | Filter Employees |
| GET | /employee/sort | Sort Employees |
| GET | /employee/paginate | Pagination |
| GET | /employee/list | Combined Search + Filter + Sort + Pagination |

---

## 📌 Example Request

```http
GET /employee/list?search=ab&role=manager&sort=fullname&order=asc&page=1&limit=10
```

---

## 📁 Project Structure

```
project
│
├── config
├── controller
├── models
├── routes
├── validator
├── app.js
├── server.js
└── .env
```

---

## ▶️ Installation

```bash
git clone <repository-url>
```

```bash
npm install
```

```bash
npm run dev
```

---

## 👨‍💻 Concepts Covered

- REST API
- CRUD Operations
- Express Router
- Mongoose Models
- Validation
- Regex Search
- Dynamic Query Object
- Dynamic Sorting
- Filtering
- Pagination
- Query Parameters

---

## 📄 License

This project is created for learning and portfolio purposes.
