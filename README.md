# Simple Task Management App (Prototype Swiss)

## 📘 Introduction

This project is a full-stack application that demonstrates the use of both backend and frontend technologies. It includes features such as authentication, API integration, and a simple user interface to interact with the provided backend.

## 🛠️ Prerequisites

Ensure you have the following software installed:
- **Node.js**: (Version >= 16x).
- **npm**: (Version >= 8) .
- **Optional**: Client to test APIs (Postman, Insomnia, etc.).
- **Database**: PostgreSQL (or any SQL database you prefer).

## Clone the repository & instalation

```bash
   git clone git@github.com:Adrian8422/swiss-prototype.git
   cd swiss-prototype
```
```bash
$ npm install
```

## Running the Backend

```bash
$ cd backend

# development
$ npm run dev
```

## Running the Frontend

```bash
$ cd frontend

# development
$ npm run start
```

## API Documentation

- Postman: https://documenter.getpostman.com/view/18745177/2sAYJ9Ay7n

- Key Endpoints
- POST /auth/register - Signup user.
- GET /auth/login - Signin user.
- GET /tasks - Fetch all tasks.
- POST /tasks - Create a new task.
- GET /tasks/{id} - Get a task by its ID.
- PATCH /tasks/{id} - Update a task.
- DELETE /tasks/{id} - Delete a task.

## Key Decisions

- Database Choice: I used PostgreSQL (sequelize ORM) for structured data management.
State Management: React Context API was used to manage state in the frontend.
API Framework: Express was selected due to its flexibility and efficiency in building robust backend APIs.
Authentication: JWT-based authentication was implemented.

## CI/CD Pipeline

- Linting the code.
- Deploying the application.




