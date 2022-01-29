const moogoose = require("mongoose");
const ProjectsSchemas = new moogoose.Mongoose.Schema(
    {
        name: {
            type: String
        },
        visibility:{
            type: Boolean
        },
        image: {
            type: Boolean
        },
        data : {
            type: Array
        }
    },
    {
        timestamps: true
    }
);
module.exports = moogoose.model("Project", ProjectsSchemas);