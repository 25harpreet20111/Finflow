# 💰 FinFlow — Personal & Group Expense Tracker

<p align="center">
  <strong>A full-stack MERN expense management application for tracking transactions, managing budgets, analyzing spending, and sharing expenses with groups.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vitest-1.6-orange?logo=vitest" alt="Vitest">
</p>

---

## 📌 Project Overview

**FinFlow** is a full-stack expense management web application designed to help users efficiently manage their personal finances and group expenses.

The application provides a centralized platform where users can record transactions, monitor spending, manage budgets, analyze financial activity, and organize shared expenses through groups.

FinFlow follows a modern **MERN-style architecture** using React and TypeScript for the frontend, Node.js and Express.js for the backend, and MongoDB with Mongoose for data management.

The project also includes an **SMS transaction parser** that can extract useful financial information such as transaction amount, type, merchant, date, and card details from supported bank SMS formats.

---

## 🎯 Objectives

The main objectives of FinFlow are to:

- Simplify personal expense tracking
- Provide a centralized transaction management system
- Help users monitor their budgets
- Provide useful spending insights and analytics
- Support group-based expense management
- Reduce manual transaction entry using SMS parsing
- Provide secure user authentication
- Build a responsive and user-friendly financial dashboard
- Demonstrate full-stack web development using modern technologies

---

## ✨ Key Features

### 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Secure password hashing using `bcryptjs`
- Protected application routes
- User logout

### 💰 Transaction Management

- Add new transactions
- Track income and expenses
- Categorize transactions
- View transaction history
- Search transactions
- Filter transaction data
- Delete transactions
- Display transaction details

### 📊 Financial Dashboard

- Overview of financial activity
- Total income
- Total expenses
- Balance information
- Recent transactions
- Budget progress
- Spending visualization
- Financial tips

### 📈 Spending Analytics

FinFlow provides visual representations of financial activity to help users understand:

- Spending patterns
- Category-wise expenses
- Budget utilization
- Income and expense trends

Charts and visualizations are implemented using **Recharts**.

### 🎯 Budget Management

Users can monitor their spending against planned budgets and quickly identify whether their spending is:

- Healthy
- Approaching the budget limit
- Exceeding the budget

### 👥 Group Expense Management

FinFlow supports shared expense management through groups.

Users can:

- Create groups
- Add members
- View group information
- Manage shared expenses
- Track group transactions
- Split expenses between members

### 📱 SMS Transaction Parser

The application includes an SMS parsing utility that can extract financial information from supported bank transaction messages.

The parser can identify:

- 💵 Transaction amount
- ↔️ Debit or credit type
- 🏪 Merchant
- 📅 Transaction date
- 💳 Last four digits of a masked card

Example:

```text
Your account is debited Rs. 1,250.00 at Swiggy on 12/08/2026