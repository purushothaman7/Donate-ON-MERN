import React, { useState } from 'react';
import {useAuthContext} from "../hooks/useAuthContext"
import axios from "axios"
export default function Donate() {
  const {user} = useAuthContext();
  const [details, setDetails] = useState({
    donationDetails: '',
    donationQuantity: '',
    donationType: '',
    pickupDateTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/donate/insertDonation", 
    {...details},
    {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
  )
  .then(response => console.log(response))
  .catch(error => console.log(error));
  alert("Donation Added successfully")
    console.log('Form submitted with data:', details);
    // Reset form fields
    setDetails({
      donationDetails: '',
      donationQuantity: '',
      donationType: '',
      pickupDateTime: ''
    });
  };

  return (
    <>
    <div className="container  ">
      <h2 className="text-center mt-4 mb-5">Donation Form</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="donationDetails">Donation Details</label>
              <input type="text" className="form-control" id="donationDetails" name="donationDetails" value={details.donationDetails} onChange={handleChange} required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="donationQuantity">Donation Quantity</label>
              <input type="text" className="form-control" id="donationQuantity" name="donationQuantity" value={details.donationQuantity} onChange={handleChange} required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="donationType">Donation Type</label>
              <select className="form-control" id="donationType" name="donationType" value={details.donationType} onChange={handleChange} required>
                <option value="">Select Donation Type</option>
                <option value="donate">Donate</option>
                <option value="pickup">Pickup Needed</option>
              </select>
            </div>
            {details.donationType === 'pickup' && (
              <div className="form-group mb-4">
                <label htmlFor="pickupDateTime">Pickup Date and Time</label>
                <input type="datetime-local" className="form-control" id="pickupDateTime" name="pickupDateTime" value={details.pickupDateTime} onChange={handleChange} />
              </div>
            )}
            <button type="submit" className="btn btn-success mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}