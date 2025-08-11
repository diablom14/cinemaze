import mongoose, { mongo } from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("DB connected");
        
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export default connectDB
