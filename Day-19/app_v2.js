const express = require("express");
const fsPromises = require("fs/promises");
const { json } = require("stream/consumers");
const PORT = 1010;

const app = express();

app.use(express.json());

//read
app.get("/", (req, res) => {
    res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

app.get("/tasks", async (req, res) => {
  
    try{
        const text = await fsPromises.readFile("./db.json");
        const obj = JSON.parse(text); // sync process
        res.json(obj);
        }catch(err){
            res.status(500);
            res.json({
                status : "fail",
                message: "Internal Get server error"
            })
        }
  
});

//create
app.post("/tasks", async (req, res) => {
   
    try{
        const newObj = req.body;
        console.log("newObj : ", newObj);

    
        //2. read the xurrent list
        let text = await fsPromises.readFile('./db.json', 'utf-8');//reading the db file
        if(text.length==0) text = "[]";
        const arr = JSON.parse(text);//converting array into js array/pbjext

        //we have to generate the id
        let newid=1;
        if(arr.length!==0){
            const lastTask= arr[arr.length-1];
            newid = lastTask.id;
            newid+=1;
        }

        //assign
        newObj.id=newid;
    
        //3.then append the new data into it
        arr.push(newObj);
    
        //4.
        const textData = JSON.stringify(arr);
        await fsPromises.writeFile("./db.json", textData);
    
        res.json({
            status: "success",
        })
    }catch(err){
        res.status(500);
        res.json({
            status : "fail",
            message:"Internal Post server error"
        })
    }
    // frontend to backend
    // read the current list
    // then append the new data into it
    // save the new list
});

//update-put(for whole document change), patch (to add something in previous)
app.patch( "./task/:taskId",async (re1,res)=>{
    try{
        const {taskId} = req.params;

        

    }catch(err){
        console.log(err.message);
        res.status(500);
        res.json({
            status: "failed",

            message: "Internal Patch Server Error",
        });
    }
    console.log(req.params);
})


app.listen(PORT, async () => {
    console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
