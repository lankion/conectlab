const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        completeName:{
            type: String,
            required : true
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        aceppt:{
            type: Boolean,
            required: true,
        },
        photo:{
            type: Boolean
        },
    },
    {
        timestamps : true
    }
);
module.exports = mongoose.model("User", UserSchema);
