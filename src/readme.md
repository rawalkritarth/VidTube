# VidTube Backend 🚀

Backend for a YouTube-like video sharing platform built using **Node.js**, **Express.js**, and **MongoDB**.

> ⚠️ Project Status: **Work In Progress (WIP)**
>
> This backend is currently under active development. New features, fixes, and improvements will be committed regularly.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- Cloudinary
- dotenv
- CORS

---

## Features

### Completed / Implemented

- Express Server Setup  
- MongoDB Database Connection  
- Environment Configuration (`dotenv`)  
- Healthcheck API  
- Custom Error Handling (`ApiError`)  
- Standard API Response Utility (`ApiResponse`)  
- Async Handler Middleware  
- User Model Schema  
- Password Hashing using bcrypt  
- JWT Access Token Generation  
- JWT Refresh Token Generation
- Cloudinary Media Upload


---

### Currently In Progress 🚧

- Authentication APIs
- User Registration
- User Login / Logout
- Video Upload APIs
- Like System
- Comment System
- Subscription System
- Watch History
- Refresh Token Flow

---

## Project Structure

```txt
VidTube/
│
├── public/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   │
│   ├── app.js
│   ├── constants.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/rawalkritarth/VidTube.git
cd VidTube
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in root directory.

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d
```

---

## Run Development Server

```bash
npm run dev
```

Server runs on:

```txt
http://localhost:8000
```

---

## API Route Example

Healthcheck endpoint:

```txt
GET /api/v1/healthcheck
```

---

## User Model Highlights

Implemented features inside User Schema:

- Username
- Email
- Fullname
- Avatar / Cover Image
- Watch History
- Password Hashing Middleware
- Password Verification
- JWT Access Token Generation
- JWT Refresh Token Generation

---

## Notes

This repository contains **unfinished backend work**.

The project is being built progressively and updated regularly as new features are completed.

---

## Author

**Kritarth Rawal**

GitHub: https://github.com/rawalkritarth

---

## Future Goals

- Complete Authentication System
- Secure JWT Refresh Flow
- Video Upload + Streaming
- Likes / Comments / Subscriptions
- Production Ready API Structure
- API Documentation