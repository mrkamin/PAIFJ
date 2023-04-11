import React from 'react';
import paifjlogo from './assets/paifjlogo.jpeg';
import style from '../style/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navBarContainer}>
      
      
      <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img className={style.navBarLogo} src={paifjlogo} alt="PAIFJLogo" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row">
            
            <li class="nav-item">
              <a
                class="social-icon"
                href="https://www.instagram.com/rafikambiz/"
                ><i class="ri-instagram-line"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                class="social-icon"
                href="https://www.facebook.com/profile.php?id=100064317682546"
                ><i class="ri-facebook-line"></i
              ></a>
            </li>
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
              <a class="social-icon" href="https://twitter.com/Mohamma63974237"
                ><i class="ri-twitter-line"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
      </div>
  );
};

export default Navbar;
