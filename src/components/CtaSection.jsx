import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-32 md:py-48 bg-[#050505] relative flex flex-col items-center justify-center text-center px-4 border-t border-white/5">
      
      {/* Subtle glowing orb in the background for depth, extremely minimal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-gold font-bold text-xs mb-6 block"
        >
          Next Steps
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.2] tracking-tight mb-6"
        >
          Ready to turn your vision into reality?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          Our engineering and design teams are ready to collaborate on your next major exhibition, pavilion, or interior fit-out.
        </motion.p>
        
        {/* Professional Button */}
        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-3"
        >
          Start Your Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>

      </div>
    </section>
  );
}
