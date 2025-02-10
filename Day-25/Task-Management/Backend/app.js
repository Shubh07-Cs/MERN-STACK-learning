require("dotenv").config();
require("./config/dbConfig.js");
const PORT=process.env.PORT || 1014;
const express= require("express");

const app = express();//middleware

app.use((req,res, next)=>{
    console.log("request received", req.url);
});



app.listen(PORT, () =>{
    console.log(`---server started on PORT : ${PORT}`)
});