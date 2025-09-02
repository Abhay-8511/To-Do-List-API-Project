# To-Do List API

This is a simple RESTful API for a To-Do List application built with Node.js, Express.js, and MongoDB.

## Features

- Create, Read, Update, and Delete (CRUD) to-do items.
- Structured using Routes, Controllers, and Services pattern.
- Simple validation and error handling.

## Prerequisites

- Node.js (v14 or later)
- npm
- A free MongoDB Atlas account

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Abhay-8511/To-Do-List-API-Project.git
    cd todo-list-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables. Replace the placeholders with your actual MongoDB Atlas connection string and a port number.

    ```


4.  **Run the server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| POST   | `/api/todos`      | Create a new to-do.         |
| GET    | `/api/todos`      | Get all to-dos.             |
| GET    | `/api/todos/:id`  | Get a single to-do by ID.   |
| PUT    | `/api/todos/:id`  | Update a to-do by ID.       |
| DELETE | `/api/todos/:id`  | Delete a to-do by ID.       |

## Challenges Faced

During this project, one of the main challenges was understanding and implementing the separation of concerns using the Controller-Service pattern. Initially, I was tempted to put all the database logic directly into the controller. However, I learned that moving the logic to a `service` layer makes the code cleaner, more reusable, and easier to test.

Another challenge was managing asynchronous operations properly. I used `async/await` throughout the application to handle promises from Mongoose, which helped avoid "callback hell" and made the code much more readable and sequential. Ensuring all database queries were properly `await`ed was crucial to prevent race conditions and bugs.