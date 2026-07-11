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

export default function HomePage() {
  return (
    <div className="bg-bg-primary text-text-primary w-full">
      <LandingHero />
      <ManifestoSection />
      <WelcomeSection />
      <KineticMarquee />
      <BentoServices />
      <StepsSection />
      <BlueprintReveal />
      <HorizontalGallery />
      <TestimonialsSection />
    </div>
  );
}
