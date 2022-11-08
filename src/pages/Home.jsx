import Hero from 'components/Hero/Hero';
import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import React from 'react';
import About from '../components/About/About';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills/>
    </>
  );
};

export default Home;
