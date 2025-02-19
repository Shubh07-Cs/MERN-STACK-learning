const mongoose= require("mongoose");//helps us to interact with mongoDb

const userSchema =new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});

const User= mongoose.model("users", userSchema);

module.exports = User ;