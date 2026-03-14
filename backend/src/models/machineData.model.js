const mongoose = require("mongoose")

const machineDataSchema = new mongoose.Schema({

machine:{
type:mongoose.Schema.Types.ObjectId,
ref:"Machine"
},

electricity_kwh:Number,

water_liters:Number,

output_units:Number,

waste_kg:Number

},{timestamps:true})

module.exports = mongoose.model("MachineData",machineDataSchema)