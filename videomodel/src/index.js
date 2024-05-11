import express from 'express'
import mongoconnect from './models/index.js'
const app = express()

mongoconnect().then(()=>{
    app.listen('4000',()=>{
        console.log("server started")
    })
}).catch(()=>{
console.log("server not started due to error")
})


