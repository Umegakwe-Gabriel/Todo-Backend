const mongoose = require("mongoose")

const todoDBs = "mongodb://0.0.0.0:27017/toDatabase"

const Database = async()=>{
    try {
        const tododb2 = await mongoose.connect(todoDBs)
        console.log(`Database is connected to ${tododb2.connection.host}`);
    } catch (error) {
        console.log("Couldn't connect to database");
    }
}

module.exports = Database();