const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required : true
        },
        lastName:{
            type: String,
            required : true
        },
        email:{
            type: String,
            required: true
        },
        senha:{
            type: String,
            required: true
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