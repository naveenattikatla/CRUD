const mongoose= require("mongoose")

const userSchema = mongoose.Schema({
    name : { type : String , required : true},
    tech : { type : String, required : true},
    subscriber : { type : Boolean , required :  true , default  : false }
}, { timestamps : true } )

const User = mongoose.model("aliegn",userSchema)

module.exports = User