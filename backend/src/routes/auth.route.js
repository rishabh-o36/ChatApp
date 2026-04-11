import express from "express"
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";   //for checking whether bots or spam or illegal requsts
import upload from "../lib/multer.js";


const router = express.Router();
router.use(arcjetProtection);

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
// using basic update profile route without multer
// router.put('/update-profile', protectRoute, updateProfile)

// using multer to handle profile picture upload in update profile route
router.put("/update-profile", protectRoute,
  updateProfile );
router.get('/check', protectRoute, (req,res)=>{
    res.status(200).json(req.user)
})

export default router;