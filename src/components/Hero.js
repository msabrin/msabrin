import React from 'react';
import About from './About';
import Projects from './Projects';
// import Footer from './Footer';

const Hero = () => {
  return (
    <main className="text-dark-400 bg-dark-900 body-font">
      <About />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
};

export default Hero;