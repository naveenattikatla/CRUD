const mongoose = require("mongoose")
require("dotenv").config()
const dbconncetion = async ()=>{
    try{
        const result = await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to db")
    }catch(err){
        console.log("Error")
    }
}

module.exports = { dbconncetion }