const express = require('express')
const path =  require('path')
const app = express()
app.use(express.urlencoded({extended: false}))
app.set("view engine" , "ejs")
app.set("views", path.resolve("./views"))


app.get('/',(req,res)=>{
  res.render('new')
}).post((req,res)=>{
    console.log(req.body)
})
app.listen('5000',()=>{
    console.log("server started")
})

