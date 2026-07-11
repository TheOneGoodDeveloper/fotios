import React from 'react';
import LandingHero from '../components/LandingHero';
import ManifestoSection from '../components/ManifestoSection';
import WelcomeSection from '../components/WelcomeSection';
import BentoServices from '../components/BentoServices';
import StepsSection from '../components/StepsSection';
import HorizontalGallery from '../components/HorizontalGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import KineticMarquee from '../components/KineticMarquee';
import BlueprintReveal from '../components/BlueprintReveal';
import CtaSection from '../components/CtaSection';

export default function HomePage() {
  return (
    <div className="bg-bg-primary text-text-primary w-full">
      {/* The Hook & Credibility Burst */}
      <LandingHero />
      <KineticMarquee />

      {/* Visual Climax & Proof */}
      <BlueprintReveal />
      <HorizontalGallery />

      {/* Capabilities */}
      <BentoServices />
      
      {/* Philosophy (Breath before logic) */}
      <ManifestoSection />

      {/* Who we are -> How we work */}
      <WelcomeSection />
      <StepsSection />

      {/* Trust & Conversion */}
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
