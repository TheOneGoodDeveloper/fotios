import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/fotios-infinite-bg.png';
import { useOffice } from '../hooks/useOffice';

const preloaderImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { isTransitioning, activeOffice } = useOffice();

  useEffect(() => {
    // Extended to 3.5 seconds to allow for smooth cinematic crossfades
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    // Smoothly switch images every 1.5 seconds to match transition duration
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % preloaderImages.length);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    }
  }, []);

  return (
    <AnimatePresence>
      {(isLoading || isTransitioning) && (
        <motion.div
          key={isTransitioning ? "transition" : "preloader"}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 1.2, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image Montage */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <AnimatePresence>
              <motion.img 
                key={currentImgIndex}
                src={preloaderImages[currentImgIndex]}
                alt="Fotios Background Montage"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
              />
            </AnimatePresence>
          </div>
          
          {/* Subtle Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative flex flex-col items-center z-10">
            {/* Cinematic Film Logo Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center mb-4"
            >
              <img 
                src={logoImg} 
                alt="Fotios Infinite Solutions" 
                className="h-24 md:h-32 object-contain drop-shadow-2xl"
              />
            </motion.div>
            
            
            {/* Loading Bar or Transition Text */}
            <div className="flex flex-col items-center mt-8">
              {isTransitioning ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold"
                >
                  Establishing connection to {activeOffice.city} HQ...
                </motion.div>
              ) : (
                <div className="w-48 h-px bg-white/20 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full w-full bg-gold"
                  ></motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
