import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState({})
  useEffect(()=>{
  axios.get("/api/books").then((res)=>{
    console.log(res.data.books.length)
     setjokes(res.data.books)
  }).catch((err)=>{
    console.log("error")
  })
  },[])
  return (
    <>
      <div>
       <h1>hiii</h1>
      </div>
      <p>
    
      </p>
    </>
  )
}

export default App
