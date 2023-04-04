import React from 'react';
import style from '../style/Home.module.css';
import headerpic from '../assets/headerpic.jpeg';

const Home = () => {
  return (
    <div>
      <div>
        <img className={style.headerpic} src={headerpic} width="320px"/>
        <p>
        شصت تن از خبرنگاران تبعید شده افغان در پاکستان عصر امروز کارت های عضویت شانرا از اتحادیه مشترک خبرنگاران بین المللی پاک - افغان در اداره پرس کلپ اسلام آباد اخذ نمودند.
این اتحادیه یک هفته قبل فعالیتشرا آغاز نمود و تعدای اعضای آن اکنون به بیشتر از صد خبرنگار میرسد.
        </p>
      </div>
      
      <div class="white" id="contact">
      <footer class="footer" id="footer">
        <div class="container">
          <div class="footer__container__parfoot">
            <h3>Contact me</h3>
            <p>
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding. I’d
              love to help with it
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
        <span className={style.homeFooter}>Copywrite Mohammad Rafi Amin</span>
      </div>
    </div>
    </div>
  );
};

export default Home;
