const express = require("express")
const router = express.Router()
const bcrybt = require('bcrypt')
const signin = require("./middleware/signin")
const { User } = require("./moduls/user.model")

require('dotenv').config()
  




router.get('/' , (req,res) =>{
     res.status(200).json({
          message : 'Home page'
     })
})
router.post('/signup' , async (req,res) =>{
     const {username , password} = req.body
     const encrybt = await bcrybt.hash(password , 5)
     
     const signup = await User.create({
          username: username,
          password: encrybt
     })
     res.status(201).json({
          message : signup
     })
})
router.post('/signin' , signin , (req,res) =>{

     if(req.valid) {
          res.status(200).json({
               user : req.user,
               message :'This user is Authorized!!!'
          })
        } else {
          res.status(500).json({
            message: 'This user is not Authorized!!!'
          })}
})



module.exports = router