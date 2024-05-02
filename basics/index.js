// const app = (num)=>{
// return num
// }
 

// this is file handling concept
// const { isUtf8 } = require('buffer')
// const fs = require('fs')
// fs.writeFileSync('new.txt',"this is deveh") // syncly it doesnot need call back
// fs.writeFile('dev.txt',"my name is dev",(err,not)=>{
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log("written")
//     }

// })
// const text = fs.readFileSync('./new.txt',"utf-8")
// console.log(text)
// fs.appendFile("new.txt"," father",(err)=>{
//     if(err){
//       console.log("error")
//     }
// })
// fs.copyFileSync('new.txt','fat.txt')


// http server creation
const fs = require('fs')
const url = require('url')
const http = require('http')
const server =http.createServer((req,res)=>{
   const link = `   ${Date.now()}--${req.url}`
   const linkk = url.parse(link,true)
   console.log(linkk)
   fs.writeFile('url.txt',link,(err)=>{
    if(err){
        console.log("err")
    }
})
})


server.listen('2000',(req,res)=>{
    console.log("port = 2000")
})
