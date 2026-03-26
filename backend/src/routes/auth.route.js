import express from "express"
import { singup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', singup)

router.get('/login', (req,res)=>{
    res.send("LogIn endpoint")
})

router.get('/logout', (req,res)=>{
    res.send("LogOut endpoint")
})

export default router;