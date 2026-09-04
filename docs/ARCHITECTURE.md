# Finflow Architecture

## Overview
Finflow follows a full-stack architecture with a React + Typescript frontend, Node.js + Express backend, and MongoDB database.

## Architecture Flow

```text
User
|
v
React + Typescript Frontend
|
| HTTP / REST API
v
Node.js + Express Backend
|
| Mongoose
v
MongoDB Database
```

## Main Components

### Frontend

- React + TypeScript
- Responsive user interface
- Communicates with the backend through REST APIs

### Backend

- Node.js runtime
- Express.js server
- Authentication and API handling
- Business logic and request processing

### Database

- MongoDB
- Mongoose ODM
- Stores application and financial data

## Request Flow 

1. User interacts with the React frontend.
2. Frontend sends an HTTP request to the Express backend.
3. Backend returns the response to the frontend.
4. Mongoose communicates with MongoDB.
5. Backend returns the response to the frontend.
6. Frontend updates the user interface.

## Security

- Authentication uses JSON Web Tokens (JWT).
- Passwords are protected using bcryptsjs.
- Environment variables are managed through dotenv.
- CORS is configured for API communication.