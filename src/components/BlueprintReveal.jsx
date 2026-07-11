import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const collageImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800"
];

export default function BlueprintReveal() {
  const containerRef = useRef(null);
  
  // Track the scroll position relative to the massive 150vh parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to visual properties.
  // Stays hidden until 25% scrolled, then fades in until 75% scrolled
  const scrollOpacity = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
  const scrollScale = useTransform(scrollYProgress, [0.25, 0.75], [1.05, 1]);
  const scrollBlur = useTransform(scrollYProgress, [0.25, 0.75], ["blur(10px)", "blur(0px)"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[250vh] bg-[#050505] group"
    >
      {/* Sticky Screen - This locks into the viewport while you scroll through the 250vh parent */}
      <div className="sticky top-0 w-full h-screen overflow-hidden border-y border-border">
        
        {/* 1. Base Layer: The Technical "Blueprint" */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center opacity-70"
             style={{
               backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}
        >
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-gold/60 font-mono text-[10px] md:text-xs tracking-widest uppercase">
            <p className="mb-1">PROJECT ID: FOT-UAE-0892</p>
            <p className="mb-1">PHASE: SCHEMATIC DESIGN</p>
            <p>ELEVATION: 24.5M</p>
          </div>
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-gold/60 font-mono text-[10px] md:text-xs tracking-widest uppercase text-right">
            <p className="mb-1 flex items-center justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              X-RAY DIAGNOSTIC MODE: ACTIVE
            </p>
            <p>KEEP SCROLLING TO REVEAL</p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-transparent z-10 text-center leading-none pointer-events-none tracking-tight md:tracking-normal" 
              style={{ WebkitTextStroke: '2px rgba(212, 175, 55, 0.3)' }}>
            ENGINEERING
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-transparent z-10 text-center leading-none pointer-events-none tracking-tight md:tracking-normal" 
              style={{ WebkitTextStroke: '2px rgba(212, 175, 55, 0.3)' }}>
            THE FUTURE.
          </h2>
        </div>

        {/* 2. Reveal Layer: The Finished Collage */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-auto"
          style={{
            opacity: scrollOpacity,
            scale: scrollScale,
            filter: scrollBlur
          }}
        >
          {/* The Collage Grid (Full Screen Reveal) */}
          <div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 p-4 bg-[#050505] group/collage">
            
            <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[0]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 1" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="col-span-1 md:col-span-1 row-span-1 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[1]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 2" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="col-span-1 md:col-span-1 row-span-2 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[2]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 3" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="col-span-1 md:col-span-1 row-span-1 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[3]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 4" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[4]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 5" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl group/card cursor-pointer">
              <img src={collageImages[5]} className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover/collage:grayscale group-hover/card:grayscale-0 group-hover/card:scale-110" alt="Project 6" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/collage:opacity-100 group-hover/card:opacity-0 transition-opacity duration-500"></div>
            </div>

          </div>

          {/* Solid Typography that perfectly overlaps the wireframe */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-center leading-none tracking-tight md:tracking-normal">
              ENGINEERING
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-center leading-none tracking-tight md:tracking-normal">
              THE FUTURE.
            </h2>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
