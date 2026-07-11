import React from 'react';
import { motion } from 'framer-motion';

export default function KineticMarquee() {
  return (
    <div className="w-full overflow-hidden bg-gold py-8 md:py-12 border-y border-border flex items-center relative z-0">
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {/* We map twice to create a seamless infinite scroll loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-6xl md:text-8xl font-heading font-bold text-transparent px-8" 
                  style={{ WebkitTextStroke: '2px rgba(0, 0, 0, 0.6)' }}>
              BUILDING THE FUTURE
            </span>
            <span className="text-4xl text-black px-4">✦</span>
            <span className="text-6xl md:text-8xl font-heading font-bold text-black px-8">
              FOTIOS UAE
            </span>
            <span className="text-4xl text-black px-4">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
