const { Sequelize, DataTypes } = require("sequelize");

require('dotenv').config()

const postgres_url = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DB_URL;

const sequelize = new Sequelize(postgres_url , {})

const User = sequelize.define('userlab' , {
     username:{
          type : DataTypes.STRING,
          allowNull : false,
          unique : true
     },
     password : {
          type : DataTypes.STRING,
          allowNull : false
     }
})


module.exports = {
     sequelize,
     User
}