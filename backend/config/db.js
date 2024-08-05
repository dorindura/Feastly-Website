import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://duradorin11:duradorin11@cluster0.dqwumf8.mongodb.net/food-del').then(() => console.log("DB Connected"));
}