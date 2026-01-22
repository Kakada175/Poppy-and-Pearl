# Poppy-and-Pearl

# 🌸 Poppy & Pearl – Full Stack Fashion E-Commerce Website

**Poppy & Pearl** is a **full-stack fashion e-commerce website** inspired by Korean minimalist style. The project combines a responsive frontend with a backend built using **Node.js, Express, and MySQL**, allowing product data to be managed dynamically.

🔗 **Live Demo (Frontend):**  
https://kakada175.github.io/Poppy-and-Pearl/

📂 **GitHub Repository:**  
https://github.com/kakada175/Poppy-and-Pearl

---

## 📌 Project Overview

Poppy & Pearl is a full-stack web development project created to practice **real-world frontend and backend integration**. The website simulates an online fashion store where users can browse products while the backend handles data storage and retrieval using a relational database.

This project demonstrates how a modern web application is structured, from UI design to server-side logic and database interaction.

---

## 🎯 Project Objectives

The main objectives of this project are:

- ✅ Build a responsive multi-page fashion website  
- ✅ Connect frontend pages to a backend API  
- ✅ Use **Node.js and Express** to build RESTful APIs  
- ✅ Store and retrieve data using **MySQL**  
- ✅ Understand client-server architecture  
- ✅ Create a portfolio-ready full-stack project  

---

## ✨ Features

### 🧑 User Features
- Browse fashion products dynamically  
- View product information fetched from database  
- Navigate between Home, Shop, Cart, About, and Contact pages  
- Experience a clean and modern UI  

### 🛠 Technical Features
- RESTful backend API  
- MySQL database integration  
- Separation of frontend and backend  
- Organized and maintainable project structure  
- Environment-based configuration  

---

## 📄 Pages Explanation

### 🏠 Home Page
- Displays brand introduction and featured products  
- Product data is fetched from the backend API  

### 🛍️ Shop Page
- Displays all available fashion products  
- Products are retrieved from MySQL via Express API  

### 🧾 Cart Page
- Displays selected items  
- Prepared for future cart and order logic  

### ℹ️ About Page
- Describes the brand concept and inspiration  

### 📞 Contact Page
- Displays contact information  
- Can be extended to store messages in database  

---

## 🧠 Technologies Used

### Frontend
- **HTML5** – Page structure  
- **CSS3** – Styling and responsive layout  
- **JavaScript (ES6)** – Fetch API, UI logic  

### Backend
- **Node.js** – Server runtime  
- **Express.js** – Web framework  
- **MySQL** – Relational database  

### Tools
- **Git & GitHub** – Version control  
- **GitHub Pages** – Frontend hosting  
- **Postman** – API testing  

---

## 🧩 System Architecture

```

Browser (Frontend)
│
├── HTML / CSS / JavaScript
│
└── Fetch API (HTTP Requests)
│
▼
Node.js + Express Server
│
▼
MySQL

````

---

## 🔌 Backend Explanation (Node.js + Express + MySQL)

The backend is built using **Node.js and Express**, following RESTful API principles.

### Backend Responsibilities:
- Handle HTTP requests from frontend  
- Fetch product data from MySQL  
- Send JSON responses  
- Manage database connections  

---

## 📁 Project Structure

```
📦 Poppy-and-Pearl
│
├── frontend/
│   ├── index.html
│   ├── shop.html
│   ├── cart.html
│   ├── about.html
│   ├── contact.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── assets/
│       └── images/
│
├── backend/
│   ├── app.js              # Express app entry
│   ├── routes/
│   │   └── productRoutes.js
│   ├── controllers/
│   │   └── productController.js
│   ├── config/
│   │   └── db.js           # MySQL connection
│   └── package.json
│
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kakada175/Poppy-and-Pearl.git
```

---

### 2️⃣ Backend Setup

```bash
cd Poppy-and-Pearl/backend
npm install
npm run dev
```

Create `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=poppy_and_pearl
PORT=5000
```

---

### 3️⃣ Database Setup

```sql
CREATE DATABASE poppy_and_pearl;
```

Create required tables (e.g. `products`).

---

### 4️⃣ Frontend Setup

```bash
cd ../frontend
open index.html
```

---

## 🧪 Learning Outcomes

Through this project, I learned:

* How frontend communicates with backend APIs
* How to build REST APIs using Express
* How to connect Node.js with MySQL
* How to structure a full-stack project
* How real e-commerce systems manage data

---

## ⚠️ Challenges & Solutions

| Challenge         | Solution                     |
| ----------------- | ---------------------------- |
| Connecting MySQL  | Used mysql2 package          |
| API design        | Followed REST principles     |
| Data flow         | Used Fetch API               |
| Project structure | Separated frontend & backend |

---

## 🔮 Future Improvements

* 🔐 User authentication (JWT)
* 🛒 Full cart & order system
* 💳 Payment integration
* 🧑‍💼 Admin dashboard
* ⚛️ React frontend
* ☁️ Cloud database deployment

---

## 👩‍💻 Author

**Chhem Kakada**
🎓 Computer Science & Engineering Student
🏫 Royal University of Phnom Penh
💡 Interested in Full-Stack & Backend Development

GitHub: [https://github.com/kakada175](https://github.com/kakada175)

---

## 📄 License

This project is licensed under the **MIT License**.

---
