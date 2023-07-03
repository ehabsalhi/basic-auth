const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const router = require("./routes")

app.use(cors())
app.use(express.json())


app.use(router)

function start(){
     app.listen(4001 , () => {
          console.log('up and roninng on port', 4001 )
     })
}

module.exports = {
     start,
     app
}