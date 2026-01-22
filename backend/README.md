# Backend - Fleet Management Platform

This folder contains the Flask backend for the Fleet Management Platform. The backend is responsible for authentication, business logic, and database interactions.

## Tech Stack
- Python
- Flask
- Flask-JWT-Extended
- Flask-SQLAlchemy
- MySQL
- MongoDB

## Responsibilities
- User authentication and authorization using JWT
- Role-based access control (Admin, Manager, Supervisor, etc.)
- RESTful API development for fleet operations
- Input validation and structured error handling
- Database integration with MySQL and MongoDB

## Folder Structure
app/
  routes/      # API routes
  models/      # Database models
  services/    # Business logic
  utils/       # Helper utilities

## Running the Backend

1. Create and activate virtual environment
2. Install dependencies:
3. Set environment variables using `.env`
4. Start the server:

## Environment Variables

Create a `.env` file based on `.env.example` and configure:

- FLASK_ENV
- SECRET_KEY
- JWT_SECRET_KEY
- MYSQL_URL
- MONGO_URI
  
