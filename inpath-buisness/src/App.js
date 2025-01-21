import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";  // Ensure this file exists
import Header from "./components/include/Header";  // Ensure this file exists
import Footer from "./components/include/Footer";  // Ensure this file exists

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Display Header on all pages */}
        
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer /> {/* Display Footer on all pages */}
      </div>
    </Router>
  );
};

export default App;
