import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-4 md:px-16 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <span className="uppercase tracking-[4px] text-text-secondary font-bold text-xs block mb-8">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-20">
          What Our Clients Say
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-gold text-4xl mb-8">★★★★★</div>
          <p className="text-text-primary text-2xl md:text-3xl font-heading leading-relaxed mb-12">
            "Paying careful attention to detail, very prompt in terms of providing us with our preferred Tv mounting and wiring needs. Excellent work and very pleasant I highly recommend this company any time. Many thanks!"
          </p>
          <div className="flex flex-col items-center gap-2">
             <div className="w-16 h-16 rounded-full bg-border overflow-hidden flex items-center justify-center text-2xl mb-4">
               👨‍💼
             </div>
             <h4 className="text-text-primary font-bold uppercase tracking-widest text-sm">Emilia Bone</h4>
             <span className="text-text-secondary text-xs uppercase tracking-widest">UAE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
