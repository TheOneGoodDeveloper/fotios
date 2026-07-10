import React from 'react';
import LandingHero from '../components/LandingHero';
import WelcomeSection from '../components/WelcomeSection';
import BentoServices from '../components/BentoServices';
import StepsSection from '../components/StepsSection';
import HorizontalGallery from '../components/HorizontalGallery';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <LandingHero />
      <WelcomeSection />
      <BentoServices />
      <StepsSection />
      <HorizontalGallery />
      <TestimonialsSection />
    </div>
  );
}
