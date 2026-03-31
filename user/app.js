const express=require("express")
const dotENV= require('dotenv')
const cookieParser = require("cookie-parser")

const app= express()

dotENV.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/',(req,res)=>{
    res.send("ads")
})


module.exports = app