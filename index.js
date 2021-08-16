// MOMENTSBIT STARTING - 16-08-2021 // 


// PACKAGE IMPORT
const express = require('express')
require('dotenv').config()


// VARIABLES
const app = express()



// ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000



// MAIN STRUCTURE OF MOMENTS BIT (INDEX.JS) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})