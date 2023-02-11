import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </AnimatePresence>
  );
}
