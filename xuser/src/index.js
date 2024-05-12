import express from 'express'
import dbconnect from './db/index.js'
import {user} from './models/user.model.js'
import path from 'path'
import { findSourceMap } from 'module'
const app = express()
dbconnect().then(
    app.listen('3000',()=>{
        console.log("server started")
    })
).catch()

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set("views", path.resolve("./src/views"))
app.get('/users',async (req,res)=>{
    let users = await user.find()
    res.render('main',{users})
})
app.get('/',(req,res)=>{
    res.render('form')
})
app.post('/', async (req, res) => {
    try {
      const newUser = await user.create({
        username: req.body.username,
        email: req.body.email,
        name: req.body.fullname,
        image: req.body.imagelink
      });
      res.redirect('/users');
    } catch (error) {
      if (error.code === 11000) { // Duplicate key error
        res.status(400).send('Duplicate email address. Please use a different email.');
      } else {
        res.status(500).send('Internal server error.');
      }
    }
  });

  app.get('/delete/:id',async (req,res)=>{
const deleteuser = await user.findOneAndDelete({_id: req.params.id})
res.redirect('/users')

  })
  app.get('/update/:id', async(req,res)=>{
const users = await user.findOne({_id: req.params.id})
   res.render('update',{users})
  })
  app.post('/update/:id',async(req,res)=>{
    const update = await user.findOneAndUpdate({id:req.params.body},{ username: req.body.username,
        email: req.body.email,
        name: req.body.fullname,
        image: req.body.imagelink}, {new: true})
        res.redirect('/users')
  })