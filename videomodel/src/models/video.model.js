import mongoose from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'   // IMPORT
const videoschema = mongoose.Schema({
    tittle:{
        type: string,
        required: true,
    },
    description:{
        type: string,
        required: true,
    },
    thumbnail:{
        type: string,
    }

},{timestamps : true})

// MODEL EXPORT SE PHLE USE KRNA PADTA HAI

videoschema.plugin(mongooseAggregatePaginate)
export const videomodel = mongoose.model('videomodel',userschema)



//  now we will study hashing of password jwt making tokens