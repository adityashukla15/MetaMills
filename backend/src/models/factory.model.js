const mongoose=require('mongoose')

const factorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true,
    }
},{timestamps:true})
module.exports=mongoose.model('Factory',factorySchema)
