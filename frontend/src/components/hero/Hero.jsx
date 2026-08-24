import React from 'react';
import { ShieldCheck, Settings, Truck, FileText, Phone, MessageCircle } from 'lucide-react';
import heroProductsImg from '../../assets/hero/ChatGPT Image Jul 29, 2026, 09_57_35 AM.png';
import heroBgImg from '../../assets/hero/ChatGPT Image Jul 29, 2026, 09_59_59 AM.png';
import { useQuoteModal } from '../../context/QuoteContext';

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section
      style={{ position: 'relative', width: '100%', background: '#050D1E', color: '#ffffff', overflow: 'hidden' }}
    >
      {/* ── Background Image with Gradient Overlay ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={heroBgImg}
          alt="Industrial Automation Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
        />
        {/* Left-side dark gradient for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #050D1E 0%, rgba(5,13,30,0.90) 35%, rgba(5,13,30,0.20) 100%)',
        }} />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to top, #050D1E, transparent)',
        }} />
      </div>

      {/* ── Hero Content (Aligned with Logo & Email Container: 1400px, padding 0 40px) ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', minHeight: '440px' }}
             className="hero-grid"
        >

          {/* ── Left Column: Text & CTAs ── */}
          <div style={{ padding: '52px 0', display: 'flex', flexDirection: 'column', gap: '22px' }}
               className="hero-left"
          >

            {/* Eyebrow Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFB800', fontWeight: 800, fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              <span style={{ width: '36px', height: '2.5px', background: '#FFB800', display: 'inline-block' }} />
              <span>INDUSTRIAL AUTOMATION &</span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 0.9, margin: 0 }}>
              <span style={{ display: 'block', color: '#ffffff', fontSize: 'clamp(3.5rem, 6vw, 6.2rem)' }}>
                ELECTRICAL
              </span>
              <span style={{ display: 'block', color: '#FFB800', fontSize: 'clamp(3.5rem, 6vw, 6.2rem)' }}>
                SOLUTIONS
              </span>
            </h1>

            {/* Subheading */}
            <p style={{ fontSize: '19px', fontWeight: 500, color: '#e2e8f0', maxWidth: '480px', margin: 0, lineHeight: 1.5 }}>
              Powering Industries with{' '}
              <span style={{ fontWeight: 800, color: '#FFB800' }}>
                Reliable Automation
              </span>
            </p>

            {/* ── Trust Badges ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              {[
                { icon: <ShieldCheck style={{ width: '18px', height: '18px', color: '#FFB800', flexShrink: 0 }} />, label: 'Authorized Supply' },
                { icon: <Settings style={{ width: '18px', height: '18px', color: '#FFB800', flexShrink: 0 }} />, label: 'Technical Support' },
                { icon: <Truck style={{ width: '18px', height: '18px', color: '#FFB800', flexShrink: 0 }} />, label: 'Fast Delivery Across India' },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '9px 16px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                  }}
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* ── CTA Buttons ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', paddingTop: '6px' }}>
              {/* GET A QUOTE */}
              <button
                onClick={() => openQuoteModal()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#0066CC',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(0,102,204,0.45)',
                  transition: 'all 0.2s',
                }}
                className="hover:bg-[#0052a3]"
              >
                <FileText style={{ width: '18px', height: '18px' }} />
                <span>GET A QUOTE</span>
              </button>

              {/* CALL NOW */}
              <a
                href="tel:+919973015880"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.2s',
                }}
                className="hover:border-white/80 hover:bg-white/10"
              >
                <Phone style={{ width: '18px', height: '18px' }} />
                <span>CALL NOW</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919973015880"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(37,211,102,0.35)',
                  transition: 'all 0.2s',
                }}
                className="hover:bg-[#20bd5a]"
              >
                <MessageCircle style={{ width: '18px', height: '18px', fill: 'white', color: 'transparent' }} />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Contained Equipment Image ── */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
               className="hero-right"
          >
            <div style={{ position: 'relative', width: '100%', padding: '20px 0' }}>
              {/* Subtle glow */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                background: 'rgba(0,102,204,0.12)',
                borderRadius: '50%',
                filter: 'blur(50px)',
              }} />
              <img
                src={heroProductsImg}
                alt="Industrial Electrical Components Showcase"
                style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  height: 'auto',
                  maxHeight: '550px',
                  transform: 'scale(1.10)',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  filter: 'drop-shadow(0 10px 35px rgba(0,102,204,0.3))',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-left {
            padding: 32px 0 16px !important;
          }
          .hero-right {
            padding-bottom: 24px;
          }
          .hero-grid > div:first-child h1 span {
            font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
