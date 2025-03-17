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
      </Routes>
    </Router>
  );
}

export default App;
