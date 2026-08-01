import React from 'react';
import { ArrowRight } from 'lucide-react';

import plcImg from '../../assets/products/plc-hmi.png';
import vfdImg from '../../assets/products/vfd.png';
import sensorsImg from '../../assets/products/sensors.png';
import switchgearImg from '../../assets/products/switchgear.png';
import panelImg from '../../assets/products/control-panel.png';
import pneumaticImg from '../../assets/products/pneumatic.png';
import lubricantsImg from '../../assets/products/lubricants.png';
import cablesImg from '../../assets/products/cables.png';

export default function ProductGrid() {
  const products = [
    { name: 'PLC & HMI', image: plcImg },
    { name: 'VARIABLE FREQUENCY DRIVES (VFD)', image: vfdImg },
    { name: 'INDUSTRIAL SENSORS', image: sensorsImg },
    { name: 'SWITCHGEAR', image: switchgearImg },
    { name: 'CONTROL PANELS', image: panelImg },
    { name: 'PNEUMATIC PRODUCTS', image: pneumaticImg },
    { name: 'INDUSTRIAL LUBRICANTS', image: lubricantsImg },
    { name: 'CABLES & WIRES', image: cablesImg },
  ];

  return (
    <section id="products" style={{
      width: '100%',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      padding: '44px 0 36px',
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
            OUR PRODUCTS
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

        {/* 8 Product Cards — 8×1 Grid (Horizontally Expanded Tiles) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '8px',
        }}
        className="product-grid"
        >
          {products.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1.5px solid #e8ecf1',
                padding: '18px 8px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
              className="product-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = '#FFB800';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e8ecf1';
              }}
            >
              <div style={{
                width: '100%',
                height: '175px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                marginBottom: '14px',
                borderRadius: '10px',
                background: '#f8fafc',
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s',
                  }}
                  className="product-img"
                />
              </div>

              {/* Product Title */}
              <h3 style={{
                  fontSize: '13.5px',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '0.04em',
                  lineHeight: 1.25,
                  margin: '0 0 12px 0',
                  fontFamily: "'Inter', sans-serif",
                  minHeight: '36px',
                }}>
                  {item.name}
              </h3>

              {/* Action Arrow */}
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#fffbeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB800',
                marginTop: 'auto',
                transition: 'all 0.3s',
              }}
              className="product-arrow"
              >
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive styles */}
      <style>{`
        .product-card:hover .product-img {
          transform: scale(1.25) !important;
        }
        .product-card:hover .product-arrow {
          background: #FFB800;
          color: #fff;
        }
        @media (max-width: 1200px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .product-card > div:first-child {
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}
