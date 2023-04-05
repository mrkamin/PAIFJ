import React from 'react';
import style from '../style/Home.module.css';
import headerpic from '../assets/headerpic.jpeg';
import HeroSlider, {Slide} from 'hero-slider';
import slide1 from '../assets/slid1.jpeg';
import slide2 from '../assets/slid2.jpeg';
import slide3 from '../assets/slid3.jpeg';
import slide4 from '../assets/slid4.jpeg';



const Home = () => {
  return (
    <div>
      <div>
        <HeroSlider width={"320px"} height= "50vh"
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange")}
        style={
        {backgroundColor: "rgba(0,0,0,0.33)"}
        }settings={
          {slidingDuration: 250,
          slidingDelay: 100,
        shouldAutoplay: true,
      autoplayDuration: 5000,
    }
        }


        >
          <Slide 
            background={{ 
              backgroundImageSrc: headerpic,
              backgroundAttachment: "fixed",
              
            }}
            style={{
              width:"320px",
              height: "50vh"
            }}
           
          />
          <Slide 
            background={{ 
              backgroundImageSrc: slide1,
              backgroundAttachment: "fixed"
            }}
            style={{
              width:"320px",
              height: "50vh"
            }}
           
          />
          <Slide 
            background={{
              backgroundImageSrc: slide2,
              backgroundAttachment: "fixed"
            }}
             style={{
              width:"320px",
              height: "50vh"
            }}
           
          />
          <Slide 
            background={{
              backgroundImageSrc: slide3,
              backgroundAttachment: "fixed"
            }}
             style={{
              width:"320px",
              height: "50vh"
            }}
           
          />
          <Slide 
            background={{
              backgroundImageSrc: slide4,
              backgroundAttachment: "fixed"
            }}
             style={{
              width:"320px",
              height: "50vh"
            }}
           
          />
        </HeroSlider>
        <p>Press Release PAIFJ <br>
        </br>
April 05, 2023<br></br>

ISLAMABAD: Pakistan-Afghan International Forum of Journalists (PAIFJ) organized a very prestigious event regarding the distribution of membership cards at the National Press Club Islamabad. In which President PFUJ Afzal Butt, 
President National Press Club Anwar Raza, Secretary Khalil Raja, Finance Secretary Nayyar Ali, President RIUJ Abid Abbasi, Representative MICT Amjad Qamar, Chairman PAIFJ  Qamar Yousafzai, President Shah Rukh Tahiri, Spokesman Hashmat vajdani, Press Secretary Saleem Bukhari, Senior Afghan Analyst Jamal Kotwal, Khalida Tahseen and other Afghan and Pakistani journalists participated in large numbers. On this occasion, Afzal Butt distributed organizational cards among more than 60 members of the forum and congratulated them.

Afzal Butt said in his speech that I consider the establishment of Pak-Afghan International Forum of Journalists as a welcome initiative, the solidarity of journalists of the two fraternal countries is an excellent example for the world. We are well aware of the suffering and difficulties faced by Afghan journalists inside Pakistan and can understand this pain. We will try our best to devise a method to relieve our brothers from these sufferings through this joint forum. He further said that Afghan journalists should not consider themselves alone, a large group of Pakistani journalists are with them who will stand by their side in all the challenges they face. 

Speaking at the event, Press Club President Anwar Raza said that all our cooperation with PAIFJ will continue and Afghan journalists should consider National Press Club as their second home.

General Secretary of the Joint Forum, Zia Bhumia, expressed his views in a video address and said that exiled Afghan journalists are facing enormous difficulties in Pakistan. If serious steps are not taken to solve their suffering, they will have to face dire situations in the future. The visa and economic issues of journalists, their unemployment and referral of their cases to UNHCR should be among the top priorities of PAIFJ.

Qamar Yousafzai said in his address that a committee consisting of 20 well-known journalists from Pakistan and Afghanistan has been formed for PAIFJ, whose first result of hard work is the distribution of membership cards among Afghan journalists today and surely this will give a great support to the Afghan brothers. He further said that our next target is to present the list of Afghan journalists at the UNHCR office, meeting with Ministry of Interior officials to resolve visa issues and to initiate various programs to solve the employment problems of the forum members. This movement of ours will continue with the same passion to reach the final goal. 

Amjad Qamar of MICT said that we assure full cooperation to PAIFJ and will soon start launching useful programs involving capacity building of Afghan journalists in exile. 

Jamal Kotwal, Khalida Tahsin and Shahrukh Tahiri also addressed the event and emphasized on PAIFJ's more strength to solve the problems of Afghan journalists.

It should be noted that more than 60 journalists were awarded with membership cards in the said event while 40 more cards will be distributed soon. Due to the huge success and popularity of PAIFJ, 30 more journalists have also submitted applications for membership, whose membership forms will be handed over after verification of their documents. 

At the end of the ceremony, an organizational meeting of the forum committee was also held in which it was decided to meet the UNHCR officials within a week and ten male and female journalists were selected for this purpose. Moreover, it was also decided to launch the website of the forum soon.</p>
      </div>
      
      <div class="white" id="contact">
      <footer class="footer" id="footer">
        <div class="container">
          <div class="footer__container__parfoot">
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
