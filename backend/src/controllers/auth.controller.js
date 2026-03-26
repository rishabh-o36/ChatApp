import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../lib/utils.js'

export const singup = async (req, res) => {
    const {fullName, email, password} = req.body

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All feilds are required"});
        }
        if(password.length <6){
             return res.status(400).json({message:"Password must be atleast of 6 characters"});
        }
        //check emails is valid or not
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:"Invalid Email format"});
        }

        // already registered email 
        const user =await User.findOne({email:  email})
        if(user) 
            return res.status(400).json({message:"Email already exists"})
        
        //12345 = > $rnkln_/reklj2233_  "HASHING PASSWWORD"

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        if(newUser){
            // generateToken(newUser._id, res)
            // await newUser.save();
            // OR
            const savedUser = await newUser.save();
            generateToken(savedUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
            //201 -> something created successfully, 200-> success
        }else{
            res.status(400).json({message: "Invalid user data"})
        }

    } catch (error) {
        console.log("Error in signup ocntroller", error)
        res.status(500).json({message: "Internal Server Error"})
    }
    
}