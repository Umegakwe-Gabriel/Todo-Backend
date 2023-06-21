const express = require("express")
const todomodel2 = require("../Model/TodoModel2")

const getAllTask = async(req, res)=>{
    try {
        const todo = await todomodel2.find()
        res.status(200).json({message: "All task onboard", data: todo})
    } catch (error) {
        res.status(400).json({message: "Couldn't get all task", error})
    }
}

const newTask2 = async(req, res)=>{
    try {
        const {title, details, time, date, complete} = req.body;
        const Task2 = await todomodel2.create({
            title, details, time, date, complete
        })
        res.status(200).json({message: "New task onboard", data: Task2})
    } catch (error) {
        res.status(400).json({message: "Couldn't create new task", error})
    }
}

module.exports = {getAllTask, newTask2}