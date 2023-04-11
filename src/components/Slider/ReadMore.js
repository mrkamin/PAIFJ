import React, { useState } from "react";
import './ReadMore.css';

function ReadMore() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="card">
      <h3>Press Release PAIFJ</h3> 
        <h4>
April 05, 2023
</h4><br></br><p>
ISLAMABAD: Pakistan-Afghan International Forum of Journalists (PAIFJ) organized a very prestigious event regarding the distribution of membership cards at the National Press Club Islamabad.
      </p>
      {isShowMore && (
        <p>
            In which President PFUJ Afzal Butt, 
President National Press Club Anwar Raza, Secretary Khalil Raja, Finance Secretary Nayyar Ali, President RIUJ Abid Abbasi, Representative MICT Amjad Qamar, Chairman PAIFJ  Qamar Yousafzai, President Shah Rukh Tahiri, Spokesman Hashmat vajdani, Press Secretary Saleem Bukhari, Senior Afghan Analyst Jamal Kotwal, Khalida Tahseen and other Afghan and Pakistani journalists participated in large numbers. On this occasion, Afzal Butt distributed organizational cards among more than 60 members of the forum and congratulated them.

Afzal Butt said in his speech that I consider the establishment of Pak-Afghan International Forum of Journalists as a welcome initiative, the solidarity of journalists of the two fraternal countries is an excellent example for the world. We are well aware of the suffering and difficulties faced by Afghan journalists inside Pakistan and can understand this pain. We will try our best to devise a method to relieve our brothers from these sufferings through this joint forum. He further said that Afghan journalists should not consider themselves alone, a large group of Pakistani journalists are with them who will stand by their side in all the challenges they face. 

Speaking at the event, Press Club President Anwar Raza said that all our cooperation with PAIFJ will continue and Afghan journalists should consider National Press Club as their second home.

General Secretary of the Joint Forum, Zia Bhumia, expressed his views in a video address and said that exiled Afghan journalists are facing enormous difficulties in Pakistan. If serious steps are not taken to solve their suffering, they will have to face dire situations in the future. The visa and economic issues of journalists, their unemployment and referral of their cases to UNHCR should be among the top priorities of PAIFJ.

Qamar Yousafzai said in his address that a committee consisting of 20 well-known journalists from Pakistan and Afghanistan has been formed for PAIFJ, whose first result of hard work is the distribution of membership cards among Afghan journalists today and surely this will give a great support to the Afghan brothers. He further said that our next target is to present the list of Afghan journalists at the UNHCR office, meeting with Ministry of Interior officials to resolve visa issues and to initiate various programs to solve the employment problems of the forum members. This movement of ours will continue with the same passion to reach the final goal. 

Amjad Qamar of MICT said that we assure full cooperation to PAIFJ and will soon start launching useful programs involving capacity building of Afghan journalists in exile. 

Jamal Kotwal, Khalida Tahsin and Shahrukh Tahiri also addressed the event and emphasized on PAIFJ's more strength to solve the problems of Afghan journalists.

It should be noted that more than 60 journalists were awarded with membership cards in the said event while 40 more cards will be distributed soon. Due to the huge success and popularity of PAIFJ, 30 more journalists have also submitted applications for membership, whose membership forms will be handed over after verification of their documents. 

At the end of the ceremony, an organizational meeting of the forum committee was also held in which it was decided to meet the UNHCR officials within a week and ten male and female journalists were selected for this purpose. Moreover, it was also decided to launch the website of the forum soon.</p>
      )}

      <button className="shomorbtn" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMore;