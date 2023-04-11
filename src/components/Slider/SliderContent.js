import React from 'react'

export default function SliderContent({ activeIndex, DataSlider }) {
  return (
    
        <section>
            {DataSlider.map((slide, index) => (
                <div key={index}
                className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls} alt="slide"/>
                   </div>
                
            ))}
        </section>
    
  );
}
