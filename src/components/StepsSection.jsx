import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "1", title: "Book", desc: "Give us your exact date & time when you want us." },
  { num: "2", title: "Schedule", desc: "Contact us at times that are convenient for you." },
  { num: "3", title: "Relax", desc: "Our expert team will do the rest and give it back with a new smile." }
];

export default function StepsSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.1, scale: 1, color: "#1A1A1A", transition: { duration: 0.8, type: "spring", bounce: 0.6 } },
    hover: { opacity: 1, scale: 1.1, color: "#D4AF37", transition: { duration: 0.3 } }
  };

  return (
    <section className="py-32 px-4 md:px-16 bg-bg-secondary">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
        className="max-w-[1400px] mx-auto text-center"
      >
        <motion.span variants={itemVariants} className="uppercase tracking-[4px] text-text-secondary font-bold text-xs mb-8 block">
          How It Works
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-20">
          Follow 3 Easy Steps
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 z-10">
          
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="absolute top-[48px] left-[16.66%] w-[66.66%] h-1 bg-border hidden md:block -z-10">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "linear", delay: 0.5 }}
              className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </div>

          {/* Animated Connecting Line (Mobile Only) */}
          <div className="absolute top-[5%] left-1/2 w-1 h-[90%] bg-border block md:hidden -z-10 -translate-x-1/2">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "linear", delay: 0.5 }}
              className="w-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              whileHover="hover"
              whileTap="hover"
              className="relative flex flex-col items-center bg-bg-secondary cursor-pointer"
            >
              <motion.div variants={numberVariants} className="text-8xl font-heading font-bold text-text-primary mb-2 relative z-10 bg-bg-secondary px-6">
                {step.num}
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary text-lg max-w-[280px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
