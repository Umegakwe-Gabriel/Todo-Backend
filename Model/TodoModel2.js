const mongoose = require("mongoose")

const todoSchema2 = mongoose.Schema({
    title: {
        type: String
    },
    complete: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: String
    },
    details: {
        type: String
    },
}, {timestamps: true})

const todoModel2 = mongoose.model("Task2", todoSchema2)

module.exports = todoModel2