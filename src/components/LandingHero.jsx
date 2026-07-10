import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const slides = [
  { img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070", title: "Precision Engineering." },
  { img: "https://images.unsplash.com/photo-1541888087525-0744111352e8?q=80&w=2070", title: "Immersive Spaces." },
  { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931", title: "Infinite Solutions." }
];

export default function LandingHero() {
  const [current, setCurrent] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-primary pt-24 md:pt-0">
      
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[current].img} 
            alt={slides[current].title} 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Clune-Style Stark Architectural Block */}
      <div className="absolute bottom-0 left-0 md:left-16 lg:left-24 bg-white px-8 py-12 md:p-16 z-20 max-w-2xl w-full md:w-auto shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-gold"></div>
          <span className="uppercase tracking-[4px] text-text-secondary font-bold text-xs">
            Fotios UAE
          </span>
        </div>
        
        <div className="overflow-hidden min-h-[120px] md:min-h-[160px] mb-8">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={current}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-heading font-bold text-text-primary leading-[1.1] tracking-tight"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <MagneticButton>
          <a href="/projects" className="inline-block border border-text-primary px-8 py-4 uppercase tracking-widest text-xs font-bold text-text-primary hover:bg-text-primary hover:text-white transition-colors relative z-10">
            Explore Our Work
          </a>
        </MagneticButton>
      </div>

      {/* Slider Progress Controls */}
      <div className="absolute bottom-8 right-8 md:right-16 z-20 flex gap-4">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-12 h-1 transition-all duration-300 ${current === idx ? 'bg-gold' : 'bg-white/40 hover:bg-white'}`}
          />
        ))}
      </div>

    </section>
  );
}
