const express = require('express');
const router =express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const employeeModel= require('../model/employeeModel')

router.post('/login',async(req,res)=>{
    let username= req.body.username;
    let password = req.body.password;
    const user=await employeeModel.findOne({username:username});
    if(!user){
        res.json({message:"user is ot found"})
    }
    try {
        if(user.password==password){
            res.json({message:"Login successfully"})
        }
        else{
            res.json({message:"Login Failed"})
        }
    } catch (error) {
        console.log(error);
        res.json({message:"Login failed"})
    }
})

//get
router.get('/view', async(req,res)=>{
    try {
        const employee = await  employeeModel.find();
        res.json(employee);
    } catch (error) {
        console.log(error);
    }
})

//post

router.post('/add', async (req,res)=>{
    try {
        let item = req.body;
        const savedData= await employeeModel(item);
        savedData.save();
        res.json({message:"Added Succesfully"})
    } catch (error) {
        res.json("Unable to add")
        console.log(error);
    }
})

//update

router.put('/edit/:id', async(req,res)=>{
    try {
        console.log(req.body)
        let id=req.params.id;
        console.log(id);
        const updated= await employeeModel.findByIdAndUpdate(id,req.body);
        // res.send('updated');
        res.json({message:"Updated successfully"});
    } catch (error) {
        console.log(error);
    }
})

//delete

router.delete('/delete/:id', async(req,res)=>{
    try {
        let id=req.params.id;
        console.log(id);
        await employeeModel.findByIdAndDelete(id);
        res.json({message:"Deleted successfully"});
    } catch (error) {
        console.log(error);
    }
})






module.exports=router;