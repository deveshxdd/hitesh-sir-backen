const mongoose = require('mongoose')  // ye hamesa required hoga

const studentschema = new mongoose.Schema( 
{
name :{
    type: String,
    required: true,
    unique: true
},
email:{
    type: String,
    required: true,
    unique: true
}

}
, {timestamps: true}
)

 export const Students = mongoose.model('Students', studentschema)


//  agar kuch kisi aur se reference lena h to 
//  mongoose.Schema.ObjectId 
//  ref : "model name "

