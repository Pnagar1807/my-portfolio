import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Contact from '../components/Sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;