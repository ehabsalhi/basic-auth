const { sequelize, DataTypes } = require(".")


const User = sequelize.define('userla' , {
     username:{
          type : DataTypes.STRING,
          allowNull : false,
          unique : false
     },
     password : {
          type : DataTypes.STRING,
          allowNull : false
     }
})

module.exports = {
     User
}