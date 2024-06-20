import mongoose from "mongoose";

let isConnected = false; //variable to keep track of the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB uri not defined')
    
    if(isConnected) return console.log('=> Using existing database connection');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;

        console.log('=> Database connected');
    } catch (error) {
        console.log(error)
    }
}