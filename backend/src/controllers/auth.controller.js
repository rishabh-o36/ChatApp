import User from '../models/User.js' 
import bcrypt from 'bcryptjs'
import { generateToken } from '../lib/utils.js'
import { sendWelcomeEmail } from '../emails/emailhandlers.js'
import { ENV } from '../lib/env.js'

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body

    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid Email format" })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        generateToken(savedUser._id, res)

        res.status(201).json({
            _id: savedUser._id,
            fullName: savedUser.fullName,
            email: savedUser.email,
            profilePic: savedUser.profilePic
        })

        try {
            await sendWelcomeEmail(
                savedUser.email,
                savedUser.fullName,
                ENV.CLIENT_URL
            )
        } catch (err) {
            console.log("Email failed:", err.message)   
        }

    } catch (error) {
        console.log("Error in signup controller", error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}