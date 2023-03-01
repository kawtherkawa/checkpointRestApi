const express=require("express")
const router=express.Router();
 const User=require("../Model/User")

router.get("/test",(req,res)=>{
res.send("hello") 
})
router.post("/add",async(req,res)=>{
    try{
const {name,email,phone}=req.body
const newUser= new User({name,email,phone})
await newUser.save()
res.status(200).send({msg: "user added",newUser})
    }catch(error){
        res.status(400).send({msg:"user not added",error})
    }
})
router.get("/all-user",async(req,res)=>{
    try{
     const listUsers= await User.find()
     res.status(200).send({msg: "user list",listUsers})
    }catch(error){
        res.status(400).send({msg:"can not get all users",error})
    }
})
 router.delete('/:_id', async(req,res)=>{
try{
    const {_id}=req.params;
    await User.findOneAndDelete({_id})
    res.status(200).send({msg: "user deleted"})
} catch(error){
    res.status(400).send({msg:"can not delete this user",error}) 
}
 })
 router.put('/:_id',async(req,res)=>{
    try{
      const{_id}=req.params;
      const result=await User.updateOne({_id},{$set:{...req.body}})
      res.status(200).send({msg: "user updated"})
    }catch(error){
        res.status(400).send({msg:"can not update user",error}) 
    }
 })
router.get('/get_one/:_id',async(req,res)=>{
    try{
        const userToGet=await User.findOne({_id:req.params._id})
        res.status(200).send({msg: "user",userToGet})    
    }catch(error){
        res.status(400).send({msg:"can not get this user",error}) 
    }
})

 module.exports=router