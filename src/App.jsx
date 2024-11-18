import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Applayout from "./layouts/Applayout";
import HomePage from "./pages/homepage/HomePage";
import AboutUs from "./pages/aboutus/AboutUs";
import Contact from "./pages/contactUs/Contact.jsx";
import MedServices from "./pages/medservices/MedServices";
import MisionVision from "./pages/aboutus/MisionVision";
import BusinessPhilosophy from "./pages/aboutus/BusinessPhilosophy";
import './App.css'


function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros">
            <Route path="quienes-somos" element={<AboutUs />} />
            <Route path="mision-vision" element={<MisionVision />} />
            <Route path="filosofia-empresarial" element={<BusinessPhilosophy />} />
          </Route>
          <Route path="servicios" element={<MedServices />} />
          <Route path="contacto" index element={<Contact />} />
        </Route>
      </Routes>

  );
}

export default App
