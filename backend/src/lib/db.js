import mongoose from 'mongoose';
import {ENV} from './env.js'

export const connectDB = async()=>{
    try{
        const {MONGO_URI} = ENV
        if(!MONGO_URI) throw new Error("MONGO_URI is not set")
            
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log("MONGODB CONNECTED: ", conn.connection.host);
    }
    catch(err){
        console.error("Error Connecting to MongoDB ", err);
        process.exit(1);
        //1 means fails, 0 means success
    }
}