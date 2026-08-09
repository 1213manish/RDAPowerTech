import React from 'react';
import { ShieldCheck, Cpu, Tag, Truck, Headphones, Globe } from 'lucide-react';

export default function WhyChooseBanner() {
  const features = [
    {
      icon: <ShieldCheck style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'GENUINE PRODUCTS',
      subtitle: '100% Original & Quality Assured',
    },
    {
      icon: <Cpu style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'TECHNICAL EXPERTISE',
      subtitle: '12+ Years of Industrial Experience',
    },
    {
      icon: <Tag style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'COMPETITIVE PRICING',
      subtitle: 'Best Price with Best Value',
    },
    {
      icon: <Truck style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'FAST DELIVERY',
      subtitle: 'On-time Delivery Across India',
    },
    {
      icon: <Headphones style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'AFTER SALES SUPPORT',
      subtitle: 'Dedicated Support Whenever You Need',
    },
    {
      icon: <Globe style={{ width: '32px', height: '32px', color: '#ffffff', strokeWidth: 1.5 }} />,
      title: 'PAN INDIA SUPPLY',
      subtitle: 'Serving Industries All Over India',
    },
  ];

  return (
    <section style={{
      width: '100%',
      background: '#ffffff',
      padding: '36px 0',
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
            WHY CHOOSE <span style={{ color: '#0066CC' }}>RDAPOWER TECH?</span>
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

        {/* Dark Navy Feature Panel */}
        <div style={{
          background: '#050D1E',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(5,13,30,0.3)',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
        }}
        className="why-choose-grid"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '42px 20px 38px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'center',
                gap: '14px',
                borderRight: idx < features.length - 1 ? '1px solid #1e293b' : 'none',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              className="why-choose-item"
            >
              {/* Yellow Icon without circle ring */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4px',
              }}>
                {React.cloneElement(item.icon, { style: { width: '40px', height: '40px', color: '#FFB800', strokeWidth: 1.75 } })}
              </div>
              <h3 style={{
                fontSize: '15px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.04em',
                lineHeight: 1.25,
                margin: 0,
                fontFamily: "'Outfit', sans-serif",
                textTransform: 'uppercase',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#cbd5e1',
                lineHeight: 1.45,
                margin: 0,
                fontWeight: 500,
              }}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .why-choose-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .why-choose-item {
            border-right: none !important;
            border-bottom: 1px solid #1e293b;
          }
          .why-choose-item:nth-child(3),
          .why-choose-item:nth-child(6) {
            border-right: none !important;
          }
        }
        @media (max-width: 640px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-choose-item {
            padding: 28px 12px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
