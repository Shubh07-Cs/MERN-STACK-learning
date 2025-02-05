const express = require("express");
require("./config/dbConfig.js");//required a flie to run line by line(first time),second time onwards, it will get cached exports
const PORT = 1401;

const app = express();

app.get( "/", (req, res) => {
    res.send("Server is runnig");
});

app.post("/post",(req,res)=>{
    try{

    }catch(err){
        console.log("error: ", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Error Found",
        });
    }
});


app.listen(PORT, () => {
console.log("----------------------------------");
console.log(`----- http://localhost:${PORT}/ -----`);
console.log("----------------------------------");
});