import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Testimonial from './Testimonial';

export default function Home() {
  return (
    <>
<NavBar />
    <div className="container">
      <header className="text-center my-5">
        <h1>Welcome to Our Donation Website</h1>
      </header>
      <section id="awareness" className="my-5" style={{ background: '#f8d7da', color: '#721c24', padding: '20px' }}>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center mb-4">Why Donate?</h2>
            <p className="text-center">
              Donating to our cause can make a significant difference in the lives of those in need. Your contributions help provide essential resources,
              support programs, and make positive changes in our community and beyond. Every donation, no matter how small, has the power to create
              meaningful impact and bring hope to those who need it most.
            </p>
            <p className="text-center">
              Together, we can make a difference. Join us in our mission to create a better world for all.
            </p>
          </div>
        </div>
      </section>
      <section id="donator-of-the-month" className="my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4">Donator of the Month</h2>
            <div className="card">
                
              <img src="https://i.ibb.co/NyvnPR5/WIN-20240307-14-51-12-Pro.jpg" className="card-img-top" alt="Donator of the Month" />
              <div className="card-body">
                <h5 className="card-title">Sai Prasad</h5>
                <p className="card-text">Thank you for your generous contribution!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-donate">
  <div class="container">
    <h2>Why Donate?</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Improve Lives</h5>
            <p class="card-text">Your donation can help provide essential resources to those in need, such as food, shelter, and medical care.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Empower Communities</h5>
            <p class="card-text">Your donation can help support community development projects, such as education, infrastructure, and economic development.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Promote Sustainability</h5>
            <p class="card-text">Your donation can help support environmental initiatives, such as conservation, renewable energy, and sustainable agriculture.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section id="about-us" className="my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4">About Us</h2>
            <p className="text-center">We are a passionate team dedicated to making a positive impact in the world. Our mission is to...</p>
          </div>
        </div>
      </section>
      <Testimonial />
      <footer className="text-center my-5" style={{ background: '#343a40', color: '#fff', padding: '20px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2>Contact Us</h2>
              <p>Address: REC,Chennai</p>
              <p>Email: donateon@gmail.com</p>
              <p>Phone: +91 9384710011</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>&copy; Sakthilakshmi M, Sai Prasad R, Purushothaman M <br></br> All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}


