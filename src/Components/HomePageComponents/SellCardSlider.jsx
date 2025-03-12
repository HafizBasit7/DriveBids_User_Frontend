import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderSellCard from "./SliderSellCard";

const CardCarousel = () => {
  const carouselContainerStyle = {
    maxWidth: "97%",
    margin: "auto",
    padding: "10px 0",
  };

  const slideStyle = {
    margin: "0 0px", 
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  };

  const selectedSlideStyle = {
    ...slideStyle,
    opacity: 1,
    transform: "scale(1)",
  };

  const nonSelectedSlideStyle = {
    ...slideStyle,
    opacity: 0.4,
    transform: "scale(0.9)", 
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={41}
        emulateTouch={true}
        renderItem={(item, props) => (
          <div
            style={props.isSelected ? selectedSlideStyle : nonSelectedSlideStyle}
          >
            {item}
          </div>
        )}
      >
        <SliderSellCard />
        <SliderSellCard />
        <SliderSellCard />
        <SliderSellCard />
      </Carousel>
    </div>
  );
};

export default CardCarousel;
