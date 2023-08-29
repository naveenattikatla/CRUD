const express = require("express")
const { dbconncetion } = require("./Model/db")
const router = require("./controllers/routers")
const app = express()

// accept json format
dbconncetion()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api",router)

app.listen(5000,console.log("server started"))