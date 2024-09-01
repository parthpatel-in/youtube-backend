import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async () => {
    try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); //intersting mongoose gives return object
   // connection instance me response aa raha hain ki hum connection hone ke baad jobhi response aa raha hain ki hum response ko hold kar sakte hain

    } catch (error) {
        console.error("MONGODB connection error :" ,error);
       process.exit(1) //interesting
    }
}

export default connectDB 