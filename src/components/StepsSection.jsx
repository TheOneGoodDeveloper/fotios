import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { num: "1", title: "Book", desc: "Share your need and information with us." },
  { num: "2", title: "Schedule", desc: "Schedule a time for us to attend to you." },
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
        variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
        className="max-w-[1400px] mx-auto text-center"
      >
        <motion.span variants={itemVariants} className="uppercase tracking-[4px] text-text-secondary font-bold text-xs mb-8 block">
          How It Works
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-20">
          Follow 3 Easy Steps
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 lg:gap-12 z-10">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Block */}
              <motion.div 
                variants={itemVariants} 
                whileHover="hover"
                whileTap="hover"
                className="relative flex flex-col items-center flex-1 bg-bg-secondary cursor-pointer"
              >
                <motion.div variants={numberVariants} className="text-8xl font-heading font-bold text-text-primary mb-2 relative z-10 bg-bg-secondary px-6">
                  {step.num}
                </motion.div>
                <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">{step.title}</h3>
                <p className="text-text-secondary text-lg max-w-[280px] leading-relaxed">{step.desc}</p>
              </motion.div>

              {/* Directional Arrow */}
              {idx < steps.length - 1 && (
                <motion.div variants={itemVariants} className="text-gold flex-shrink-0 my-4 md:my-0 md:-mt-32">
                  <ArrowRight size={48} strokeWidth={1.5} className="hidden md:block" />
                  <ArrowDown size={40} strokeWidth={1.5} className="block md:hidden" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
