import React from 'react';

import powerImg from '../../assets/industries/power-plant.png';
import cementImg from '../../assets/industries/cement.png';
import printingImg from '../../assets/industries/printing.png';
import foodImg from '../../assets/industries/food.png';
import pharmaImg from '../../assets/industries/pharma.png';
import steelImg from '../../assets/industries/steel.png';
import autoImg from '../../assets/industries/automobile.png';
import packagingImg from '../../assets/industries/packaging.png';

export default function IndustryGrid() {
  const industries = [
    { title: 'Power Plants', image: powerImg },
    { title: 'Cement Plants', image: cementImg },
    { title: 'Printing Industries', image: foodImg },     // Image swapped with Food Processing
    { title: 'Food Processing', image: printingImg },     // Image swapped with Printing Industries
    { title: 'Pharmaceuticals', image: pharmaImg },
    { title: 'Steel Industries', image: autoImg },         // Image swapped with Automobile
    { title: 'Automobile', image: steelImg },             // Image swapped with Steel Industries
    { title: 'Packaging Industries', image: packagingImg },
  ];

  return (
    <section id="industries" style={{
      width: '100%',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      padding: '36px 0 28px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
            fontWeight: 900,
            color: '#0f172a',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: "'Outfit', sans-serif",
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '14px',
            margin: 0,
          }}>
            INDUSTRIES WE SERVE
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '64px',
              height: '3px',
              background: '#FFB800',
              borderRadius: '2px',
            }} />
          </h2>
        </div>

        {/* 8 Industry Cards — Single Row (Matching ProductGrid ratio and size) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '8px',
        }}
        className="industry-grid"
        >
          {industries.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1.5px solid #e8ecf1',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="industry-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.14)';
                e.currentTarget.style.borderColor = '#FFB800';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e8ecf1';
              }}
            >
              {/* Image Container */}
              <div style={{
                width: '100%',
                height: '175px',
                overflow: 'hidden',
                background: '#f1f5f9',
                position: 'relative',
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                  }}
                  className="industry-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15,23,42,0.05)',
                  transition: 'background 0.3s',
                }}
                className="industry-overlay"
                />
              </div>

              {/* Title */}
              <div style={{
                padding: '14px 8px',
                textAlign: 'center',
                background: '#ffffff',
              }}>
                <h3 style={{
                  fontSize: '14.5px',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '0.02em',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        .industry-card:hover .industry-img {
          transform: scale(1.25) !important;
        }
        .industry-card:hover .industry-overlay {
          background: rgba(15,23,42,0) !important;
        }
        @media (max-width: 1024px) {
          .industry-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 640px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .industry-card > div:first-child {
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
