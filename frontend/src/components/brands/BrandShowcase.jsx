import React from 'react';

export default function BrandShowcase() {
  const brands = [
    { name: 'SIEMENS', tag: 'Ingenuity for life', color: '#009999' },
    { name: 'ABB', tag: 'Power and productivity for a better world™', color: '#FF0000' },
    { name: 'Schneider Electric', tag: 'Life Is On', color: '#33D17A' },
    { name: 'FESTO', tag: 'Automation Solutions', color: '#005596' },
    { name: 'SELEC', tag: 'Creates Best Value', color: '#FF6600' },
    { name: 'C&C electric', tag: 'Control & Power', color: '#0A192F' },
    { name: 'L&T', tag: 'Larsen & Toubro', color: '#003399' },
    { name: 'POLYCAB', tag: 'IDEAS. CONNECTED.', color: '#E60000' },
    { name: 'DOWELLS', tag: 'Cable Terminals', color: '#002B49' },
  ];

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
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '26px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minWidth: '240px',
                  minHeight: '140px',
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
                <span style={{
                  fontSize: '36px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: brand.color,
                  lineHeight: 1.1,
                  transition: 'transform 0.2s',
                }}>
                  {brand.name}
                </span>
                <span style={{
                  fontSize: '12.5px',
                  color: '#64748b',
                  fontWeight: 600,
                  marginTop: '8px',
                  lineHeight: 1.2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                }}>
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Line */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '28px',
        }}>
          <span style={{ width: '32px', height: '6px', borderRadius: '3px', background: '#0066CC' }} />
          <span style={{ width: '10px', height: '6px', borderRadius: '3px', background: '#cbd5e1' }} />
          <span style={{ width: '10px', height: '6px', borderRadius: '3px', background: '#cbd5e1' }} />
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
