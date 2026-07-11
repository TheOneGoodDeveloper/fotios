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

      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-8 min-h-[600px]">
        
        {/* The 70% Star: Exhibitions (Spans 8 columns, 2 full rows) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="group cursor-pointer md:col-span-8 md:row-span-2 relative overflow-hidden rounded-xl"
        >
          <img 
            src={services[2].img} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={services[2].title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="uppercase tracking-[3px] text-gold font-bold text-xs mb-3 block">70% Core Focus</span>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white max-w-lg leading-tight">
              {services[2].title}
            </h3>
          </div>
        </motion.div>

        {/* The 20% Backbone: MEP (Spans 4 columns, 1 row) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group cursor-pointer md:col-span-4 md:row-span-1 relative overflow-hidden rounded-xl min-h-[300px]"
        >
          <img 
            src={services[1].img} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={services[1].title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="uppercase tracking-[3px] text-gold font-bold text-[10px] mb-2 block">Engineering</span>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight">
              {services[1].title}
            </h3>
          </div>
        </motion.div>

        {/* The 10% Support: Interior (Spans 4 columns, 1 row) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="group cursor-pointer md:col-span-4 md:row-span-1 relative overflow-hidden rounded-xl min-h-[300px]"
        >
          <img 
            src={services[0].img} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={services[0].title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="uppercase tracking-[3px] text-gold font-bold text-[10px] mb-2 block">Support</span>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight">
              {services[0].title}
            </h3>
          </div>
        </motion.div>

      </div>
      
      <div className="mt-20 text-center">
         <p className="text-text-secondary text-lg">Can't meet via contact us for better help and services. <a href="/services" className="text-text-primary font-bold border-b border-text-primary hover:text-gold hover:border-gold transition-colors pb-1">Explore all services.</a></p>
      </div>
    </section>
  );
}
