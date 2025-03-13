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


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/ld" element={<LandingPage />} />
        <Route path="/l" element={< LoginPage />} />
        <Route path="/s" element={< SignupPage />} />
        <Route path="/f" element={< ForgetPasswordPage />} />
        <Route path="/r" element={< ResetPasswordPage />} />
        <Route path="/o" element={< EnterOtpPage />} />
        <Route path="/" element={<HomePage />} />

      
      </Routes>
    </Router>
  );
}

export default App;
