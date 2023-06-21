const mongoose = require("mongoose")

const todoDB = "mongodb://0.0.0.0:27017/todoDatabase" 

const Databse = async()=>{
try {
    const tododb = await mongoose.connect(todoDB)
    console.log(`Database is connected to ${tododb.connection.host}`);
} catch (error) {
    console.log("Couldn't connect to Database");
}
}

module.exports = Database();