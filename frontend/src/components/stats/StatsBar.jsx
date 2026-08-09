import React from 'react';
import { Zap, Users, Package, Award, Globe } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Zap style={{ width: '24px', height: '24px', color: '#0066CC' }} />,
      number: '12+',
      label: 'Years Experience',
    },
    {
      icon: <Users style={{ width: '24px', height: '24px', color: '#0066CC' }} />,
      number: '500+',
      label: 'Happy Clients',
    },
    {
      icon: <Package style={{ width: '24px', height: '24px', color: '#0066CC' }} />,
      number: '1000+',
      label: 'Products',
    },
    {
      icon: <Award style={{ width: '24px', height: '24px', color: '#0066CC' }} />,
      number: '15+',
      label: 'Brands',
    },
    {
      icon: <Globe style={{ width: '24px', height: '24px', color: '#0066CC' }} />,
      number: 'PAN India',
      label: 'Supply Network',
    },
  ];

  return (
    <section style={{
      width: '100%',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '24px 0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
        className="stats-grid"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '10px 14px',
                borderRight: idx < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
              }}
              className="stat-item"
            >
              {/* Icon without circle ring */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {React.cloneElement(stat.icon, { style: { width: '40px', height: '40px', color: '#0066CC' } })}
              </div>
              {/* Text */}
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: '1.85rem',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.1,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '-0.01em',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: '#64748b',
                  marginTop: '3px',
                  letterSpacing: '0.01em',
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
          .stat-item {
            border-right: none !important;
            padding: 10px 8px !important;
          }
          .stats-grid > div:last-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
