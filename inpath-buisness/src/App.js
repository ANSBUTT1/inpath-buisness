import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";  // Ensure this file exists
import Header from "./components/include/Header";  // Ensure this file exists
import Footer from "./components/include/Footer";  // Ensure this file exists

import SignUp from "./pages/SignUp/SignUp";


import EnterpriseTraining from "./pages/what/EnterpriseTraining";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div> 
        <ScrollToTop/>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp/>} />

          <Route path="/enterprice" element={<EnterpriseTraining />} />

        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;