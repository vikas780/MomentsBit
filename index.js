// MOMENTSBIT STARTING - 16-08-2021 // 


// PACKAGE IMPORT
const express = require('express')
require('dotenv').config()
const path = require('path')
const hbs = require('hbs')


// VARIABLES
const app = express()



// ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000



// MAIN STRUCTURE OF MOMENTS BIT (INDEX.JS) 

const views_path = path.join(__dirname, 'Views/layouts/')

// SETTING UP PIPELINE 
app.set("view engine", "hbs")
app.set("views",'views_path')


// GETS

// LANDING PAGE 
app.get('/', (req, res) => {
  res.send("index")
})


// HOMEPAGE 
app.get('/homepage',(req,res) => {
    res.send("homepage")
})

// lOGIN PAGE 
app.get('/login',(req,res) => {
    res.send("login")
})

// REGISTER PAGE 
app.get('/register',(req,res) => {
    res.send("register")
})


// PASSWORD RECOVERY PAGE 
app.get('/passwordrecovery',(req,res) => {
    res.send("passwordrecovery")
})




// PORT
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})