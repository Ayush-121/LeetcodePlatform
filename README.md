# LeetCode Platform

A full-stack coding platform inspired by LeetCode where users can practice Data Structures & Algorithms problems, run and submit code, get AI-powered help, and watch video editorials.

Frontend:"http://leetcode-platform.vercel.app/"

Backend API:"https://leetcodeplatform.onrender.com"

---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- 📝 Browse & filter coding problems (Difficulty, Tags, Solved status)
- 💻 In-browser code editor (Monaco Editor) with support for **JavaScript, Java & C++**
- ▶️ Run code against sample test cases
- 📤 Submit code against hidden test cases (powered by Judge0)
- 📊 Submission history for each problem
- 🤖 AI Doubt Solver (powered by Google Gemini)
- 🎥 Video Editorials for problems
- 🛠️ Admin Panel
  - Create / Update / Delete problems
  - Upload & manage solution videos
- 📱 Responsive UI with dark theme support

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS + DaisyUI
- Redux Toolkit
- Monaco Editor
- React Router
- Axios
- React Hook Form + Zod

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Redis (token blacklisting)
- JWT Authentication
- Judge0 (code execution)
- Google Gemini AI
- Cloudinary (video storage)

---

## 📁 Project Structure
LeetcodePlatform/
├── frontend/          # React + Vite application
└── backend/           # Node.js + Express API
text---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Redis
- Judge0 API key
- Google Gemini API key
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/Ayush-121/LeetcodePlatform.git
cd LeetcodePlatform
2. Backend Setup
Bashcd backend
npm install
Create a .env file inside the backend folder and add the required keys, then run:
Bashnpm start
3. Frontend Setup
Bashcd frontend
npm install
npm run dev

🔑 Environment Variables
Create a .env file in the backend folder with the following keys:

DB_CONNECT_STRING
JWT_KEY
REDIS_PASS
JUDGE0_KEY
GEMINI_KEY
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
