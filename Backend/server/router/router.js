const express= require("express")
const {  getuser, updateUser, deleteUser, createNewuser } = require("../controllers/userController")
const route=express.Router()


route.get("/",(req,res)=>{
    res.send("Welcome To Home Page")
})
route.get("/add-user",(req,res)=>{
    res.send("Welcome To Add-User Page")
})
route.get("/show-updated-user",(req,res)=>{
    res.send("Welcome To User-details Page")
})

//API
route.post("/api/users",createNewuser)
route.get("/api/users",getuser)
route.put("/api/users/:id",updateUser)
route.delete("/api/users/:id",deleteUser)

module.exports=route