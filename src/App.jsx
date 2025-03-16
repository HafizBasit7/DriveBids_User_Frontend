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
        <Route path="/l" element={<LandingPage />} />
        <Route path="/l" element={< LoginPage />} />
        <Route path="/s" element={< SignupPage />} />
        <Route path="/f" element={< ForgetPasswordPage />} />
        <Route path="/r" element={< ResetPasswordPage />} />
        <Route path="/o" element={< EnterOtpPage />} />
        <Route path="/h" element={<HomePage />} />
        <Route path="/h" element={<FilterPage />} />
        <Route path="/" element={<CarDetailsPage />} />
        <Route path="/ch" element={<    ChatPage/>} />

    
    

        

      
      </Routes>
    </Router>
  );
}

export default App;
