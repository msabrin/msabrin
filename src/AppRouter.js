// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import WhyChoosem from './components/WhyChoosem';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
// import Move from './move';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/WhyChoosem" element={<WhyChoosem />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
