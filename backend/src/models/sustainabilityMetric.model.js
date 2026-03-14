const mongoose = require("mongoose")

const metricSchema = new mongoose.Schema({

  factory:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Factory"
  },

  carbonScore:Number,
  waterScore:Number,
  wasteScore:Number,
  totalScore:Number

},{timestamps:true})

module.exports = mongoose.model("Metric", metricSchema)