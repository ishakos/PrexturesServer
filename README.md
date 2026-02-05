# Prextures – Backend API ⚽

Prextures is a full-stack football prediction platform where users predict **Premier League match results for the 2023–2024 season**.

This repository contains the **backend REST API**, responsible for authentication, prediction logic, match results processing, and league standings calculation.

---

## 🏗 Backend Role

The backend acts as the **core system** of Prextures and is responsible for:

- User authentication and authorization
- Storing and validating user predictions
- Enforcing prediction deadlines (locked at match kickoff)
- Processing official match results
- Evaluating predictions (correct / incorrect)
- Calculating and updating league standings
- Exposing secure REST APIs for frontend and admin panel consumption

---

## 🧠 Business Logic Highlights

- ⏱ **Prediction Locking**  
  Predictions cannot be created or modified once the match start time is reached.

- ✅ **Result Evaluation**  
  Predictions are automatically evaluated after match results are submitted.

- 🏅 **Standings Calculation**  
  User rankings are dynamically updated based on prediction accuracy.

- 🔐 **Role-Based Access Control**  
  - Users: submit predictions, view results and standings  
  - Admins: manage fixtures and submit official match results (via Admin Panel)

---

## 🧱 Architecture Overview

- **API Type**: RESTful
- **Clients**:
  - User-facing Frontend (Prextures)
  - Admin Panel (Prextures-Admin)
- **Authentication**: Token-based (JWT)
- **Data Persistence**: MongoDB

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- RESTful API design

---

## 📡 API Responsibilities

The API provides endpoints for:

- Authentication (register / login)
- Fixture retrieval
- Prediction submission and validation
- Prediction history retrieval
- Match result submission (admin-only)
- Standings and leaderboard data

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/ishakos/Prextures-Server.git
cd Prextures-Server

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start development server
npm run dev
