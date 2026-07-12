import React from 'react';

const MarqueeContent = () => (
  <div className="flex items-center shrink-0">
    <span className="text-6xl md:text-8xl font-heading font-bold text-transparent px-8" 
          style={{ WebkitTextStroke: '2px rgba(0, 0, 0, 0.6)' }}>
      WORLD EXPOS • IMMERSIVE PAVILIONS • CUSTOM STANDS • B2B EVENTS • MEP Engineering
    </span>
    <span className="text-4xl text-black px-4">✦</span>
    <span className="text-6xl md:text-8xl font-heading font-bold text-black px-8">
      FOTIOS UAE
    </span>
    <span className="text-4xl text-black px-4">✦</span>
  </div>
);

export default function KineticMarquee() {
  return (
    <div className="w-full overflow-hidden bg-gold py-8 md:py-12 border-y border-border flex relative z-0">
      
      {/* Block 1 (Moves from 0 to -100%) */}
      <div className="flex whitespace-nowrap items-center animate-marquee shrink-0">
        {[...Array(2)].map((_, i) => (
          <MarqueeContent key={i} />
        ))}
      </div>
      
      {/* Block 2 (Moves from 0 to -100% immediately following Block 1) */}
      <div className="flex whitespace-nowrap items-center animate-marquee shrink-0" aria-hidden="true">
        {[...Array(2)].map((_, i) => (
          <MarqueeContent key={i} />
        ))}
      </div>

    </div>
  );
}
