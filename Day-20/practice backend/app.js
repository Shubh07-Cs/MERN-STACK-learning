const express = require("express");
require("./config/dbConfig.js");//required a flie to run line by line(first time),second time onwards, it will get cached exports
const PORT = 1401;

const Task = require("./models/taskModels.js");

const app = express();

app.use((req, res, next)=>{
    console.log(req.method,"__",req.url);
    next();
});

//by default:: express app does not read the body
app.use(express.json());

//custum middleware


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


app.patch("/tasks/:taskId", async (req, res) => {
try {
const { taskId } = req.params;
const taskInfo = req.body;

const updatedTask = await Task.findByIdAndUpdate(taskId, taskInfo);
console.log(updatedTask);

res.status(200).json({
status: "success",
data: {
task: updatedTask,
},
});
} catch (err) {
console.log("Error in PATCH /tasks", err.message);
// 1. CastError --> When the id given in the parameter is not in correct format
// ex. 67a3045357e60ac4df8e08e3 valid, but 67a3045357e60ac4df8e08e this is invalid
if (err.name === "CastError") {
res.status(400).json({
status: "fail",
message: "Invalid parameter",
});
}
// 2. ValidationError --> If the data sent is not valid as per our schema rules
else if (err.name === "ValidationError") {
res.status(400).json({ status: "fail", message: err.message });
}
// ex. priority as normal, but we get Normal | price > 1 but we sent 0
// 3. Generic error that I am not able to think right now
else {
res.status(500).json({ status: "fail", message: "Internal Server Error" });
}
}
});


app.listen(PORT, () => {
    console.log("----------------------------------");
    console.log(`----- http://localhost:${PORT}/ -----`);
    console.log("----------------------------------");
});