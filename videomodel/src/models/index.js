import mongoose from 'mongoose'
const mongoconnect = async ()=>{
    try {
        const connection =  await mongoose.connect('')
    } catch (error) {
        console.log("db not connected")
    }
}

export default mongoconnect