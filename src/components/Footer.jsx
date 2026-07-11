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
    <footer className="bg-[#050505] flex flex-col justify-between pt-24 md:pt-32 px-4 md:px-16 overflow-hidden relative z-10 border-t border-white/5">
      
      {/* Mega Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8 w-full max-w-[1600px] mx-auto z-10 mb-24">
        
        {/* Column 1: Company & Hours (xl:col-span-3) */}
        <div className="xl:col-span-3 flex flex-col items-start pr-0 md:pr-8">
          <h3 className="text-white font-heading font-bold tracking-widest text-2xl mb-6">FOTIOS<span className="text-gold">.</span></h3>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Fotios is a business house engaged in Interior Work, MEP Installation Works For Exhibition Stands, Maintenance Works and Handyman Services.
          </p>
          
          <div className="w-full">
            <span className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4 block font-bold">Work Days</span>
            <ul className="text-white/60 text-xs flex flex-col gap-3 w-full">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon - Fri</span> <span>8:30 AM - 5:30 PM</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>8:30 AM - 1:00 PM</span></li>
              <li className="flex justify-between text-gold"><span>Sunday</span> <span>Holiday</span></li>
            </ul>
          </div>
        </div>

        {/* Column 2: Exhibitions & Interiors (xl:col-span-3) */}
        <div className="xl:col-span-3 flex flex-col gap-10">
          <div>
            <span className="text-white/80 font-heading font-bold text-lg mb-4 block">Exhibitions & Events</span>
            <ul className="text-white/40 text-sm flex flex-col gap-3">
              <li className="hover:text-gold transition-colors cursor-pointer">MEP Installation for Exhibition Stands</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Events & World Expos</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Equipment Rental & Installation</li>
            </ul>
          </div>
          <div>
            <span className="text-white/80 font-heading font-bold text-lg mb-4 block">Interiors & Fit-out</span>
            <ul className="text-white/40 text-sm flex flex-col gap-3">
              <li className="hover:text-gold transition-colors cursor-pointer">Interior Work</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Painting & Ceiling Works</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Curtain & Furniture Installation</li>
            </ul>
          </div>
        </div>

        {/* Column 3: MEP & Security (xl:col-span-3) */}
        <div className="xl:col-span-3 flex flex-col gap-10">
          <div>
            <span className="text-white/80 font-heading font-bold text-lg mb-4 block">MEP Works</span>
            <ul className="text-white/40 text-sm flex flex-col gap-3">
              <li className="hover:text-gold transition-colors cursor-pointer">MEP Maintenance</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Electrical Works</li>
              <li className="hover:text-gold transition-colors cursor-pointer">HVAC Works</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Plumbing Works</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Civil Maintenance</li>
            </ul>
          </div>
          <div>
            <span className="text-white/80 font-heading font-bold text-lg mb-4 block">Security & Handyman</span>
            <ul className="text-white/40 text-sm flex flex-col gap-3">
              <li className="hover:text-gold transition-colors cursor-pointer">CCTV Installation</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Handyman Services</li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact (xl:col-span-3) */}
        <div className="xl:col-span-3 flex flex-col items-start xl:items-end text-left xl:text-right">
          <span className="text-gold uppercase tracking-[0.2em] text-[10px] mb-6 block font-bold">Contact Details</span>
          
          <div className="flex flex-col gap-6 text-sm text-white/60 mb-8">
            <div>
              <span className="text-white/80 block font-bold mb-1">Fotios Infinite Solutions</span>
              <p>Warehouse No-2 Jebel Ali<br/>Industrial Area - 1 Dubai<br/>UAE.</p>
            </div>
            <div>
              <a href="tel:+97145707825" className="hover:text-gold transition-colors block">+971 4 570 7825</a>
            </div>
            <div>
              <a href="mailto:info@fotiosuae.com" className="hover:text-gold transition-colors block">info@fotiosuae.com</a>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">In</a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">Tw</a>
          </div>
        </div>

      </div>

      {/* Middle Section: Clocks & Copyright */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center mb-16 z-10 gap-8 border-t border-white/5 pt-8">
        <div className="flex flex-row gap-12">
          <LiveClock timeZone="Asia/Dubai" label="Dubai, UAE" />
          <LiveClock timeZone="Asia/Riyadh" label="Riyadh, KSA" />
        </div>
        <div className="text-white/30 text-[10px] uppercase tracking-widest text-center md:text-right">
          Fotios Engineering LLC © {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>

      {/* Massive Typography Mark */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-auto pointer-events-none select-none z-0">
        <h1 className="text-[20vw] md:text-[24vw] leading-[0.75] font-heading font-black text-white text-center tracking-tighter w-full opacity-90">
          FOTIOS<span className="text-gold">.</span>
        </h1>
      </div>

    </footer>
  );
}
