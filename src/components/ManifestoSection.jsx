import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ManifestoSection() {
  const containerRef = useRef(null);
  
  // Track scroll position within this 250vh tall section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Track for the ENTIRE time it's on screen
  });

  // The digital wipe mask: recalculate mapped values for the new global offset
  // 0.285 is when it hits top, 0.714 is when it starts leaving. So 0.4 to 0.6 is perfectly in the middle.
  const clipPath = useTransform(scrollYProgress, [0.4, 0.6], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#050505] w-full z-10 border-y border-white/5">
      {/* Sticky container locks the view in place while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        
        {/* Layer 1: The Base View */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          {/* Subtle grid background for architectural vibe */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
             backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
             backgroundSize: '100px 100px'
          }}></div>
          
          <h2 className="text-5xl md:text-8xl lg:text-[10vw] font-heading font-bold text-white text-center leading-[0.9] tracking-tighter uppercase w-full px-4">
            IF YOU CAN<br/>DREAM IT.
          </h2>
        </div>

        {/* Layer 2: The Masking Wipe */}
        <motion.div 
          style={{ 
            clipPath, 
            WebkitClipPath: clipPath,
            willChange: 'clip-path',
            transform: 'translateZ(0)'
          }}
          className="absolute inset-0 flex items-center justify-center bg-[#050505] z-10"
        >
          {/* Duplicated grid background to seamlessly blend during the wipe */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
             backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)`,
             backgroundSize: '100px 100px'
          }}></div>

          <h2 className="text-5xl md:text-8xl lg:text-[10vw] font-heading font-bold text-gold text-center leading-[0.9] tracking-tighter uppercase w-full px-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            WE CAN<br/>BUILD IT.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
