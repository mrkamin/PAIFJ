import React from 'react';
import Slider from '../components/Slider/Slider';
import ReadMore from '../components/Slider/ReadMore';
import style from '../style/Home.module.css';

const Home = () => {
  return (
    <div className={style.homeSection}>
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
             if you have any question you can Contact us here...........
            </p>
            <form action="https://formspree.io/f/maykokoe" method="post" className={style.homeContaineritemsitemform}>
              <div className={style.homeContaineritemsitem}>
                <input
                  type="text"
                  placeholder="Name"
                  className={style.homeContaineritemsiteminput}
                  id="name"
                  maxlength="30"
                  required
                  name="name"
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className={style.homeContaineritemsiteminput}
                  id="email"
                  name="email"
                  required
                />
                <textarea
                  cols="30"
                  rows="10"
                  className={style.homeContaineritemsitemtexarea}
                  id="textarea"
                  placeholder="Write your message here"
                  maxlength="500"
                  name="textarea"
                  required
                ></textarea>
                <input
                  type="submit"
                  placeholder=""
                  className={style.homeContaineritemsiteminputbtn}
                  id="submit"
                  value="Get in touch"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;
