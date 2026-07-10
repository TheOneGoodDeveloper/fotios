import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const heroItems = [
  {
    title: "Interiors.",
    subtitle: "Luxury Commercial Fit-outs",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
  },
  {
    title: "Exhibitions.",
    subtitle: "Immersive Brand Spaces",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
  },
  {
    title: "Engineering.",
    subtitle: "Precision MEP Solutions",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931"
  }
];

export default function ServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[100dvh] w-full bg-bg-primary flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Side: Interactive Typography */}
      <div className="w-full md:w-[55%] h-[60%] md:h-full flex flex-col justify-center px-6 md:pl-20 relative z-10 bg-bg-primary pt-24 md:pt-20">
        
        <div className="mb-8 md:mb-12">
           <span className="uppercase tracking-[4px] text-text-secondary font-bold text-xs border-l-2 border-gold pl-4">
             Infinite Solutions
           </span>
        </div>

        <div className="flex flex-col gap-2 relative z-20">
          {heroItems.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="group cursor-pointer w-max"
            >
              <motion.h1 
                animate={{ 
                  color: activeIndex === index ? "#1A1A1A" : "#E5E5E5", 
                  x: activeIndex === index ? 15 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-bold leading-[1.1] tracking-tight"
              >
                {item.title}
              </motion.h1>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden ml-4 md:ml-6"
                  >
                    <p className="text-gold font-bold uppercase tracking-widest text-xs md:text-sm py-2">{item.subtitle}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <MagneticButton>
            <a href="/projects" className="inline-block px-8 py-4 bg-text-primary text-white uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors relative z-10">
              Explore The Work
            </a>
          </MagneticButton>
        </div>

      </div>

      {/* Right Side: Dynamic Image Reveal */}
      <div className="w-full md:w-[45%] h-[40%] md:h-full relative overflow-hidden bg-text-primary">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeIndex}
            src={heroItems[activeIndex].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full object-cover grayscale-[15%]"
            alt={heroItems[activeIndex].title}
          />
        </AnimatePresence>
      </div>

    </section>
  );
}
