# Environmental Awareness Platform

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is an Environmental Awareness Platform where users can browse, join, and create environmental initiatives, post updates, photos, and achievements, and interact with other users through likes, comments, and shares.

## Features

- Browse a list of environmental initiatives.
- Join initiatives and participate in events.
- Create and manage your own initiatives.
- Post updates, photos, and achievements.
- Like, comment, and share posts.
- User authentication and authorization.

## Tech Stack

### Frontend:

- React
- Redux
- React Router
- Material-UI

### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- MongoDB

### Clone the repository

```bash
git clone https://github.com/spk-krishna567/environmental-awareness-platform.git
cd environmental-awareness-platform
```

### Backend Setup

Navigate to the backend directory:

```
cd server
```

#### Install backend dependencies and start server:

```
npm install
npm start
```

#### Create a .env file in the backend directory and add the following environment variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
```

## Frontend Setup

Navigate to the frontend directory:

```
cd client
```

Install frontend dependencies and Start the frontend development server:

```
npm install

npm start
```

Project Structure

```kotlin
environmental-awareness-platform/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── data/
│ ├── .env
│ ├── server.js
│ └── package.json
└── frontend/
├── public/
├── src/
│ ├── actions/
│ ├── components/
│ ├── constants/
│ ├── reducers/
│ ├── screens/
│ ├── store.js
│ └── App.js
├── .env
├── package.json
└── README.md
```

## API Endpoints

- Authentication
  - POST /api/users/login - Login a user
  - POST /api/users/register - Register a new user
- Initiatives
  - GET /api/initiatives - Get all initiatives
  - POST /api/initiatives - Create a new initiative
  - GET /api/initiatives/:id - Get an initiative by ID
- Posts
  - GET /api/posts - Get all posts
  - POST /api/posts - Create a new post
  - GET /api/posts/:id - Get a post by ID
  - PUT /api/posts/:id/like - Like a post
  - POST /api/posts/:id/comment - Comment on a post

## app images

![Alt text](./images/Screenshot%202024-05-19%20231211.png)
![Alt text](./images/Screenshot%202024-05-19%20231333.png)
![Alt text](./images/Screenshot%202024-05-19%20231421.png)
![Alt text](./images/Screenshot%202024-05-19%20231454.png)
![Alt text](./images/Screenshot%202024-05-19%20231531.png)
