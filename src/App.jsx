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
import SellMyCar from "./Pages/SellMyCarPage/SellMyCarPage";
import Draft from "./Pages/SellMyCarPage/DraftPage";
import PostAds from "./Pages/SellMyCarPage/PostAdsPage";
import CarCompanyPage from "./Pages/SellMyCarPage/CarCompanyPage";
import CarVarient from "./Pages/SellMyCarPage/CarVarient";
import CityPage from "./Pages/SellMyCarPage/CityPage";
import CarColorPage from "./Pages/SellMyCarPage/CarColorPage";
import CarModelPage from "./Pages/SellMyCarPage/CarModelPage";
import CarMileagePage from "./Pages/SellMyCarPage/CarMileagePage";
import CarEnginePage from "./Pages/SellMyCarPage/CarEngine";
import CarTransmissionPage from "./Pages/SellMyCarPage/CarTransmission";


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


      </Routes>
    </Router>
  );
}

export default App;
