import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070", title: "ADIPEC Pavilion", client: "Energy Corp", tag: "Exhibitions" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069", title: "Circle Mall", client: "Nakheel", tag: "Interiors" },
  { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931", title: "Salam Leap", client: "Salam Tech", tag: "MEP" },
  { img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070", title: "GITEX Tech", client: "CyberSec", tag: "Exhibitions" }
];

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Framer motion interpolates perfectly when using matching units. 
  // 4 items = 400vw total width. To show the last item (which is 100vw), we translate by -300vw, which is -75% of the 400vw container.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-bg-primary">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden pt-28 pb-10">
        
        {/* Section Header (Normal Flow) */}
        <div className="w-full flex justify-between items-center px-4 md:px-16 border-b border-border pb-6 shrink-0">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
            Featured Projects
          </h2>
          <a href="/projects" className="uppercase tracking-widest text-xs font-bold text-text-primary hover:text-gold transition-colors hidden md:block">
            See All Projects →
          </a>
        </div>

        {/* Sliding Track */}
        <div className="flex-1 w-full relative flex items-center mt-8">
          <motion.div style={{ x }} className="flex w-[400vw] h-full items-center">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="w-[100vw] h-full flex flex-col md:flex-row gap-4 md:gap-16 items-center px-4 md:px-16 shrink-0 group overflow-y-auto pb-4 md:pb-0"
              >
                {/* Massive Image Left */}
                <div className="w-full md:w-[65%] h-[40vh] md:h-full relative overflow-hidden bg-bg-secondary shrink-0">
                  <img 
                    src={project.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt={project.title}
                  />
                </div>
                
                {/* Editorial Text Right */}
                <div className="w-full md:w-[35%] flex flex-col justify-center md:pr-16">
                  <span className="uppercase tracking-[4px] text-text-secondary font-bold text-xs mb-6 block border-l-2 border-text-primary pl-4">
                    {project.tag}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-6 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-lg mb-10">
                    Client: <strong className="text-text-primary">{project.client}</strong>
                  </p>
                  <a href="/projects" className="inline-block border-b-2 border-text-primary pb-1 text-text-primary font-bold uppercase tracking-widest text-sm hover:text-gold hover:border-gold transition-colors self-start">
                    Explore Details
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
