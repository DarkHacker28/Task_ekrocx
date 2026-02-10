                    Task By Ekrocx  

MilesWeb Clone – Full Stack Project Documentation
Tech Stack: 
React.js + Tailwind CSS + Framer Motion (Frontend) 
 Node.js + Express (Backend) 
MongoDB (Database)

1. Project Overview
This project is a full-stack clone of the MilesWeb pricing & hosting website UI, built using modern web technologies.
Core Objectives
Build pixel-perfect UI clone
Implement dynamic pricing logic
Add advanced animations 
Build complete backend APIs
Integrate MongoDB database
Add authentication & admin panel

2. Features
Frontend Features
Modern animated UI (Tailwind + Framer Motion)
Fully responsive layout
Dynamic pricing selector
Theme color switcher (multi-theme)
Animated cards
Authentication UI (Login / Signup)
Admin dashboard UI
Backend Features
REST API using Express
JWT Authentication
MongoDB CRUD operations
Admin role-based access
Hosting plans management
Order processing

3. Project Folder Structure
milesweb-clone/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Node Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── utils/
│   └── server.js
│
└── README.md


4. Environment Setup (MacBook + VS Code)
Install Required Tools
brew install node
brew install mongodb-community@7.0

node -v
npm -v


5. Project Initialization
Root Folder
mkdir milesweb-clone
cd milesweb-clone


Frontend Setup (React + Tailwind)
npm create vite@latest client -- --template react
cd client
npm install

Install UI Libraries
npm install tailwindcss postcss autoprefixer framer-motion react-router-dom axios
npx tailwindcss init -p

Configure Tailwind inside tailwind.config.js

Backend Setup (Node + Express + MongoDB)
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon


6. Frontend Architecture
Component Structure
components/
  PricingCard.jsx
  PricingGrid.jsx
  Navbar.jsx
  Footer.jsx


Pricing UI Logic
Fetch plans from backend
Dynamic pricing based on plan duration
Animated transitions

7. Backend Architecture
API Structure
/controllers
/models
/routes
/middlewares


MongoDB Models
User Model
{
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "user" }
}

Hosting Plan Model
{
  name: String,
  price: Number,
  duration: Number,
  features: Array
}


8. API Endpoints
Authentication
Method
Endpoint
Description
POST
/api/auth/register
Register user
POST
/api/auth/login
Login user

Hosting Plans
Method
Endpoint
Description
GET
/api/plans
Get all plans
POST
/api/plans
Create plan (Admin)
PUT
/api/plans/:id
Update plan
DELETE
/api/plans/:id
Delete plan


9. Theme Color Switcher Logic
Using React Context:
ThemeContext
  - primaryColor
  - setColor()


10. Animation Setup
Using Framer Motion
Page Transitions
Pricing Card Hover Effects
Button Micro-interactions
Smooth Scroll Animations

11. Authentication Flow
User -> Signup/Login -> JWT Token -> LocalStorage -> API Calls


12. Database Schema
Users
Plans
Orders


13. Run Project Locally
Start Backend
cd server
npm run dev
Start Frontend
cd client
npm run dev

ScreenShots of Given Task : 

Code Structure : 



Frontend UI : 









Backend Running: 


