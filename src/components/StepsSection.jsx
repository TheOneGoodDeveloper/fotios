import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: "01", title: "Book", desc: "Share your need and information with us." },
  { num: "02", title: "Schedule", desc: "Schedule a time for us to attend to you." },
  { num: "03", title: "Relax", desc: "Our expert team will do the rest and give it back with a new smile." }
];

export default function StepsSection() {
  const containerRef = useRef(null);
  
  // Track scroll position through this section
  // Track scroll position through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Line finishes drawing as you scroll through the 150vh container
  });

  // Map scroll progress to the individual step colors
  const step1Color = useTransform(scrollYProgress, [0.1, 0.3], ["#D1D5DB", "#D4AF37"]);
  const step2Color = useTransform(scrollYProgress, [0.4, 0.6], ["#D1D5DB", "#D4AF37"]);
  const step3Color = useTransform(scrollYProgress, [0.7, 0.9], ["#D1D5DB", "#D4AF37"]);
  
  // Custom progress bar length mapping
  const trackProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-white z-10 border-b border-gray-200">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto text-center relative z-10 px-4 md:px-16">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-gray-500 font-bold text-xs mb-4 md:mb-8 block"
        >
          How It Works
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 md:mb-32"
        >
          Follow 3 Easy Steps
        </motion.h2>

        <div className="relative">
          {/* Horizontal Track Line (Mobile Hidden) */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-px bg-gray-200 hidden md:block z-0"></div>
          
          {/* Animated Glowing Progress Line (Mobile Hidden) */}
          <motion.div 
            className="absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gold hidden md:block origin-left z-0"
            style={{ 
              scaleX: trackProgress, 
              boxShadow: '0 0 15px rgba(212,175,55,0.4)' 
            }}
          ></motion.div>

          <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-2 md:gap-4 relative z-10 w-full">
            {steps.map((step, idx) => {
              const colorTransform = idx === 0 ? step1Color : idx === 1 ? step2Color : step3Color;
              
              return (
                <React.Fragment key={idx}>
                  <div className="relative flex flex-col items-center flex-1 w-full">
                    
                    {/* Step Number Node */}
                    <motion.div 
                      style={{ color: colorTransform, borderColor: colorTransform }}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center bg-white mb-2 md:mb-8 relative z-10 transition-colors duration-300 shrink-0"
                    >
                      <span className="text-2xl md:text-4xl font-heading font-bold">{step.num}</span>
                    </motion.div>
                    
                    <div className="text-center w-full px-4 md:px-0">
                      <h3 className="text-xl md:text-3xl font-heading font-bold text-gray-900 mb-2 md:mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-sm md:text-lg max-w-[280px] leading-relaxed mx-auto">{step.desc}</p>
                    </div>
                  </div>

                  {/* Down Arrow for Mobile (Between Steps) */}
                  {idx < steps.length - 1 && (
                    <motion.div 
                      className="md:hidden flex flex-col items-center justify-center py-2"
                      style={{ color: colorTransform }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_currentColor]">
                        <line x1="12" y1="4" x2="12" y2="20"></line>
                        <polyline points="18 14 12 20 6 14"></polyline>
                      </svg>
                    </motion.div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}
