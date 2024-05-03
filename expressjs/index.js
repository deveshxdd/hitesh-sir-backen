const express = require('express')
const app = express()
const port = 3000
const books = require('./books.json')
app.get('/api/books',(req,res)=>{
    res.send(books)
})
app.get('/',(req,res)=>{
    res.send("<h1>hii</h1>")
})
app.listen(port,()=>{
    console.log(`server started`)
})


// this is how we can get the data from api and print
// 
// app.get('/',(req,res)=>{
//     res.send("this is dev")
// })
// app.get('/books',(req,res)=>{
//     const html = `<h1>${books.books.map((resp,idx)=>{
//         `<p>${books[6]}</p>`
//     })}</h1>`
//     res.send(html)
// })
