//this file is used to connect with mongodb atlas database
const mongoose= require("mongoose");

const URL = process.env.MONGO_DB_URL;

const URL_WITH_PASSWORD = URL.replace("<db_password>",process.env.MONGO_DB_PASSWORD);

const URL_WITH_PASSWORD_AND_DB_NAME = URL_WITH_PASSWORD.replace("/?", `/$(process.env.MONGO_DB_DATABASE_NAME`);

const connectToDb= async() =>{
    try{
        await mongoose.connect(URL_WITH_PASSWORD_AND_DB_NAME);
        console.log("Mongo_Db connected");
    }catch(err){
        console.log("Mongo_Db not connected");
        console.log(err.message);
        
    }
}

connectToDb();