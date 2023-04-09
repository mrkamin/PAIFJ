import React from 'react'

export default function SliderContent({ activeIndex, DataSlider }) {
  return (
    
        <section>
            {DataSlider.map((slide, index) => (
                <div key={index}
                className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls}/>
                    <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
                </div>
                
            ))}
        </section>
    
  );
}
