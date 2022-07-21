import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './PtojectsPage/Projects';
import Home from './PtojectsPage/Home';
import Services from './PtojectsPage/Services';
import Contact from './PtojectsPage/contact';
import Popupcom from './PtojectsPage/popup.js';

export default function Routers() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="popupmes" element={<Popupcom />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
