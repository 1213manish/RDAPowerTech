import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteContext';

export default function AboutContactSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="about" style={{
      width: '100%',
      background: '#f8fafc',
      padding: '32px 0 64px',
      borderTop: '1px solid #e2e8f0',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* ── 3 Column Coordinated Layout on Desktop ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}
          className="contact-three-col-grid"
        >

          {/* ── CARD 1: ABOUT US (Dark Navy Panel) ── */}
          <div style={{
            background: '#050D1E',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '36px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 30px rgba(5,13,30,0.25)',
          }}>
            <div>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', sans-serif",
                borderBottom: '3px solid #FFB800',
                paddingBottom: '10px',
                display: 'inline-block',
                marginBottom: '20px',
                color: '#ffffff',
              }}>
                ABOUT US
              </h2>

              <p style={{
                fontSize: '14.5px',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '14px',
              }}>
                <span style={{ fontWeight: 800, color: '#FFB800' }}>RDAPOWER TECH</span> is a trusted supplier of industrial automation and electrical products based in Patna, Bihar. We provide high-quality products and engineering solutions for industries across India.
              </p>

              <p style={{
                fontSize: '14.5px',
                color: '#cbd5e1',
                lineHeight: 1.65,
                margin: 0,
              }}>
                Our focus is on reliability, fast service, and long-term customer relationships.
              </p>
            </div>

            {/* About Us Stats at bottom */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              paddingTop: '20px',
              borderTop: '1px solid #1e293b',
              marginTop: '24px',
              textAlign: 'center',
            }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFB800', fontFamily: "'Outfit', sans-serif" }}>12+</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.02em' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFB800', fontFamily: "'Outfit', sans-serif" }}>500+</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.02em' }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFB800', fontFamily: "'Outfit', sans-serif" }}>1000+</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.02em' }}>Products</div>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFB800', fontFamily: "'Outfit', sans-serif" }}>PAN India</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.02em' }}>Supply Network</div>
              </div>
            </div>
          </div>

          {/* ── CARD 2: GET IN TOUCH (Light Panel) ── */}
          <div id="contact" style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '36px 28px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', sans-serif",
                borderBottom: '3px solid #FFB800',
                paddingBottom: '10px',
                display: 'inline-block',
                color: '#0f172a',
                marginBottom: '20px',
              }}>
                GET IN TOUCH
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Phone */}
                <a href="tel:+919973015880" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#1e293b', fontSize: '15px', fontWeight: 600 }} className="hover:text-[#0066CC] transition-colors">
                  <Phone style={{ width: '20px', height: '20px', color: '#0f172a', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, color: '#0f172a' }}>9973015880</span>
                </a>

                {/* Email */}
                <a href="mailto:info@rdapowertech.com" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#1e293b', fontSize: '15px', fontWeight: 600 }} className="hover:text-[#0066CC] transition-colors">
                  <Mail style={{ width: '20px', height: '20px', color: '#0f172a', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, color: '#0f172a' }}>info@rdapowertech.com</span>
                </a>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '14.5px', color: '#334155', fontWeight: 600 }}>
                  <MapPin style={{ width: '20px', height: '20px', color: '#0f172a', flexShrink: 0, marginTop: '2px' }} />
                  <span>Patna, Bihar, India</span>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '14.5px', color: '#334155', fontWeight: 600 }}>
                  <Clock style={{ width: '20px', height: '20px', color: '#0f172a', flexShrink: 0, marginTop: '2px' }} />
                  <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
                </div>
              </div>
            </div>

            {/* CONTACT US Button */}
            <div style={{ marginTop: '24px' }}>
              <button
                onClick={() => openQuoteModal()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFB800',
                  color: '#0f172a',
                  fontWeight: 900,
                  fontSize: '15px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '14px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(255,184,0,0.3)',
                  transition: 'all 0.2s',
                  width: '100%',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e6a600'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#FFB800'; }}
              >
                <span>CONTACT US</span>
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </button>
            </div>
          </div>

          {/* ── CARD 3: MAP (Map Panel) ── */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '340px',
          }}>
            <iframe
              title="RDAPOWER TECH Patna Location Map"
              src="https://maps.google.com/maps?q=25.581332674646195,85.02496458011828&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ width: '100%', height: '100%', flex: 1, minHeight: '300px', border: 'none' }}
              allowFullScreen=""
              loading="lazy"
            />
            {/* Map Pin Badge Overlay */}
            <div style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <MapPin style={{ width: '14px', height: '14px', color: '#dc2626' }} />
              <span>RDAPOWER TECH, Patna</span>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive Stacking for Mobile & Tablet */}
      <style>{`
        @media (max-width: 1024px) {
          .contact-three-col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .contact-three-col-grid > div:last-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .contact-three-col-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-three-col-grid > div:last-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
