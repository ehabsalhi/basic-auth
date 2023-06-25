const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const bcrybt = require('bcrypt')
const { User } = require("./moduls")
const base64 = require('base-64')
const signin = require("./middleware/signin")

app.use(cors())
app.use(express.json())


app.get('/' , (req,res) =>{
     res.status(200).json({
          message : 'Home page'
     })
})
app.post('/signup' , async (req,res) =>{
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
app.post('/signin' , signin , (req,res) =>{
     // const auth = req.headers.authorization.split(" ").pop()
     // const [username , password] = base64.decode(auth).split(':')

     // const checkUser = await User.findOne({where :{username}})
     // const isValid = await bcrybt.compare(password , checkUser.password)

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


function start(){
     app.listen(4001 , () => {
          console.log('up and roninng on port', 4001 )
     })
}

module.exports = {
     start,
     app
}