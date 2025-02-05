const express = require("express");
require("./config/dbConfig.js");//required a flie to run line by line(first time),second time onwards, it will get cached exports
const PORT = 1401;

const Task = require("./models/taskModels.js");

const app = express();

//by default:: express app does not read the body
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is runnig");
});

app.post("/post", async (req, res) => {
    try {
        //get data from requesting
        const taskInfo = req.body;

        //validate the data
        const newTask = await Task.create(taskInfo);
        res.status(201);
        res.json({
            status: "Success",
            data: {
                Task: newTask,
            }
        })

    } catch (err) {
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