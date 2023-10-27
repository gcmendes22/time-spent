const mongoose = require("mongoose")

const ProjectSchema = {
    name: {
        type: String,
        required:  true,
    },
    bitrixName: {
        type: String,
        required: true,
    },
    totalTimeSpent: {
        type: Number,
        required: true,
    },
    generalNotes: {
        type: String,
        required: false
    },
    createdAt: {
        type: String,
        required: true,
    }
}

const projectModel = mongoose.model('Project', ProjectSchema);

module.exports = projectModel;