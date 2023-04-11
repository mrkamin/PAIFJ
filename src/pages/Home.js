import React from 'react';
import style from '../style/Home.module.css';
import Slider from '../components/Slider/Slider';
import ReadMore from '../components/Slider/ReadMore';

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
        <ReadMore />
      </div>
      
      <div className={style.homeContact} id="contact">
      <footer className={style.homeFooter} id="footer">
        <div className={style.homeContainer}>
          <div className={style.homeContaineritems}>
            <h3>Contact Us</h3>
            <p>
             if you have...........
            </p>
            <form action="https://formspree.io/f/maykokoe" method="post">
              <div class="form__control">
                <input
                  type="text"
                  placeholder="Name"
                  class="name"
                  id="name"
                  maxlength="30"
                  required
                  name="name"
                />
              </div>
              <div class="form__control">
                <input
                  type="email"
                  placeholder="name@example.com"
                  class="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div class="form__control">
                <textarea
                  cols="30"
                  rows="10"
                  class="textarea"
                  id="textarea"
                  placeholder="Write your message here"
                  maxlength="500"
                  name="textarea"
                  required
                ></textarea>
              </div>
              <div class="form__control">
                <input
                  type="submit"
                  placeholder=""
                  class="submit"
                  id="submit"
                  value="Get in touch"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
      <div>
        <span className={style.homeFooter}>PAIFJ</span>
      </div>
    </div>
    </div>
  );
};

export default Home;
