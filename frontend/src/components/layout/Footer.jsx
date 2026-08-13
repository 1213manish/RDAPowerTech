import React from 'react';
import { Heart } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Brands', href: '#brands' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const productCategories = [
    'PLC & HMI',
    'Variable Frequency Drives (VFD)',
    'Switchgear & MCB',
    'Control Panels',
    'Pneumatic Products',
    'Industrial Lubricants',
    'Cables & Wires',
  ];

  const services = [
    'Industrial Automation Solutions',
    'PLC & HMI Programming',
    'VFD Commissioning & Testing',
    'Machine Breakdown Support',
    'Electrical Maintenance',
    'Control Panel Solutions',
  ];

  return (
    <footer style={{
      width: '100%',
      background: '#030712',
      color: '#94a3b8',
      fontFamily: "'Inter', sans-serif",
      borderTop: '1px solid #1e293b',
      padding: '48px 0 24px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '4fr 2fr 3fr 3fr',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid #1e293b',
        }}
        className="footer-grid"
        >

          {/* Col 1: Brand Info */}
          <div>
            <img src={logoImg} alt="RDA PowerTech Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain', marginBottom: '16px' }} />
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              POWERING INDUSTRY. DELIVERING TRUST.
            </p>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '340px' }}>
              Shop No-3, RR Market, Pillar No-97, Danapur Bihta Road, Near Shiwala, Patna - 801113, Bihar.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '2px solid #FFB800', paddingBottom: '8px', display: 'inline-block', marginBottom: '16px' }}>
              QUICK LINKS
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={{ fontSize: '13.5px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FFB800'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '2px solid #FFB800', paddingBottom: '8px', display: 'inline-block', marginBottom: '16px' }}>
              PRODUCT CATEGORIES
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {productCategories.map((item, i) => (
                <li key={i}>
                  <a href="#products" style={{ fontSize: '13.5px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FFB800'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '2px solid #FFB800', paddingBottom: '8px', display: 'inline-block', marginBottom: '16px' }}>
              OUR SERVICES
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map((item, i) => (
                <li key={i}>
                  <a href="#services" style={{ fontSize: '13.5px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FFB800'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12.5px',
          color: '#64748b',
          fontWeight: 500,
        }}>
          <div>© 2025 RDAPOWER TECH. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>Developed with</span>
            <Heart style={{ width: '14px', height: '14px', color: '#ef4444', fill: '#ef4444' }} />
            <span>by</span>
            <a
              href="https://github.com/1213manish"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#38bdf8',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFB800'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
            >
              <svg style={{ width: '14px', height: '14px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>1213manish</span>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
