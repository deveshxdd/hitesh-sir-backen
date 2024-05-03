
import mongoose from 'mongoose'

const Dbconnect = async ()=>{
    try {
       const connection =  await mongoose.connect('')
    } catch (error) {
        console.log("mongoose not connnected")
    }
}

export default Dbconnect