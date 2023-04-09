import React, { useEffect, useState } from 'react';
import DataSlider from './DataSlider';
import BtnSlider from './BtnSlider';
import SliderContent from './SliderContent';
import Dots from './Dots';
import './slider.css'



const len = DataSlider.length -1 ;

export default function Slider(props) {
const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }, 5000)

  return () => clearInterval(interval);
}, [activeIndex]);

  return (
    <div className="slider-container">
     <SliderContent activeIndex={activeIndex} DataSlider={DataSlider} />
      <BtnSlider prevSlide={() => setActiveIndex(activeIndex <1 ? len : activeIndex - 1)}
      nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} 
      />
      <Dots 
      activeIndex={activeIndex}
      DataSlider={DataSlider}
      onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
