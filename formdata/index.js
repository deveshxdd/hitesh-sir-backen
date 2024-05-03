const express = require('express')
const path =  require('path')
const app = express()
app.use(express.urlencoded({extended: false}))
app.set("view engine" , "ejs")
app.set("views", path.resolve("./views"))


app.get('/',(req,res)=>{
  res.render('new')
})
app.post('/',(req,res)=>{
  const body = req.body
  console.log(body.email)
  res.send(body.email)
})
app.listen('5000',()=>{
    console.log("server started")
})

