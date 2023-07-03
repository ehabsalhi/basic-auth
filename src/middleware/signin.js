const base64 = require('base-64')
const bcrybt = require('bcrypt')
const { User } = require('../moduls/user.model')

module.exports = async(req , res , next) => {
     const auth = req.headers.authorization.split(" ").pop()
     const [username , password] = base64.decode(auth).split(':')

     const checkUser = await User.findOne({where :{username}})
     if(!checkUser){
          next()
     }
     const isValid = await bcrybt.compare(password , checkUser?.password)
     console.log(isValid);
     req.valid = isValid
     req.user = checkUser
     next()
}