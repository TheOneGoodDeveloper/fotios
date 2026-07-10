import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070", title: "ADIPEC Pavilion", client: "Energy Corp", location: "Abu Dhabi", year: "2024" },
  { img: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?q=80&w=2070", title: "Circle Mall", client: "Nakheel", location: "Dubai", year: "2023" },
  { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931", title: "Salam Leap", client: "Salam Tech", location: "Riyadh", year: "2024" },
  { img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000", title: "GITEX Tech Stand", client: "CyberSec", location: "Dubai WTC", year: "2023" },
  { img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070", title: "Data Center Cooling", client: "Confidential", location: "Jebel Ali", year: "2022" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069", title: "Corporate HQ Fit-out", client: "Finance Inc.", location: "DIFC", year: "2024" }
];

export default function ProjectsPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg-primary text-text-primary pt-32 pb-24 min-h-screen">
      
      <section className="px-4 md:px-16 max-w-[1600px] mx-auto mb-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Featured Projects.
          </motion.h1>
          <motion.div variants={textVariants} className="w-full h-px bg-border mb-12"></motion.div>
        </motion.div>
      </section>

      <section className="px-4 md:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center text-text-secondary text-sm border-t border-border pt-3 mt-1">
                  <span>{project.client}</span>
                  <span>{project.location}, {project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
