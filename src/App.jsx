import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import  "./App.css"
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SIgnupPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPassword";
import ResetPasswordPage from "./Pages/Auth/ResetPassword";
import EnterOtpPage from "./Pages/Auth/EnterOtpPage";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/h" element={<HomePage />} />
        <Route path="/" element={<  LoginPage />} />
        <Route path="/s" element={<  SignupPage />} />
        <Route path="/f" element={<  ForgetPasswordPage />} />
        <Route path="/r" element={<  ResetPasswordPage />} />
        <Route path="/o" element={<  EnterOtpPage />} />

        

        

        

      

      
        
      </Routes>
    </Router>
  );
}

export default App;
