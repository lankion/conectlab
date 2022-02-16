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
<<<<<<< HEAD
module.exports = mongoose.model("User", UserSchema);
=======

module.exports = mongoose.model('Users', UserSchema);




>>>>>>> fd797bc7103ff305dd516cc5054c22604ebe5136
