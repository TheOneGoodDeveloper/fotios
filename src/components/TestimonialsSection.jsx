import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Emilia Bone",
    review: "Paying careful attention to detail and very prompt. They listened to exactly what we needed and delivered flawlessly. Excellent work and a very pleasant team—I highly recommend them.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Emilia+Bone&background=random"
  },
  {
    name: "Tariq Al Mansoori",
    review: "Honestly, the exhibition pavilion they built for us completely stole the show. The team was incredibly responsive and handled the intense pressure of the deadline beautifully.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Tariq+Al+Mansoori&background=random"
  },
  {
    name: "Scott Antony",
    review: "Incredibly professional and brought real value to our project. They went out of their way to ensure every minor detail was perfect before handing it over. Fully satisfied!",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Scott+Antony&background=random"
  },
  {
    name: "Sivaruban Rengasamy",
    review: "They took completely raw blueprints and turned them into a stunning reality. The attention to detail during the MEP installation was flawless. Easily the best contractors we've worked with in Dubai.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Sivaruban+Rengasamy&background=random"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-[#F8F9FA]">
      
      {/* Subtle light-mode radial background to give it a soft, premium studio feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,1)_0%,_transparent_60%)]"></div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* LEFT COLUMN: Context & Google Badge */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="uppercase tracking-[4px] text-gold font-bold text-xs block mb-6">
            Client Reputation
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#0A0A0A] mb-12 leading-[1.1] tracking-tight">
            Don't just take our word for it.
          </h2>

          {/* Glowing Google Badge (Light Mode) */}
          <div className="inline-flex items-center gap-6 bg-white border border-black/5 p-6 rounded-2xl mb-12 max-w-fit shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 duration-500">
            <div className="w-14 h-14 bg-[#F8F9FA] rounded-full flex items-center justify-center p-3 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold text-xl mb-1">
                ★★★★★
              </div>
              <div className="text-[#0A0A0A] font-bold text-xl leading-none">4.9 / 5.0</div>
              <div className="text-black/40 text-xs mt-1 uppercase tracking-widest font-bold">Google Reviews</div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Massive Editorial Quote */}
        <div className="lg:col-span-7 relative min-h-[400px] flex items-center">
          
          {/* Background decorative quote mark */}
          <div className="absolute -top-8 -left-4 md:-left-12 text-[150px] md:text-[250px] font-serif text-black/5 leading-none select-none pointer-events-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full"
            >
              {/* Stars */}
              <div className="flex gap-2 text-gold text-sm mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => <span key={i}>★</span>)}
              </div>

              {/* The Quote */}
              <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-[#111] leading-relaxed mb-10 drop-shadow-sm max-w-3xl">
                "{testimonials[current].review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border border-gold/50 scale-110"></div>
                  <img 
                    src={testimonials[current].img} 
                    alt={testimonials[current].name} 
                    className="w-16 h-16 rounded-full object-cover relative z-10 grayscale" 
                  />
                </div>
                <div>
                  <h4 className="text-[#0A0A0A] font-bold text-xl">{testimonials[current].name}</h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}
