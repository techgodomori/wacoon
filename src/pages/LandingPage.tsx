import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturedPromotions from '../components/landing/FeaturedPromotions';
import CategoriesSection from '../components/landing/CategoriesSection';
import StatsSection from '../components/landing/StatsSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedPromotions />
      <StatsSection />
    </div>
  );
};

export default LandingPage;