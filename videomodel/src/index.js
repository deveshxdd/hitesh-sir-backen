import express from 'express'
import mongoconnect from './db/index.js'
import { usermodel } from './models/user.model.js'
const app = express()

mongoconnect().then(()=>{
    app.listen('4000',()=>{
        console.log("server started")
    })
}).catch(()=>{
console.log("server not started due to error")
})

app.get('/update',async (req,res)=>{
const update = await usermodel.findOneAndUpdate({username: "devesnhjhh" }, {email: "udevesh721@"},{new:true})
res.send(update)
})



// create , findOneAndUpdate , find , findOne , findOneAndDelete
