const mongoose = require("mongoose");
const LessonSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        title:{
            type: String
        },
        image:{
            type: Boolean
        },
        steps:{
            type: Array
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Lesson", LessonSchema);