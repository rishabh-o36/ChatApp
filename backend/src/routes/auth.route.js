import express from "express"
const router = express.Router();

router.get('/signup', (req,res)=>{
    res.send("SignUp endpoint")
})
router.get('/login', (req,res)=>{
    res.send("LogIn endpoint")
})
router.get('/logout', (req,res)=>{
    res.send("LogOut endpoint")
})

export default router;