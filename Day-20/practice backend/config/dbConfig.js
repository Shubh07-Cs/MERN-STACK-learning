const mongoose= require("mongoose");

const connectToDb = async()=>{
    try{
    await mongoose.connect("mongodb+srv://skr19053481:veryeasy@deploys.w40s8.mongodb.net/?retryWrites=true&w=majority&appName=DeployS");
    console.log("Database connected");
    }catch(err){
        console.log("Database not connected");
    }
};

connectToDb();