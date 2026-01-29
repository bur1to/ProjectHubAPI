# ProjectHub API

Demo REST API for managing projects and tasks with user roles and JWT authentication.  
Built as a learning project to practice backend development, REST architecture, and access control.

---

## Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT (authentication)
- Joi (request validation)
- dotenv (environment variables)

---

## Features

- User registration and login with JWT
- Project creation and management
- Project members with roles (owner / member)
- Task management inside projects
- Role-based access control
- Input validation and authorization middleware

---

## Requirements

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- npm

## Setup & Run

### 1. Clone the repository

```bash
git clone <repo-url>
cd ProjectHubAPI
npm install
```

### 2. Create .env file in the project root:

- MONGO_URI=mongodb://localhost:27017/projecthub
- TOKEN_KEY=your_jwt_secret

### 3. Start the server
```bash
npm start
```
You will get this console messages:

```bash
Mongo is connected
Server is running on port 3000
```

## API Overview

- `POST /users/register` — register
- `POST /users/login` — login
- `GET /projects` — list user projects
- `POST /projects` — create project
- `POST /projects/:id/task` — create task

## API Documentation

Swagger UI is available at:

http://localhost:3000/api-docs

## Project Status

This is a demo / learning project.
Not intended for production use.
