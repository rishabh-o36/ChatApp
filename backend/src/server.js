import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT || 3000;

import authRoutes from './routes/auth.route.js'
app.use('/api/auth', authRoutes)

import messageRoutes from './routes/message.route.js'
app.use('/api/messages', messageRoutes)

 

app.listen(PORT , () => {
    console.log("Server is Running on Port "+PORT)
}) 