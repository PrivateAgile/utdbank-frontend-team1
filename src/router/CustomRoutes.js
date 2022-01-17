import React from "react";
import { Route, Routes } from "react-router-dom";
import FaqsPage from "../pages/FaqsPage";
import ServicePage from "../pages/ServicePage";
import PricingPage from "../pages/PricingPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/service" element={<ServicePage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
