const { response } = require("express")
const express=require("express")
const { request } = require("https")
const app=express()
app.get("/",(request,response)=>{
    response.send("Hello World")
})
app.listen(3000,()=>{
    console.log("Hello...")
})