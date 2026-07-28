import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import { OfficeProvider } from './context/OfficeContext';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.75, // Slows down mouse wheel scroll distance
      syncTouch: true,
      touchMultiplier: 0.6, // Slows down touch swipe scroll for a heavier, cinematic feel on mobile/tablet
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <OfficeProvider>
      <CustomCursor />
      <Preloader />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </OfficeProvider>
  );
}
