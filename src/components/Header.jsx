import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';
import logoImg from '../assets/fotios-infinite-bg.png';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide header if scrolling down and past 100px. Reveal if scrolling up.
    if (latest > 100 && latest > previous) {
      setHidden(true); 
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-4 md:py-6 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10"
    >
      <MagneticButton>
        <a href="/" className="flex items-center">
          <img src={logoImg} alt="Fotios Infinite Solutions" className="h-15 md:h-12 object-contain scale-125 md:scale-[1.35] origin-left" />
        </a>
      </MagneticButton>
      
      <nav className="hidden md:flex gap-12">
        <MagneticButton>
          <a href="#" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-white hover:text-gold transition-colors">The Work</a>
        </MagneticButton>
        <MagneticButton>
          <a href="#" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-white hover:text-gold transition-colors">Expertise</a>
        </MagneticButton>
        <MagneticButton>
          <a href="#" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-white hover:text-gold transition-colors">Vision</a>
        </MagneticButton>
      </nav>
      
      <MagneticButton>
        <a href="#" className="px-6 py-3 md:px-10 md:py-4 bg-white text-black text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-300 rounded-sm">
          Get a Quote
        </a>
      </MagneticButton>
    </motion.header>
  );
}
