const Donation = require("../models/donationModel");
const insertDonation = async (req,res)=>{
  try {
    const donation = await Donation.create({...req.body,userId:req.user});
    res.status(201).json(donation);
  }
  catch(error) {
    res.status(404).json(error);
  }
}

module.exports = {insertDonation}