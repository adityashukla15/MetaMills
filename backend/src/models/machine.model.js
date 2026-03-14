const mongoose = require("mongoose")

const machineSchema = new mongoose.Schema({

name:String,

type:String,

factory:{
type:mongoose.Schema.Types.ObjectId,
ref:"Factory"
}

},{timestamps:true})

module.exports = mongoose.model("Machine",machineSchema)