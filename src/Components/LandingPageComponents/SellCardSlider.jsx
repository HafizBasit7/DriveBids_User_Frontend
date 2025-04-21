import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderSellCard from "./SliderSellCard";
import "./CardCarousel.css"; // import the CSS for disabling text selection

const CardCarousel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [autoPlay, setAutoPlay] = useState(true); // state to control autoplay

  const carouselContainerStyle = {
    maxWidth: isSmallScreen ? "100%" : "70%",
    margin: "auto",
    padding: "10px 0",
    position: "relative",
  };

  const slideStyle = {
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
    <div style={carouselContainerStyle} className="disable-select">
      {/* Gradient overlays on left and right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "15%",
          background: "linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0))",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "15%",
          background: "linear-gradient(to left, rgba(255,255,255,0.8), rgba(255,255,255,0))",
          zIndex: 2,
        }}
      />

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={autoPlay}
        interval={2000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={isSmallScreen ? 80 : 50}
        emulateTouch={true}
        onClickItem={() => setAutoPlay(false)} // Stop autoplay on click
        renderItem={(item, props) => (
          <div style={props.isSelected ? selectedSlideStyle : nonSelectedSlideStyle}>
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
