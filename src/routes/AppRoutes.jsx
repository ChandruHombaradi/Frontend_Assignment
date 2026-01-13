import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import SSLCStudy from "../pages/SSLCStudy";
import CourseDetails from "../pages/CourseDetails";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sslc" element={<SSLCStudy />} />
      <Route path="/course/:id" element={<CourseDetails />} />

    </Routes>
  );
}
