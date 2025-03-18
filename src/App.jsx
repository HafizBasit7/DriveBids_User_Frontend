import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import  "./App.css"
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SIgnupPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPassword";
import ResetPasswordPage from "./Pages/Auth/ResetPassword";
import EnterOtpPage from "./Pages/Auth/EnterOtpPage";
import HomePage from "./Pages/HomePage/HomePage";
import FilterPage from "./Pages/FiltersPage/FilterPage";
import CarDetailsPage from "./Pages/CarDetailsPage/CarDeatilsPage";
import ChatPage from "./Pages/ChatPage/ChatPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SellMyCar from "./Pages/SellMyCarPage/SellMyCarScreens/SellMyCarPage";
import Draft from "./Pages/SellMyCarPage/SellMyCarScreens/DraftPage";
import PostAds from "./Pages/SellMyCarPage/SellMyCarScreens/PostAdsPage";
import CarCompanyPage from "./Pages/SellMyCarPage/SellMyCarScreens/CarCompanyPage";
import CarVarient from "./Pages/SellMyCarPage/SellMyCarScreens/CarVarient";
import CityPage from "./Pages/SellMyCarPage/SellMyCarScreens/CityPage";
import CarColorPage from "./Pages/SellMyCarPage/SellMyCarScreens/CarColorPage";
import CarModelPage from "./Pages/SellMyCarPage/SellMyCarScreens/CarModelPage";
import CarMileagePage from "./Pages/SellMyCarPage/SellMyCarScreens/CarMileagePage";
import CarEnginePage from "./Pages/SellMyCarPage/SellMyCarScreens/CarEngine";
import CarTransmissionPage from "./Pages/SellMyCarPage/SellMyCarScreens/CarTransmission";
import CarFeaturesPage1 from "./Pages/SellMyCarPage/CarFeaturesScreens/CarFeaturesPage1";
import CarFeaturesPage2 from "./Pages/SellMyCarPage/CarFeaturesScreens/CarFeaturesPage2";
import CarFeaturesPage3 from "./Pages/SellMyCarPage/CarFeaturesScreens/CarFeaturesPage3";
import CarImages from "./Pages/SellMyCarPage/CarImagesScreens/CarImagespage";
import ExteriorImages1 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages1";
import ExteriorImages2 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages2";
import ExteriorImages3 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages3";
import ExteriorImages4 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages4";
import ExteriorImages6 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages6";
import ExteriorImages5 from "./Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages5";
import InteriorImagesPage1 from "./Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage1";
import InteriorImagesPage2 from "./Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage2";
import InteriorImagesPage5 from "./Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage5";
import InteriorImagesPage4 from "./Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage4";
import InteriorImagesPage3 from "./Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage3";
import WheelsImagesPage1 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage1";
import WheelsImagesPage2 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage2";
import WheelsImagesPage3 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage3";
import WheelsImagesPage4 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage4";
import WheelsThreadPage1 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage1";
import WheelsThreadPage2 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage2";
import WheelsThreadPage3 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage3";
import WheelsThreadPage4 from "./Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage4";
import InspectionReportPage1 from "./Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage1";
import InspectionReportPage2 from "./Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage2";
import InspectionReportPage3 from "./Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage3";
import PricingPage1 from "./Pages/SellMyCarPage/PricingScreens/Pricingpage1";
import PricingPage2 from "./Pages/SellMyCarPage/PricingScreens/Pricingpage2";
import PricingPage3 from "./Pages/SellMyCarPage/PricingScreens/Pricingpage3";
import PricingPage4 from "./Pages/SellMyCarPage/PricingScreens/Pricingpage4";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/signup" element={< SignupPage />} />
        <Route path="forgetpassword" element={< ForgetPasswordPage />} />
        <Route path="/reset-password" element={< ResetPasswordPage />} />
        <Route path="/otp" element={< EnterOtpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/car-detail" element={<CarDetailsPage />} />
        <Route path="/chat-page" element={<ChatPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/sellmycar" element={< SellMyCar/>} />
        <Route path="/drafts" element={< Draft/>} />
        <Route path="/post-ad" element={< PostAds/>} />
        <Route path="/car-company" element={< CarCompanyPage/>} />
        <Route path="/car-varient" element={< CarVarient/>} />
        <Route path="/city" element={< CityPage/>} />
        <Route path="/car-color" element={< CarColorPage/>} />
        <Route path="/car-model" element={< CarModelPage/>} />
        <Route path="/car-mileage" element={< CarMileagePage/>} />
        <Route path="/car-engine" element={< CarEnginePage/>} />
        <Route path="/car-transmission" element={< CarTransmissionPage/>} />
        <Route path="/car-features1" element={< CarFeaturesPage1/>} />
        <Route path="/car-features2" element={< CarFeaturesPage2/>} />
        <Route path="/car-features3" element={< CarFeaturesPage3/>} />
        <Route path="/car-images" element={<  CarImages/>} />
        <Route path="/car-exteriorimg1" element={<  ExteriorImages1/>} />
        <Route path="/car-exteriorimg2" element={<  ExteriorImages2/>} />
        <Route path="/car-exteriorimg3" element={<  ExteriorImages3/>} />
        <Route path="/car-exteriorimg4" element={<  ExteriorImages4/>} />
        <Route path="/car-exteriorimg5" element={<  ExteriorImages5/>} />
        <Route path="/car-exteriorimg6" element={<  ExteriorImages6/>} />
        <Route path="/car-interiorimg1" element={<  InteriorImagesPage1/>} />
        <Route path="/car-interiorimg2" element={<  InteriorImagesPage2/>} />
        <Route path="/car-interiorimg3" element={<  InteriorImagesPage3/>} />

        <Route path="/car-interiorimg4" element={<  InteriorImagesPage4/>} />

        <Route path="/car-interiorimg5" element={<  InteriorImagesPage5/>} />
        <Route path="/car-wheelimg1" element={< WheelsImagesPage1/>} />
        <Route path="/car-wheelimg2" element={< WheelsImagesPage2/>} />

        <Route path="/car-wheelimg3" element={< WheelsImagesPage3/>} />

        <Route path="/car-wheelimg4" element={< WheelsImagesPage4/>} />
        <Route path="/car-tyrethread1" element={< WheelsThreadPage1/>} />
        <Route path="/car-tyrethread2" element={< WheelsThreadPage2/>} />
        <Route path="/car-tyrethread3" element={< WheelsThreadPage3/>} />

        <Route path="/car-tyrethread4" element={< WheelsThreadPage4/>} />
        <Route path="/inspection-report1" element={<    InspectionReportPage1/>} />
        <Route path="/inspection-report2" element={<    InspectionReportPage2/>} />

        <Route path="/inspection-report3" element={<    InspectionReportPage3/>} />
        <Route path="/pricing1" element={<    PricingPage1/>} />
        <Route path="/pricing2" element={<    PricingPage2/>} />

        <Route path="/pricing3" element={<    PricingPage3/>} />

        <Route path="/pricing4" element={<    PricingPage4/>} />





        


     




        




        


        

        






       

      





      </Routes>
    </Router>
  );
}

export default App;
