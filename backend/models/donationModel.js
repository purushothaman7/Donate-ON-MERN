const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  donationDetails:{
    type:String,
    required:true
  },
  donationQuantity:{
    type:String,
    required:true
  },
  donationType:{
    type:String,
    required:true
  },
  pickupDateTime: {
    type:Date,
    required:false
  }
})

module.exports = mongoose.model("Donations",DonationSchema);