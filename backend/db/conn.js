import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.db_url);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;