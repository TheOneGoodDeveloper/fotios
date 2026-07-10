import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '../components/ServicesHero';

const services = [
  {
    title: "Interior Work",
    desc: "From conceptualization to flawless execution, we transform commercial and residential spaces with premium materials and exacting standards.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
  },
  {
    title: "Exhibition Build",
    desc: "We construct immersive, high-impact brand spaces and pavilions that captivate audiences at world-class events.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
  },
  {
    title: "MEP Works",
    desc: "Precision mechanical, electrical, and plumbing engineering that forms the invisible, flawless heartbeat of your infrastructure.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931"
  }
];

export default function ServicesPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      
      {/* The transferred interactive hero! */}
      <ServicesHero />
      
      <section className="px-4 md:px-16 max-w-[1400px] mx-auto pt-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Our Expertise.
          </motion.h1>
          <motion.div variants={textVariants} className="w-full h-px bg-border mb-16"></motion.div>
        </motion.div>

        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center mb-32 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div variants={textVariants} className="w-full md:w-1/2">
              <div className="relative overflow-hidden aspect-[4/3] w-full">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
            
            <motion.div variants={textVariants} className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">{service.title}</h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href="/contact" className="inline-block border border-text-primary px-8 py-3 uppercase tracking-widest text-xs font-bold text-text-primary hover:bg-text-primary hover:text-white transition-colors">
                Request a Quote
              </a>
            </motion.div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
