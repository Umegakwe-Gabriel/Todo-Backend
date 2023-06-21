const express = require("express")
const { getAllTask, newTask2 } = require("../Controller/TodoController2")


const router = express.Router()

router.route("/getAllTask").get(getAllTask)
router.route("/newTask").post(newTask2)

module.exports = router