# Kumbh CRUD Backend

A backend API for the Kumbh CRUD application, designed to handle the data management for the frontend. This backend provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Project Setup](#project-setup)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Project Setup

This project serves as the backend for a full-stack CRUD application. It uses Express and Node.js to expose RESTful APIs for interacting with the data. The backend supports basic CRUD operations on resources stored in a database (e.g., MongoDB).

## Features

- **Create**: Add new records to the database.
- **Read**: Fetch data from the database.
- **Update**: Modify existing records.
- **Delete**: Remove records from the database.

## Technologies Used

- **Node.js**: JavaScript runtime environment for the backend.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: For managing environment variables.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aswansoner-07/kumbh_crup_backend.git
   cd kumbh_crup_backend

2. **Install dependencies**:
   ```bash
   npm install
   
3. **Set up environment variables**:
   ```bash
   PORT=5000
  MONGO_URI=<your-mongodb-connection-uri>
  
## Usage
Once the project is set up, you can start the backend server with the following command:
```bash
npm start
