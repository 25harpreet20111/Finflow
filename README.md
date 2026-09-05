# 💰 FinFlow — Personal & Group Expense Tracker

> A full-stack MERN expense management application for tracking personal finances, managing budgets, analyzing spending, and sharing expenses with groups.

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/API-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Testing-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

---

## 📌 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🎯 Objectives](#-objectives)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏗️ System Architecture](#️-system-architecture)
- [📂 Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🔐 Environment Variables](#-environment-variables)
- [▶️ Running the Application](#️-running-the-application)
- [🧪 Testing](#-testing)
- [🔌 API Documentation](#-api-documentation)
- [🔒 Security](#-security)
- [📊 Application Workflow](#-application-workflow)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👩‍💻 Author](#-author)

---

# 📖 Project Overview

**FinFlow** is a full-stack personal and group expense tracking web application designed to help users manage their finances in an organized and efficient way.

The application allows users to record transactions, monitor spending, manage budgets, view financial analytics, and organize shared expenses through groups.

FinFlow combines a modern React frontend with a Node.js/Express backend and MongoDB database to provide a complete full-stack expense management solution.

The project also includes an **SMS Transaction Parser** that can extract useful transaction information such as amount, transaction type, merchant, date, and card details from supported banking SMS messages.

---

# 🎯 Objectives

The main objectives of FinFlow are:

- 📌 Simplify personal expense tracking
- 💰 Help users monitor income and expenses
- 📊 Provide visual spending analytics
- 🎯 Support budget management
- 👥 Enable shared/group expense management
- 📱 Extract transaction information from banking SMS messages
- 🔐 Provide secure user authentication
- ⚡ Provide a responsive and user-friendly interface
- 🧪 Maintain reliable application functionality through automated testing

---

# ✨ Key Features

## 🔐 User Authentication

FinFlow provides user authentication and account management functionality.

Users can:

- Create an account
- Log in securely
- Manage their profile
- Authenticate using JWT-based sessions
- Use Google authentication where configured

Passwords are securely handled using hashing mechanisms on the backend.

---

## 💳 Transaction Management

Users can manage their financial transactions from a centralized interface.

Supported functionality includes:

- Add transactions
- Record income
- Record expenses
- Categorize transactions
- View transaction history
- Monitor transaction details
- Track financial activity

---

## 📱 SMS Transaction Parser

FinFlow includes an SMS parser that can identify financial information from supported bank SMS messages.

The parser can detect:

- 💰 Transaction amount
- 📥 Credit transactions
- 📤 Debit transactions
- 🏪 Merchant name
- 📅 Transaction date
- 💳 Masked card information

### Example

Input:

```text
Your account is debited Rs. 1,250.00 at Swiggy on 12/08/2026