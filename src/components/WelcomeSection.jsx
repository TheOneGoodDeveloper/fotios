import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import mapImg from '../assets/uae_ksa_map.png';

const Counter = ({ from, to, duration = 2, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      // Small timeout to allow the fade-in stagger to happen before counting
      const timeout = setTimeout(() => {
        const controls = animate(from, to, {
          duration: duration,
          ease: "easeOut",
          onUpdate: (value) => {
            setDisplayValue(Math.floor(value));
          }
        });
        return controls.stop;
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, from, to, duration, delay]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export default function WelcomeSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#111111] border-t border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        
        {/* Left Column: Vision & Visuals */}
        <motion.div variants={textVariants} className="flex flex-col">
          <span className="uppercase tracking-[4px] text-white/50 font-bold text-xs block mb-8 flex items-center gap-4">
            <div className="w-12 h-px bg-white/30"></div>
            Core values and our Vision
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-12 leading-[1.1] tracking-tight">
            Helping you transform engineering across the globe.
          </h2>

          {/* Stylized UAE/KSA Map Graphic */}
          <div className="w-full mt-auto relative opacity-90 mix-blend-lighten grayscale-[50%]">
            <img 
              src={mapImg} 
              alt="UAE & KSA Regional Reach" 
              className="w-full h-[400px] object-cover rounded-xl"
            />
            {/* Subtle tech overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Column: Paragraphs & Massive Stats */}
        <motion.div variants={textVariants} className="flex flex-col lg:pl-12">
          
          <div className="text-white/70 space-y-6 text-lg md:text-xl leading-relaxed mb-16">
            <p>
              Fotios provides one stop Engineering based solution for your trade and industry which covers our complete MEP & Annual Maintenance service for Buildings, Villas, Shopping centres, Events and Exhibitions, interiors etc.
            </p>
            <p>
              We provide full contract from planning and consultation designing, project management, installation, technical and after sales services to our valued client. And having local access to the database of materials and labour locally and internationally.
            </p>
          </div>

          {/* Stacked Massive Statistics - PCL Style */}
          <div className="flex flex-col gap-16 mt-auto">
            
            <motion.div variants={textVariants}>
              <span className="text-7xl md:text-8xl lg:text-[100px] font-heading font-bold text-gold drop-shadow-lg leading-none block mb-2">
                <Counter from={0} to={500} suffix="+" delay={0.2} />
              </span>
              <span className="text-white font-medium text-lg tracking-wide">Exhibition Stands</span>
            </motion.div>

            <motion.div variants={textVariants}>
              <span className="text-7xl md:text-8xl lg:text-[100px] font-heading font-bold text-gold drop-shadow-lg leading-none block mb-2">
                <Counter from={0} to={300} suffix="+" delay={0.4} />
              </span>
              <span className="text-white font-medium text-lg tracking-wide">Customers</span>
            </motion.div>

            <motion.div variants={textVariants}>
              <span className="text-7xl md:text-8xl lg:text-[100px] font-heading font-bold text-gold drop-shadow-lg leading-none block mb-2">
                <Counter from={0} to={100} suffix="%" delay={0.6} />
              </span>
              <span className="text-white font-medium text-lg tracking-wide">Customer Satisfaction</span>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
