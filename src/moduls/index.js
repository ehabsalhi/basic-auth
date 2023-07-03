const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const secretKey = process.env.SECRET

require('dotenv').config()

const postgres_url = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DB_URL;

const sequelize = new Sequelize(postgres_url , {})





module.exports = {
     sequelize,
     DataTypes
}