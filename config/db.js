import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.DB_URI ;

mongoose.connect(dbURI)    
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

export default mongoose;