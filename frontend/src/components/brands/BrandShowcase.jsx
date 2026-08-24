import React, { useState } from 'react';

const brands = [
  { name: 'SIEMENS', tag: 'Ingenuity for life', logo: '/brands/siemens.webp', color: '#009999', scale: 1.15 },
  { name: 'ABB', tag: 'Power and productivity for a better world™', logo: '/brands/abb.webp', color: '#FF0000', scale: 1.2 },
  { name: 'Schneider Electric', tag: 'Life Is On', logo: '/brands/schneider.webp', color: '#33D17A', scale: 1.25 },
  { name: 'FESTO', tag: 'Automation Solutions', logo: '/brands/festo.webp', color: '#005596', scale: 1.15 },
  { name: 'SELEC', tag: 'Creates Best Value', logo: '/brands/selec.png', color: '#FF6600', scale: 1.26 },
  { name: 'C&S Electric', tag: 'Control & Power', logo: '/brands/cs-electric.svg', color: '#0A192F', scale: 1.50 },
  { name: 'L&T', tag: 'Larsen & Toubro', logo: '/brands/larsen.webp', color: '#003399', scale: 1.38 },
  { name: 'POLYCAB', tag: 'IDEAS. CONNECTED.', logo: '/brands/polycab.png', color: '#E60000', scale: 1.95 },
  { name: 'DOWELLS', tag: 'Cable Terminals', logo: '/brands/dowells.png', color: '#002B49', scale: 2.05 },
];

function BrandCard({ brand }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #e2e8f0',
        borderRadius: '16px',
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minWidth: '240px',
        minHeight: '120px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
        flexShrink: 0,
      }}
      className="brand-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#FFB800';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
    >
      <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {!imgFailed && brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            style={{
              maxWidth: '85%',
              maxHeight: '56px',
              objectFit: 'contain',
              transform: brand.scale ? `scale(${brand.scale})` : undefined,
              transition: 'transform 0.2s',
            }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span
            style={{
              fontSize: '32px',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: brand.color,
              lineHeight: 1.1,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {brand.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function BrandShowcase() {
  // Double brands list for seamless infinite scroller loop
  const carouselItems = [...brands, ...brands];

  return (
    <section id="brands" style={{
      width: '100%',
      background: '#ffffff',
      padding: '38px 0 32px',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9',
      overflow: 'hidden',
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
            BRANDS WE DEAL IN
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

        {/* Autoplay Carousel Container advancing LEFT */}
        <div style={{
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          padding: '12px 0',
        }}>
          <div
            className="brand-marquee-track"
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
            }}
          >
            {carouselItems.map((brand, idx) => (
              <BrandCard key={idx} brand={brand} />
            ))}
          </div>
        </div>

      </div>

      {/* CSS Continuous Autoplay Carousel moving LEFT every 1 second smooth step */}
      <style>{`
        @keyframes brandSlideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 12px));
          }
        }
        .brand-marquee-track {
          animation: brandSlideLeft 16s linear infinite;
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
