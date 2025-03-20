import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";



const App = () => {
  return (
    <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        

  
     
    </Router>
  );
};

export default App;