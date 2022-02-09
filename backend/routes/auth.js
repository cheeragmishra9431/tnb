const express=require("express");
const router=express.Router();
const User=require('../models/User');
//Create a user using: POST "/api/auth/" . doesnt requirea auth

router.get('/',(req,res)=>{
   console.log(req.body);
   const user=User(req.body);
   user.save()
   res.send(req.body);
    // res.json(obj)
    
})
module.exports=router