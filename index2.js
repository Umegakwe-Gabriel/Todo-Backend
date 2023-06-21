const express = require("express")
require("./Config/Database2")
const Task2 = require("./Router/TodoRouter2")

const port = 4600

const app = express()
app.use(express.json())
.use("/api", Task2)

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("Server is listening to port", port);
})