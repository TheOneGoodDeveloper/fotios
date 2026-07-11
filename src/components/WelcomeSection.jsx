import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, ThumbsUp } from 'lucide-react';

export default function WelcomeSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-4 md:px-16 bg-bg-primary">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.span variants={textVariants} className="uppercase tracking-[4px] text-text-secondary font-bold text-xs block mb-8">
          Core values and our Vision
        </motion.span>
        
        <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-12 leading-tight">
          Welcome To Fotios
        </motion.h2>

        <motion.div variants={textVariants} className="text-text-secondary space-y-6 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
          <p>
            Fotios provides one stop Engineering based solution for your trade and industry which covers our complete MEP & Annual Maintenance service for Buildings, Villas, Shopping centres, Events and Exhibitions, interiors etc.
          </p>
          <p>
            We provide full contract from planning and consultation designing, project management, installation, technical and after sales services to our valued client. And having local access to the database of materials and labour locally and internationally.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-24 pt-16 border-t border-border w-full">
          <motion.div variants={textVariants} className="flex flex-col items-center">
            <div className="flex items-center gap-4 text-gold mb-6">
              <Megaphone size={48} strokeWidth={1.5} />
              <span className="text-6xl md:text-7xl font-heading font-bold">500+</span>
            </div>
            <span className="text-text-primary font-bold uppercase tracking-widest text-sm">Exhibition Stands</span>
          </motion.div>

          <motion.div variants={textVariants} className="flex flex-col items-center">
            <div className="flex items-center gap-4 text-gold mb-6">
              <Users size={48} strokeWidth={1.5} />
              <span className="text-6xl md:text-7xl font-heading font-bold">300+</span>
            </div>
            <span className="text-text-primary font-bold uppercase tracking-widest text-sm">Customers</span>
          </motion.div>

          <motion.div variants={textVariants} className="flex flex-col items-center">
            <div className="flex items-center gap-4 text-gold mb-6">
              <ThumbsUp size={48} strokeWidth={1.5} />
              <span className="text-6xl md:text-7xl font-heading font-bold">100%</span>
            </div>
            <span className="text-text-primary font-bold uppercase tracking-widest text-sm">Customer Satisfaction</span>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
