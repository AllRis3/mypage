import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/AboutMe/AboutMe";
import Experience from "../Components/Experience/Experience";
import Work from "../Components/Work/Work";
import Contact from "../Components/Contact/Contact";
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
