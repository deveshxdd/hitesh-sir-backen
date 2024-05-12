import mongoose from 'mongoose'
const userschema = mongoose.Schema(
    {
    username:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        

    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }


}
)

export const user = mongoose.model('user',userschema)