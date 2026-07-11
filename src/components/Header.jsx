import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';

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
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-6 bg-white/70 backdrop-blur-xl border-b border-black/5"
    >
      <MagneticButton>
        <a href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
          FOTIOS<span className="text-gold">.</span>
        </a>
      </MagneticButton>
      
      <nav className="hidden md:flex gap-12">
        <MagneticButton>
          <a href="/" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-text-primary hover:text-gold transition-colors">The Work</a>
        </MagneticButton>
        <MagneticButton>
          <a href="/services" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-text-primary hover:text-gold transition-colors">Expertise</a>
        </MagneticButton>
        <MagneticButton>
          <a href="/about" className="uppercase tracking-widest text-[10px] md:text-xs font-bold text-text-primary hover:text-gold transition-colors">Vision</a>
        </MagneticButton>
      </nav>
      
      <MagneticButton>
        <a href="/contact" className="px-6 py-3 md:px-10 md:py-4 bg-text-primary text-white text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all duration-300 rounded-sm">
          Get a Quote
        </a>
      </MagneticButton>
    </motion.header>
  );
}
