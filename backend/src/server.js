import express from "express"
import {connectDB} from './lib/db.js'

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {ENV} from './lib/env.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = ENV.PORT || 3000

// Middleware
app.use(express.json())  // req.body
app.use(cookieParser())  //req.cookie.jwt
// Routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// Test route (important for Render)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  connectDB()
})