# Fullstack Task Manager

This project is a full-stack Task Manager application built using Node.js, Express, React, and Vite. It demonstrates a complete workflow for creating a full-stack app with a backend API and a dynamic frontend, showcasing modern JavaScript development.

---

## Features

- **Backend**: Node.js + Express REST API
  - Create, list, and delete tasks using in-memory storage.
  - Simple and efficient endpoint structure.
- **Frontend**: React + Vite
  - Dynamic interface for managing tasks.
  - Powered by Axios for seamless communication with the backend.
- **In-memory Storage**: No external database needed.

---

## Requirements

- **Node.js** (v16+ recommended)
- **npm** (comes with Node.js)
- **Git** (for version control)

---

## Setup and Installation

## Backend Setup
### Clone the Repository

git clone https://github.com/<your-username>/fullstack-app.git
cd fullstack-app

## Backend Setup

Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Start the backend server:
node server.js

The backend will be available at http://localhost:5000.

## Frontend Setup

Navigate to the frontend directory:
cd ../frontend

Install dependencies:
npm install

Create a .env file in the frontend directory and add the backend API URL:
VITE_API_URL=http://localhost:5000/api

Start the frontend development server:
npm run dev

## Usage

Open two terminal windows:
Terminal 1 (Backend):
cd backend
node server.js

Terminal 2 (Frontend):
cd frontend
npm run dev

Open the app in your browser at:
http://localhost:5173

Use the app to:
Add tasks using the input field.
View the list of tasks.
Delete tasks.

Endpoints (Backend)
GET /api/tasks: Returns a list of all tasks.
POST /api/tasks: Adds a new task (requires title in the request body).
DELETE /api/tasks/:id: Deletes a task by its ID.

## Directory Structure

fullstack-app/
  backend/
    server.js         # Backend server logic
    package.json      # Backend dependencies
  frontend/
    src/
      App.jsx         # Main React component
      main.jsx        # React entry point
    .env              # Environment variables for API URL
    package.json      # Frontend dependencies
  .gitignore          # Files and folders to ignore in Git
  README.md           # Project documentation

## Demo

To test the app locally:

Start the backend and frontend servers as described in the setup.
Navigate to http://localhost:5173 in your browser.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.
