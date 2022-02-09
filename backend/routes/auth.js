const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    obj={
        a:"ssdvd",
        s:45
    }
    res.json(obj)
    
})
module.exports=router