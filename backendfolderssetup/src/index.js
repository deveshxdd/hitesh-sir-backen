
import express from 'express'
const app = express()
import Dbconnect from './db/index.js'
Dbconnect()
app.listen('6000',()=>{
    console.log("port ")
})