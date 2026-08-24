import React from 'react';
import '../styles/about-hero.css';
import refineryImg from '../assets/assets/ChatGPT Image Jul 29, 2026, 10_16_33 AM.png';
import OurStory from '../components/about/OurStory';
import ClientsNetwork from '../components/about/ClientsNetwork';
import Certifications from '../components/about/Certifications';

export default function AboutUs() {
  return (
    <>
      {/* ── About Hero Section ── */}
      <section className="about-hero">
        {/* Background Image — right-biased, blended into navy */}
        <div className="about-hero__bg">
          <img
            src={refineryImg}
            alt="Industrial Refinery"
            className="about-hero__bg-img"
          />
          {/* Gradient overlay: solid navy left → transparent right */}
          <div className="about-hero__overlay" />
          {/* Bottom fade */}
          <div className="about-hero__bottom-fade" />
        </div>

        {/* Content */}
        <div className="about-hero__container">
          <div className="about-hero__content">
            {/* Eyebrow */}
            <div className="about-hero__eyebrow">
              <span className="about-hero__eyebrow-line" />
              <span>WHO WE ARE</span>
            </div>

            {/* Main Heading */}
            <h1 className="about-hero__heading">
              <span className="about-hero__heading-white">ABOUT</span>
              <span className="about-hero__heading-yellow">RDAPOWER TECH</span>
            </h1>

            {/* Supporting Text */}
            <p className="about-hero__description">
              Empowering industries with reliable automation and electrical
              solutions. Your trusted partner for quality, performance and
              long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story Section (Step 2) ── */}
      <OurStory />

      {/* ── Clients & Business Network Section (Step 3) ── */}
      <ClientsNetwork />

      {/* ── Certifications & Business Registrations Section (Step 4) ── */}
      <Certifications />
    </>
  );
}

