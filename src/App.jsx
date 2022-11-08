import About from 'components/About/About';
import Controls from 'components/Controls/Controls.jsx';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import Cursor from 'components/UI/Button/Cursor';
import { useLoading } from 'LoadingContext';
import Home from 'pages/Home';
import Project from 'pages/Project';
import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import ScrollToTop from 'scrollToTop';
import WOW from 'wowjs';

export const App = () => {
  const { loading, close, show } = useLoading();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  useEffect(() => {
    show();
    window.onload = function () {
        close();
    };
  }, []);

  return (
    <>
      <div className={`loader-wrapper ${!loading && 'none'}`}>
        <ScaleLoader
          size={100}
          color={'#fff4b9'}
          loading={loading}
        ></ScaleLoader>
      </div>
      <Controls />
      <ScrollToTop />
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
};
