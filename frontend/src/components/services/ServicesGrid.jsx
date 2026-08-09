import React from 'react';
import { Cpu, Terminal, Sliders, Wrench, LayoutGrid, AlertTriangle } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Cpu style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'INDUSTRIAL AUTOMATION',
      description: 'E2E End to End Automation Solutions',
    },
    {
      icon: <Terminal style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'PLC PROGRAMMING',
      description: 'Programming for Siemens, Mitsubishi & More',
    },
    {
      icon: <Sliders style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'VFD COMMISSIONING',
      description: 'Installation, Testing & Commissioning',
    },
    {
      icon: <Wrench style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'ELECTRICAL MAINTENANCE',
      description: 'Preventive & Breakdown Maintenance',
    },
    {
      icon: <LayoutGrid style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'CONTROL PANEL SOLUTIONS',
      description: 'Designing & Manufacturing of Control Panels',
    },
    {
      icon: <AlertTriangle style={{ width: '28px', height: '28px', color: '#0066CC' }} />,
      title: 'MACHINE BREAKDOWN SUPPORT',
      description: 'Quick Response Support',
    },
  ];

  return (
    <section id="services" style={{
      width: '100%',
      background: '#ffffff',
      padding: '32px 0 24px',
      borderTop: '1px solid #f1f5f9',
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
            OUR SERVICES
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

        {/* 6 Service Cards — 6×1 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '16px',
        }}
        className="services-grid"
        >
          {services.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e8ecf1',
                borderRadius: '16px',
                padding: '34px 24px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = '#0066CC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e8ecf1';
              }}
            >
              {/* Icon without circle ring */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4px',
              }}>
                {React.cloneElement(item.icon, { style: { width: '38px', height: '38px', color: '#0066CC' } })}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1.25,
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                minHeight: '36px',
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#64748b',
                lineHeight: 1.45,
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          .service-card {
            padding: 24px 16px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
