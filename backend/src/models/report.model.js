const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema({

factory:{
type:mongoose.Schema.Types.ObjectId,
ref:"Factory"
},

type:{
type:String,
enum:["full","water","carbon"]
},

result:Object

},{timestamps:true})

module.exports = mongoose.model("Report",reportSchema)