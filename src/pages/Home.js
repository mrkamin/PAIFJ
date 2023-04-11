import React from 'react';
/* import style from '../style/Home.module.css'; */
import Slider from '../components/Slider/Slider';
import ReadMore from '../components/Slider/ReadMore';

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
        <ReadMore />
      </div>
      
      <section id="contact" class="section-connector">
      <div class="container section-padding">
        <div class="row">
          <div class="col-12">
            <div
              class="section-title text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1>Contact</h1>
              <p>
               PAIFJ is a ......... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia animi commodi fugiat optio neque, eveniet aspernatur consectetur amet. Labore eveniet numquam tenetur tempora ducimus accusamus. Voluptatibus dolorum cum cupiditate?
              </p>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8" data-aos="fade-up" data-aos-delay="200">
            <form action="https://formspree.io/f/maykokoe" method="post" class="row g-3">
              <div class="form-group col-md-4">
                <input type="text" class="form-control" placeholder="Name" required name="name" maxlength="30"/>
              </div>
              <div class="form-group col-md-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number" 
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address" required name="email"
                />
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Subject" required name="text"
                />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name=""
                  class="form-control"
                  placeholder="Enter Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div class="form-group text-center col-md-12">
                <button class="btn btn-brand" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row gy-5">
              <div class="col-md-4">
                <h4><a href="#" class="text-white">PAFIJ</a></h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  eum nihil assumenda est quasi impedit quas praesentium
                  voluptatibus, optio libero, repellat, officia magnam expedita
                  itaque nam aut doloremque dolor excepturi!
                </p>
                <ul class="navbar-nav flex-row">
                  
                  <li class="nav-item">
                    <a
                      class="social-icon"
                      href="https://www.youtube.com/channel/UCnNGRwjg9TrN8kEWggQhS-g"
                      ><i class="ri-youtube-line"></i
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="social-icon"
                      href="https://www.linkedin.com/in/mohammad-rafi-amin-63b4319b/"
                      ><i class="ri-linkedin-line"></i
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="social-icon"
                      href="https://twitter.com/Mohamma63974237"
                      ><i class="ri-twitter-line"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 ms-auto">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h4>Contact</h4>
                <ul>
                  <li>Email: mr.....2@gmail.com</li>
                  <li>Whatsup: +93......</li>
                  <li>Address: Islamabad Pakistan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-auto">
                <p class="mb-0">Copyright text goes here</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">
                  Template designed by <a href="#">MRK Amin</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </div>
  );
};

export default Home;
