const mongoose = require("mongoose")

const dbconncetion = async ()=>{
    try{
        const result = await mongoose.connect("mongodb+srv://Naveen:1234@cluster0.vhpwnrb.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected to db")
    }catch(err){
        console.log("Error")
    }
}

module.exports = { dbconncetion }