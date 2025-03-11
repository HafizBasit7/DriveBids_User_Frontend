
import React from "react";
import SwipeableViews from "react-swipeable-views";
import SliderSellCard from "./SliderSellCard";

const SellCarSlider = () => {
  const slides = [...Array(5)]; 

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <SwipeableViews enableMouseEvents>
        {slides.map((_, index) => (
          <div key={index} className="p-2">
            < SliderSellCard/>
            
           
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default SellCarSlider;
