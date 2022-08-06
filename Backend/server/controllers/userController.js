const User = require("../models/userModel");

    const createNewuser =async(req,res)=>{
        if(!req.body){
            res.status(400).send({message:"Fill all details in the form"})
        }
            const user=await User.create({
                firstname:req.body.firstname,
                email:req.body.email,
                gender:req.body.gender,
                status:req.body.status
            })
            if(user){
                res.status(200).send({user})
            }
            else{
                res.status(500).send({message:err.message})
            }
         }

const getuser =async(req,res)=>{
    const id = req.query.id
    if(id){
        const singleuser = await User.findById(id)
        .then(data=>{
            if(data){
                res.status(200).send(data)
            }
            else{
                res.status(404).send({message:`Id:${id} , Not Match while finding singleuser.`})
            }
        })
        .catch(err=>{
            res.send(500).send({message:err.message})
        })
    }
    const user =await User.find()
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(500).send({message:"Users Not Found"})
    }
}

const updateUser =async(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Updated form can not be empty!"})
    }
    const updateuser = await User.findByIdAndUpdate(req.params.id,req.body)
    if(updateUser){
        res.status(200).send(updateuser)
    }
    else{
        res.status(500).send({message:"User is not successfully updated!"})
    }
}

const deleteUser =async(req,res)=>{
    const id = req.params.id
    const deleteduser = await User.findByIdAndDelete(id)
    if(deleteduser){
        res.status(200).send({message:"User Successfully Deleted!"})
    }
    else{
        res.status(404).send({message:"User Not Found"})
    }
}

module.exports={
    createNewuser,
    getuser,
    updateUser,
    deleteUser
}