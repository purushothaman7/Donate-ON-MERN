import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';


export default function Testimonial() {
  
  return (
    <>    
 <section id="testimonial" class="my-5">
  <div class="container">
    <h2 class="text-center mb-4">Testimonials</h2>
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."</p>
              <p class="card-text"><small class="text-muted">- John Doe</small></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Vestibulum ante ae; Pellentesque ipsum enim, congue et varius id, eleifend at nisi."</p>
              <p class="card-text"><small class="text-muted">- Jane Smith</small></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Curabitur ullamcorplibero, sit amet adipiscing sem neque sed ipsum."</p>
              <p class="card-text"><small class="text-muted">- Michael Brown</small></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev " style={{ background: '#343a40', color: '#fff', padding: '20px' }} type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next " style={{ background: '#343a40', color: '#fff', padding: '20px' }} type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>
</>
  );
}
