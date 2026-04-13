import jwt, { decode } from "jsonwebtoken"
import User from '../models/User.js'
import { ENV } from '../lib/env.js'

export const protectRoute = async (req, res, next)=>{
    try {
        const token  = req.cookies.jwt;
        if(!token)
            return res.status(401).json({message:"Unauthorized - No token provided"})

        const decoded = jwt.verify(token,ENV.JWT_SECRET)
        if(!decoded)
            return res.status(401).json({message:"Unauthorized - Invalid Token"})

        const userdata = await User.findById(decoded.userId).select("-password") //select everthing but not the password
        if(!userdata)
            return res.status(404).json({message:"User not found"})

        //if every checks above this are successfull then the user is able to update his profile otheriwse not , next() help to move towards the next route to which requires these check 
        req.user = userdata
        next()

    } catch (error) {
        console.log("Error in protectRoute midddleware ", error);
        return res.status(500).json({message:"Internal Server Error"})
    }
}