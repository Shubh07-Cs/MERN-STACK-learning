const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    workTitle: {
      type: String,
      trim: true,
    },
   
    taskTitle: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    assignee: {
      type: String,
      required: [true, "Assignee is required"],
      trim: true,
    },
    assigner:{
        type:String,
        required: [true, "Assigner is required"],
        trim: true,
    },
    priority: {
      type: String,
      default: "normal",
      enum: ["normal", "low", "high", "urgent"],
    },
    status: {
      type: String,
      default: "todo",
      enum: ["done", "inprogress", "abandoned", "todo"],
    },
  },
  { timestamps: true } // ✅ CORRECT placement of timestamps
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
