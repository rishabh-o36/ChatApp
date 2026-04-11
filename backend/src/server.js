import express from "express"
import {connectDB} from './lib/db.js'

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {ENV} from './lib/env.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app, server} from './lib/socket.js'  // we import the express app and socket server from lib/socket.js

// const app = express()   // we use not socket server 
const PORT = ENV.PORT || 3000

// Middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))  // req.body
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}))
app.use(cookieParser())  //req.cookie.jwt


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// Test route (important for Render)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  connectDB()
})