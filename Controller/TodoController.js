const express = require("express")
const todoModel = require("../Model/TodoModel.")

const getAllTask = async(req, res)=>{
try {
    const todos = await todoModel.find()
    res.status(200).json({message: "List of task on board", data: todos})
} catch (error) {
    res.status(400),json({message: "Couldn't get the list of task", error})
}
}

const newTask = async(req, res)=>{
    try {
        const {title, complete, time, date, details} = req.body;
        const Task = todoModel.create({
            title, details, time, date, complete
        })
        res.status(200).json({message: "New task on board", data: Task})
    } catch (error) {
        res.status(400).json({message: "Couldn't process new task", data: error})
    }
}

module.exports = {getAllTask, newTask}