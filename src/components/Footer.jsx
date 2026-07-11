import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const LiveClock = ({ timeZone, label }) => {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    // Initial set
    const date = new Date();
    setTime(date.toLocaleTimeString('en-US', { timeZone, hour12: true, hour: '2-digit', minute:'2-digit' }));
    
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', { timeZone, hour12: true, hour: '2-digit', minute:'2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return (
    <div className="flex flex-col">
      <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2">{label}</span>
      <span className="text-white font-mono text-sm tracking-widest">{time || '00:00 AM'}</span>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] min-h-screen flex flex-col justify-between pt-32 px-4 md:px-16 overflow-hidden relative border-t border-white/10 z-10">
      
      {/* Top Section: Links & Contact */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 w-full max-w-[1600px] mx-auto z-10">
        
        {/* Call to Action */}
        <div className="max-w-2xl">
          <h2 className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-12">
            Let's build the <br/><span className="text-gold italic font-serif">future.</span>
          </h2>
          <div className="inline-block">
            <MagneticButton>
              <a href="/contact" className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-gold text-[#050505] font-bold uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                Get in touch
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Navigation & Info */}
        <div className="grid grid-cols-2 gap-16 md:gap-32 mt-12 lg:mt-0 pt-4">
          <div className="flex flex-col gap-6 items-start">
            <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-4">Navigation</span>
            <MagneticButton><a href="/" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">The Work</a></MagneticButton>
            <MagneticButton><a href="/services" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">Expertise</a></MagneticButton>
            <MagneticButton><a href="/about" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">Vision</a></MagneticButton>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-4">Socials</span>
            <MagneticButton><a href="#" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">Instagram</a></MagneticButton>
            <MagneticButton><a href="#" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">LinkedIn</a></MagneticButton>
            <MagneticButton><a href="#" className="text-white text-2xl md:text-4xl font-heading hover:text-gold transition-colors inline-block">Twitter</a></MagneticButton>
          </div>
        </div>
      </div>

      {/* Middle Section: Clocks & Details */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mt-32 mb-16 z-10 gap-12">
        <div className="flex flex-row gap-12 md:gap-24">
          <LiveClock timeZone="Asia/Dubai" label="Dubai, UAE" />
          <LiveClock timeZone="Asia/Riyadh" label="Riyadh, KSA" />
        </div>
        <div className="text-white/30 text-[10px] uppercase tracking-widest text-left md:text-right">
          <p className="mb-2">Fotios Engineering LLC © {new Date().getFullYear()}</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

      {/* Massive Typography Mark */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-auto pointer-events-none select-none z-0">
        <h1 className="text-[24vw] leading-[0.75] font-heading font-bold text-white text-center tracking-tighter w-full opacity-90">
          FOTIOS<span className="text-gold">.</span>
        </h1>
      </div>

    </footer>
  );
}
