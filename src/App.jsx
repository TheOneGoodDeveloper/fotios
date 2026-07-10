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

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-white/90 backdrop-blur-md border-b border-border">
    <div className="font-heading text-2xl font-bold tracking-tight text-text-primary cursor-hover">FOTIOS<span className="text-gold">.</span></div>
    <nav className="hidden md:flex gap-10">
      <a href="/" className="uppercase tracking-widest text-xs font-bold text-text-primary hover:text-gold transition-colors">The Work</a>
      <a href="/services" className="uppercase tracking-widest text-xs font-bold text-text-primary hover:text-gold transition-colors">Expertise</a>
      <a href="/about" className="uppercase tracking-widest text-xs font-bold text-text-primary hover:text-gold transition-colors">Vision</a>
    </nav>
    <a href="/contact" className="px-8 py-3 bg-text-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all">
      Get a Quote
    </a>
  </header>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
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
    <>
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
    </>
  );
}
