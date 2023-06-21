const express = require("express")
require("./Config/database")
const Task = require("./Router/TodoRouter")

const port = 4550

const app = express()
app.use(express.json())
.use("/api", Task)

app.get("/", (req, res)=>{
res.status(200).json({message: "server is up and running"})
})

app.listen(port, ()=>{
    console.log("Servr is listening", port);
})