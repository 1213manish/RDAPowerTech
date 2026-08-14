import React from 'react';
import Hero from '../components/hero/Hero';
import StatsBar from '../components/stats/StatsBar';
import ProductGrid from '../components/products/ProductGrid';
import BrandShowcase from '../components/brands/BrandShowcase';
import WhyChooseBanner from '../components/whyChoose/WhyChooseBanner';
import IndustryGrid from '../components/industries/IndustryGrid';
import ServicesGrid from '../components/services/ServicesGrid';
import AboutContactSection from '../components/about/AboutContactSection';

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Counter Bar */}
      <StatsBar />

      {/* 3. Our Products Section */}
      <ProductGrid />

      {/* 4. Brands We Deal In Section */}
      <BrandShowcase />

      {/* 5. Why Choose RDA PowerTech Banner */}
      <WhyChooseBanner />

      {/* 6. Industries We Serve Section */}
      <IndustryGrid />

      {/* 7. Our Services Section */}
      <ServicesGrid />

      {/* 8. About Us & Get In Touch Split Section */}
      <AboutContactSection />
    </div>
  );
}



