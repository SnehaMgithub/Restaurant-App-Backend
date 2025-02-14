import mongoose from "mongoose";

const dbConfig = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected Successfuly");
    } catch (error) {
        console.log(error.message);
    }
}

export default dbConfig ;