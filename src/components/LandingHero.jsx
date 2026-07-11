import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const slides = [
  { img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070", title: "Exhibitions &\nEvents." },
  { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075", title: "MEP\nEngineering." },
  { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931", title: "Interiors &\nFit\u2011Out." }
];

export default function LandingHero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background shifts down slightly (needs extra height bleed to prevent gaps)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Text shifts down aggressively and fades out
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-24 md:pt-0">
      
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <AnimatePresence>
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
            {/* Darker gradient overlay for white text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Parallax Foreground Layer (Text Block) */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute bottom-[10%] left-0 md:left-16 lg:left-24 bg-transparent px-8 py-12 md:p-16 z-20 max-w-2xl w-full md:w-auto pointer-events-none"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-gold"></div>
          <span className="uppercase tracking-[4px] text-white/80 font-bold text-xs shadow-sm">
            Fotios UAE
          </span>
        </div>
        
        <div className="overflow-hidden min-h-[120px] md:min-h-[160px] mb-8">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg whitespace-pre-line"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="pointer-events-auto">
          <MagneticButton>
            <a href="/projects" className="inline-block border border-white/60 px-8 py-4 uppercase tracking-widest text-xs font-bold text-white hover:bg-white hover:text-black transition-colors relative z-10 backdrop-blur-sm bg-white/5">
              Explore Our Work
            </a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Slider Progress Controls (Static) */}
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
