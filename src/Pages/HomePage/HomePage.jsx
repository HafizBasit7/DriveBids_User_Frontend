import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HomePageComponents/HeroSection";
import FeatureSection from "../../Components/HomePageComponents/FeatureSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection/>
    </>
  );
};

export default HomePage;
