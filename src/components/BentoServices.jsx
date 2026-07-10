import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Interior Work",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  },
  {
    title: "MEP Installation Work",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931",
  },
  {
    title: "VIP Installation Works For Exhibition Stands",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  }
];

export default function BentoServices() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-4 md:px-16 max-w-[1600px] mx-auto bg-bg-primary">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="text-center mb-24"
      >
        <motion.span variants={itemVariants} className="uppercase tracking-[4px] text-text-secondary font-bold text-xs block mb-8">
          What We Do
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-12">
          What You Will Get From Us
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-6">
              <img 
                src={service.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={service.title}
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-primary text-center px-4">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
         <p className="text-text-secondary text-lg">Can't meet via contact us for better help and services. <a href="/services" className="text-text-primary font-bold border-b border-text-primary hover:text-gold hover:border-gold transition-colors pb-1">Explore all services.</a></p>
      </div>
    </section>
  );
}
