const express=require("express");
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/" . doesnt requirea auth
router.get('/',[body('email',"Enter a valid email").isEmail(),
    body('name',"Enter a valid name").isLength({min:3}),
    body('password',"Enter a valid password").isEmail({min:5}),],
    (req,res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user)).catch(err=>{console.log(err);
    res.json({error:"please enter a unique value for email", message:err.message})})

 
    // res.json(obj)
    
})
module.exports=router