import mongoose from 'mongoose'

const dbconnect = async ()=>{
    try {
        const link = await mongoose.connect('mongodb://localhost:27017')
    } catch (error) {
        console.log("error")
    }
}

export default dbconnect