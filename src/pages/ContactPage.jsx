import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg-primary text-text-primary pt-32 pb-24 min-h-screen">
      
      <section className="px-4 md:px-16 max-w-5xl mx-auto mb-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Offices.
          </motion.h1>
          <motion.div variants={textVariants} className="w-full h-px bg-border mb-12"></motion.div>
        </motion.div>
      </section>

      <section className="px-4 md:px-16 max-w-5xl mx-auto">
        
        {/* Dubai Office */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-24"
        >
          <motion.h2 variants={textVariants} className="text-4xl font-heading font-bold mb-6 hover:text-gold transition-colors cursor-pointer">Dubai, UAE</motion.h2>
          <motion.div variants={textVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Al Qusais Industrial Area 3<br/>
                Dubai, UAE<br/>
                P.O Box - 232047
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+97142391234" className="text-text-primary font-bold hover:text-gold transition-colors">+971 4 239 1234</a>
                <a href="mailto:info@fotiosuae.com" className="text-text-primary font-bold hover:text-gold transition-colors border-b border-text-primary self-start pb-1">info@fotiosuae.com</a>
              </div>
            </div>
            
            <div className="w-full h-64 bg-border relative overflow-hidden group cursor-pointer">
               {/* Map Placeholder */}
               <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Dubai Map" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-6 py-2 text-xs uppercase tracking-widest font-bold">View Map</span>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Riyadh Office */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={textVariants} className="text-4xl font-heading font-bold mb-6 hover:text-gold transition-colors cursor-pointer">Riyadh, KSA</motion.h2>
          <motion.div variants={textVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Riyadh City<br/>
                Kingdom of Saudi Arabia
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+97142391234" className="text-text-primary font-bold hover:text-gold transition-colors">+971 4 239 1234</a>
                <a href="mailto:ksa@fotiosuae.com" className="text-text-primary font-bold hover:text-gold transition-colors border-b border-text-primary self-start pb-1">ksa@fotiosuae.com</a>
              </div>
            </div>
            
            <div className="w-full h-64 bg-border relative overflow-hidden group cursor-pointer">
               {/* Map Placeholder */}
               <img src="https://images.unsplash.com/photo-1586724236152-47354f7623a6?q=80&w=2073" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Riyadh Map" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-6 py-2 text-xs uppercase tracking-widest font-bold">View Map</span>
               </div>
            </div>
          </motion.div>
        </motion.div>

      </section>

    </div>
  );
}
