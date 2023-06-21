const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    complete: {
        type: Boolean
    },
    details: {
        type: String
    },
}, {timestamps: true})

const todoModel = mongoose.model("Task", todoSchema)

module.exports = todoModel