import React from 'react'

export default function Dots({ activeIndex, onclick, DataSlider}) {
  return (
    <div className="all-dots">
      {DataSlider.map((slide, index) => (
        <span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`} onClick={() => onclick(index)}></span>
      ))}
    </div>
  );
} 

