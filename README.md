# 🚀 ChatApp – Real-Time Full Stack Chat Application

> A modern full-stack chat application with authentication, real-time messaging, image sharing, and a clean UI. Built using the MERN stack with real-time communication using Socket.io.

---

## ✨ Features

* 🔐 **Authentication System**

  * Signup / Login / Logout
  * JWT-based authentication with HTTP-only cookies
* 💬 **Real-Time Chat**

  * One-to-one messaging using Socket.io
  * Instant message delivery
  * Optimistic UI updates
* 🖼️ **Image Sharing**

  * Send images directly in chat
* 🟢 **Online Users Indicator**
* 🔊 **Sound Effects**
* 👤 **Profile Update**

  * Profile image updates instantly from chat UI (no separate page)
* 🎨 **Modern UI**

  * Built with Tailwind CSS + DaisyUI
* ⚡ **Fast & Responsive**

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* Zustand (State Management)
* Tailwind CSS + DaisyUI
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Socket.io (Real-time communication)

---

## 📂 Project Structure

```
ChatApp/
│
├── frontend/          # React frontend (Vite)
│   ├── src/
│   └── index.html
│
├── backend/           # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── lib/
│
└── README.md
```

---

## ⚙️ Environment Variables

### 📌 Backend `.env`

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 🚀 How to Run the Project

---

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 🔹 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

👉 Backend runs on:

```
http://localhost:3000
```

---

### 🔹 3. Setup Frontend

Open new terminal:

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs on:

```
http://localhost:5173
```

---

## 📸 UI Preview


### 🏠 Home / Chat UI

<img width="1661" height="892" alt="image" src="https://github.com/user-attachments/assets/03017813-e31d-465b-8761-ef659bda7b22" />


---

### 💬 Chat Screen

<img width="1201" height="832" alt="image" src="https://github.com/user-attachments/assets/ff4314a3-57e6-434e-b0a8-22bb1ee9818b" />

---

### 🗣️Live Chats

<img width="1150" height="813" alt="image" src="https://github.com/user-attachments/assets/ef2992b8-f81d-4eb2-aa1d-dbb1ae46723a" />

---

## 📌 Important Notes

* Ensure MongoDB is running and connected
* Cookies must be enabled (used for authentication)
* CORS should allow frontend origin (`http://localhost:5173`)
* Socket.io runs alongside backend for real-time communication

---

## 🛠️ Scripts

### Backend

```bash
npm run dev   # run with nodemon
npm start     # production
```

### Frontend

```bash
npm run dev   # start Vite dev server
npm run build # production build
```

---

## 🚧 Future Improvements

* ✔ Message seen/delivered status
* 👥 Group chat feature
* 📱 Improved mobile responsiveness
* 🌐 Deployment (Render + Vercel)
* 🔔 Notifications

---

## 👨‍💻 Author

**Rishabh Yadav**

---

⭐ If you like this project, give it a star on GitHub!
