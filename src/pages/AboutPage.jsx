import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg-primary text-text-primary pt-32 pb-24 min-h-screen">
      
      {/* Editorial Header */}
      <section className="px-4 md:px-16 max-w-5xl mx-auto mb-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={textVariants} className="uppercase tracking-[4px] text-text-secondary font-bold text-xs block mb-8">
            Who We Are
          </motion.span>
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-heading font-bold mb-12 leading-tight">
            Built on Engineering Excellence.
          </motion.h1>
          <motion.div variants={textVariants} className="w-full h-px bg-border mb-12"></motion.div>
          <motion.p variants={textVariants} className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Fotios began its business operation as a civil and maintenance works providing company. Since then, we have evolved to provide complete engineering solutions for trade and industry, covering MEP, annual maintenance, events, exhibitions, and premium interiors.
          </motion.p>
        </motion.div>
      </section>

      {/* Massive Image Break */}
      <section className="w-full h-[60vh] md:h-[80vh] mb-32">
        <img 
          src="https://images.unsplash.com/photo-1542621323-22eaac1ed46d?q=80&w=2070" 
          alt="Fotios Team Construction" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </section>

      {/* Mission & Vision (Clune Grid) */}
      <section className="px-4 md:px-16 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={textVariants} className="text-3xl font-heading font-bold mb-6">Our Mission</motion.h2>
          <motion.div variants={textVariants} className="w-12 h-1 bg-gold mb-8"></motion.div>
          <motion.p variants={textVariants} className="text-text-secondary text-lg leading-relaxed mb-6">
            To become one of the premier company in trade and industry, Events and exhibitions, interior designs by delivering high quality workmanship and better customer satisfaction with reasonable price.
          </motion.p>
          <motion.p variants={textVariants} className="text-text-secondary text-lg leading-relaxed">
            We strive to build long-term relationships with our clients through exceptional quality, transparent communication, and timely delivery of every project we undertake.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={textVariants} className="text-3xl font-heading font-bold mb-6">Our Vision</motion.h2>
          <motion.div variants={textVariants} className="w-12 h-1 bg-text-primary mb-8"></motion.div>
          <motion.p variants={textVariants} className="text-text-secondary text-lg leading-relaxed mb-6">
            Creating a difference in the trade and industry by providing Engineering, interior design and Architectural solution by giving innovative idea to reality.
          </motion.p>
          <motion.p variants={textVariants} className="text-text-secondary text-lg leading-relaxed">
            Our vision is driven by a commitment to sustainability, cutting-edge technology, and a deep understanding of our clients' unique needs and aspirations.
          </motion.p>
        </motion.div>

      </section>

    </div>
  );
}
