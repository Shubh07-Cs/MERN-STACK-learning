require("dotenv").config();
require("./config/dbConfig.js");
const User= require("./models/userModel.js");
const PORT=process.env.PORT || 1014;
const express= require("express");
const morgan=require("morgan");
const cors= require("cors");

const app = express();//middleware

app.use(cors());//to allow all origins to attach--middleware1
app.use(express.json()); //middleware2

app.use((req,res, next)=>{

    console.log("request received", req.url);
    next(); //middlerware3(custom middleware)
});

app.use(morgan("dev"));//middleware4

app.get("/",(req,res)=>{
    console.log("Server is working");
    res.json({message: "working",});
});

app.get("/users", (req,res)=>{
    try{
        // res.json({ message: "Users endpoint working!" });
    }catch(err){
        console.log("error in GET/users");
        console.log(err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error" + err.message,
        })
    }
});

app.post("/post", async(req, res)=>{
    try{
        const userInfo=req.body;
        const newUser=await User.create(userInfo);
        res.status(201);
        res.json({
            status: "success",
            data: {
                user: {
                    email: newUser.email,
                    fullName: userInfo.fullName,
                },
            },
        })

    }catch(err){
        console.log("error in post");
        console.log(err.message);
        res.status(500);
        res.json({
            status:"fail",
            message: "Internal server Error",
        });
    }
});

app.post("/otps", async(req, res)=>{
    const queryObj=req.query;
    res.status(400);
    res.json({
        status: "fail",
        message: "Missing required parameter: $(email)",
    });
    return 
});




app.listen(PORT, () =>{
    console.log(`---server started on PORT : ${PORT}`)
});