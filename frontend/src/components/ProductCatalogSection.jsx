import React from 'react';
import { ArrowRight, ShieldCheck, Truck, BadgeCheck, Headset } from 'lucide-react';

export default function ProductCatalogSection({ setActivePage }) {
  const categories = [
    {
      id: 'mcb',
      title: 'MCB',
      description: 'Miniature Circuit Breakers engineered for complete industrial & commercial power protection.',
      brands: ['ABB', 'Schneider', 'Siemens'],
      image: '/prdt_images/MCB.png',
    },
    {
      id: 'switchgears',
      title: 'Switchgears',
      description: 'Air Circuit Breakers, MCCBs & heavy duty load disconnectors for main distribution.',
      brands: ['ABB', 'Siemens', 'Eaton'],
      image: '/prdt_images/Switchgear.png',
    },
    {
      id: 'drives',
      title: 'Drives & VFDs',
      description: 'Variable Frequency Drives & precision AC motor speed control modules.',
      brands: ['ABB', 'Delta', 'Yaskawa'],
      image: '/prdt_images/VFD.png',
    },
    {
      id: 'contactors',
      title: 'Contactors',
      description: 'Heavy-duty Power Contactors & thermal overload protection relay units.',
      brands: ['Schneider', 'Siemens', 'Phoenix'],
      image: '/prdt_images/AC Contactor.png',
    },
    {
      id: 'solar-db',
      title: 'Solar DB AC/DC',
      description: 'Industrial Solar AC/DC Distribution Enclosures & combiner junction boxes.',
      brands: ['ABB', 'Schneider', 'L&T'],
      image: '/prdt_images/Industrial solar ACDC distribution box.png',
    },
    {
      id: 'isolators',
      title: 'Isolators',
      description: 'Rotary Cam Switches & Heavy Load Break Industrial Safety Isolators.',
      brands: ['Kraus', 'ABB', 'Siemens'],
      image: '/prdt_images/Industrial Rotary.png',
    }
  ];

  const features = [
    { label: '100% Genuine Products', icon: ShieldCheck },
    { label: 'Fast Nationwide Delivery', icon: Truck },
    { label: 'Quality Assurance', icon: BadgeCheck },
    { label: 'Expert Technical Support', icon: Headset }
  ];

  return (
    <>
      <section className="catalog-section">
        <div className="catalog-container">
          {/* Section Header */}
          <div className="catalog-header">
            <div className="catalog-header-left">
              <span className="catalog-badge">PRODUCT CATALOG</span>
              <h2 className="catalog-heading">Products We Have</h2>
              <p className="catalog-subtext">
                Explore 1000+ genuine electrical products from globally trusted manufacturers.
              </p>
            </div>
            <button className="catalog-view-btn" onClick={() => setActivePage('products')}>
              <span>View Full Catalog</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 3×2 Enterprise Product Showcase Grid */}
          <div className="catalog-grid">
            {categories.map((item) => (
              <div
                key={item.id}
                className="catalog-card-v2"
                onClick={() => setActivePage('products')}
              >
                {/* LEFT SIDE (42%) */}
                <div className="card-left-col">
                  <div className="card-left-top">
                    <h3 className="card-title-v2">{item.title}</h3>
                    <p className="card-desc-v2">{item.description}</p>
                    
                    {/* Subtle Separator */}
                    <div className="card-divider-line" />

                    {/* Horizontal Brand Pills */}
                    <div className="card-brands-v2">
                      {item.brands.map((b, i) => (
                        <span key={i} className="card-brand-pill-v2">{b}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Pinned CTA - Guaranteed Single Line */}
                  <div className="card-cta-v2">
                    <span>Explore Products</span>
                    <ArrowRight size={15} className="card-cta-arrow-v2" />
                  </div>
                </div>

                {/* RIGHT SIDE (58%) */}
                <div className="card-right-col">
                  {/* Softened Subtle Ambient Glow */}
                  <div className="card-product-glow" />
                  
                  {/* Overflowing Render Image Shifted Slightly Right */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-render-img"
                  />

                  {/* Tight Contact Shadow right under the product base */}
                  <div className="card-contact-shadow" />

                  {/* Soft Floor Reflection - 12% Opacity & Enhanced Blur */}
                  <div className="card-render-shadow" />
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose RDA PowerTech Floating Glass Panel Section */}
          <div className="why-choose-section">
            <div className="why-choose-panel">
              {/* Tiny 120px Blue Glow Highlights Centered on Top & Bottom Borders */}
              <div className="panel-highlight-top" />
              <div className="panel-highlight-bottom" />

              {/* Section Header */}
              <div className="why-choose-header">
                <span className="why-choose-badge">WHY CHOOSE RDA POWERTECH</span>
                <h3 className="why-choose-title">Powering Industries with Trusted Electrical Solutions</h3>
              </div>

              {/* Feature Strip Horizontal Row */}
              <div className="why-choose-strip">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="why-choose-item">
                        {/* Soft electric blue glow behind icon only */}
                        <div className="why-choose-glow" />

                        {/* Rounded Square Outline Container (56x56px, 14px Radius) */}
                        <div className="why-choose-icon-box">
                          <Icon size={26} strokeWidth={1.8} className="why-choose-icon" />
                        </div>

                        {/* 20px Poppins 600 Feature Title - Static White */}
                        <h4 className="why-choose-heading">{feat.label}</h4>
                      </div>

                      {/* Rich Gradient Vertical Divider */}
                      {idx < features.length - 1 && <div className="why-choose-divider" />}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== SECTION (Standardized 48px Vertical Spacing) ========== */
        .catalog-section {
          position: relative;
          width: 100%;
          background: #FFFFFF;
          padding: 48px 0 0 0;
          overflow: hidden;
        }

        /* Standardized 1320px Container Alignment */
        .catalog-container {
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ========== HEADER (Standard 28px Description-to-Content Gap) ========== */
        .catalog-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
        }

        .catalog-header-left {
          max-width: 640px;
        }

        .catalog-badge {
          display: inline-block;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #248BFF;
          background: rgba(36, 139, 255, 0.08);
          border: 1px solid rgba(36, 139, 255, 0.25);
          border-radius: 100px;
          margin-bottom: 12px;
        }

        .catalog-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .catalog-subtext {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
        }

        .catalog-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        .catalog-view-btn:hover {
          border-color: #248BFF;
          background: rgba(36, 139, 255, 0.04);
          box-shadow: 0 4px 14px rgba(36, 139, 255, 0.15);
        }

        .catalog-view-btn svg {
          color: #248BFF;
        }

        /* ========== 3x2 GRID (Standard 24px Grid Gap & 52px Section Spacing) ========== */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 52px;
        }

        /* ========== 2-COLUMN CARD (32px Internal Padding) ========== */
        .catalog-card-v2 {
          position: relative;
          height: 320px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          padding: 32px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Exact User Hover Physics */
        .catalog-card-v2:hover {
          transform: translateY(-10px);
          border-color: #248BFF;
          box-shadow: 0 18px 50px rgba(36, 139, 255, 0.18);
        }

        /* ---- LEFT SIDE (42%) ---- */
        .card-left-col {
          width: 42%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 14px;
          flex-shrink: 0;
          z-index: 2;
        }

        .card-left-top {
          display: flex;
          flex-direction: column;
        }

        .card-title-v2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.48rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          line-height: 1.15;
          transition: color 250ms ease;
        }

        .catalog-card-v2:hover .card-title-v2 {
          color: #248BFF;
        }

        .card-desc-v2 {
          font-size: 13px;
          color: #475569;
          line-height: 1.48;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 38px;
        }

        /* Subtle Separator */
        .card-divider-line {
          width: 100%;
          height: 1px;
          background: #E2E8F0;
          margin: 10px 0 12px;
        }

        /* Horizontal Brand Pills Layout */
        .card-brands-v2 {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
        }

        .card-brand-pill-v2 {
          height: 32px;
          padding-inline: 12px;
          font-size: 12.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #248BFF;
          background: rgba(36, 139, 255, 0.06);
          border: 1px solid rgba(36, 139, 255, 0.25);
          border-radius: 100px;
          white-space: nowrap;
          transition: all 250ms ease;
        }

        .catalog-card-v2:hover .card-brand-pill-v2 {
          border-color: #248BFF;
          color: #0D7DFF;
          background: rgba(36, 139, 255, 0.14);
        }

        /* Bottom Pinned CTA - Guaranteed Single Line */
        .card-cta-v2 {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #248BFF;
          letter-spacing: 0.02em;
          margin-top: auto;
          padding-top: 10px;
          white-space: nowrap;
          transition: color 250ms ease;
        }

        .catalog-card-v2:hover .card-cta-v2 {
          color: #0D7DFF;
        }

        .card-cta-arrow-v2 {
          transition: transform 250ms ease;
        }

        .catalog-card-v2:hover .card-cta-arrow-v2 {
          transform: translateX(6px);
        }

        /* ---- RIGHT SIDE (58%) ---- */
        .card-right-col {
          width: 58%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 12px;
          height: 100%;
        }

        /* Softened Subtle Ambient Glow */
        .card-product-glow {
          position: absolute;
          inset: -10px;
          border-radius: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(36, 139, 255, 0.15) 0%,
            rgba(36, 139, 255, 0.05) 40%,
            transparent 75%
          );
          filter: blur(14px);
          opacity: 0.75;
          pointer-events: none;
          transition: all 300ms ease;
        }

        .catalog-card-v2:hover .card-product-glow {
          opacity: 0.95;
          background: radial-gradient(
            ellipse at center,
            rgba(36, 139, 255, 0.25) 0%,
            rgba(36, 139, 255, 0.09) 40%,
            transparent 75%
          );
          filter: blur(18px);
        }

        /* Render Image */
        .card-render-img {
          position: relative;
          z-index: 2;
          max-height: 325px;
          max-width: 115%;
          width: auto;
          object-fit: contain;
          transform: translateX(16px) scale(1.28);
          transform-origin: center center;
          filter:
            drop-shadow(0 15px 25px rgba(15, 23, 42, 0.14))
            drop-shadow(0 0 15px rgba(36, 139, 255, 0.18));
          transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 300ms ease;
        }

        .catalog-card-v2:hover .card-render-img {
          transform: translateX(16px) scale(1.36) rotate(-1deg);
          filter:
            drop-shadow(0 20px 35px rgba(15, 23, 42, 0.20))
            drop-shadow(0 0 22px rgba(36, 139, 255, 0.35));
        }

        /* Tight Contact Shadow Shifted Right */
        .card-contact-shadow {
          position: absolute;
          bottom: 14px;
          left: 55%;
          transform: translateX(-50%);
          width: 62%;
          height: 4px;
          background: rgba(15, 23, 42, 0.12);
          border-radius: 50%;
          filter: blur(3px);
          z-index: 1;
          pointer-events: none;
          transition: width 300ms ease;
        }

        .catalog-card-v2:hover .card-contact-shadow {
          width: 70%;
        }

        /* Soft Floor Reflection */
        .card-render-shadow {
          position: absolute;
          bottom: 2px;
          left: 55%;
          transform: translateX(-50%);
          width: 84%;
          height: 12px;
          background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.08) 0%, rgba(36, 139, 255, 0.08) 45%, transparent 80%);
          opacity: 0.85;
          border-radius: 50%;
          filter: blur(14px);
          z-index: 1;
          pointer-events: none;
          transition: all 300ms ease;
        }

        .catalog-card-v2:hover .card-render-shadow {
          width: 92%;
          background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.12) 0%, rgba(36, 139, 255, 0.14) 45%, transparent 80%);
          filter: blur(18px);
        }

        /* ========== WHY CHOOSE RDA POWERTECH SECTION ========== */
        .why-choose-section {
          width: 100%;
          max-width: 1320px;
          margin: 48px auto 0;
          padding: 0;
          background: transparent;
        }

        /* Floating Panel Container */
        .why-choose-panel {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 28px;
          padding: 36px 40px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        /* Blue Glow Highlights Centered on Top & Bottom Borders */
        .panel-highlight-top {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 30px;
          background: radial-gradient(ellipse at top, rgba(36, 139, 255, 0.4) 0%, rgba(36, 139, 255, 0.1) 50%, transparent 75%);
          filter: blur(6px);
          pointer-events: none;
        }

        .panel-highlight-top::after {
          content: '';
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #248BFF, transparent);
        }

        .panel-highlight-bottom {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 30px;
          background: radial-gradient(ellipse at bottom, rgba(36, 139, 255, 0.3) 0%, rgba(36, 139, 255, 0.08) 50%, transparent 75%);
          filter: blur(6px);
          pointer-events: none;
        }

        .panel-highlight-bottom::after {
          content: '';
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(36, 139, 255, 0.5), transparent);
        }

        /* Section Header */
        .why-choose-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .why-choose-badge {
          display: block;
          font-family: 'Outfit', 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: #248BFF;
          margin-bottom: 8px;
        }

        .why-choose-title {
          font-family: 'Poppins', 'Outfit', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* Single Horizontal Feature Strip Row */
        .why-choose-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .why-choose-item {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 8px 24px;
          cursor: pointer;
        }

        /* Soft Electric Blue Glow Behind Icon Only */
        .why-choose-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(36, 139, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0.65;
          transition: opacity 300ms ease, background 300ms ease;
        }

        .why-choose-item:hover .why-choose-glow {
          opacity: 1;
          background: radial-gradient(circle, rgba(36, 139, 255, 0.3) 0%, transparent 70%);
        }

        /* Rounded Square Outline Icon Container (56x56px, 14px Radius) */
        .why-choose-icon-box {
          position: relative;
          z-index: 2;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #F1F5F9;
          border: 1px solid rgba(36, 139, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #248BFF;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .why-choose-item:hover .why-choose-icon-box {
          transform: scale(1.08);
          border-color: #248BFF;
          box-shadow: 0 0 25px rgba(36, 139, 255, 0.25);
        }

        .why-choose-icon {
          transition: none;
        }

        /* Feature Title (20px, Poppins 600, Static Heading) */
        .why-choose-heading {
          position: relative;
          z-index: 2;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* Rich Gradient Vertical Divider */
        .why-choose-divider {
          width: 1px;
          height: 64px;
          background: linear-gradient(
            to bottom,
            transparent,
            #E2E8F0,
            transparent
          );
          flex-shrink: 0;
          transition: background 300ms ease;
        }

        .why-choose-item:hover + .why-choose-divider {
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(36, 139, 255, 0.50),
            transparent
          );
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1200px) {
          .catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-choose-strip {
            flex-wrap: wrap;
            gap: 32px;
          }
          .why-choose-divider {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .catalog-grid {
            grid-template-columns: 1fr;
          }
          .catalog-card-v2 {
            height: auto;
            min-height: 290px;
          }
          .catalog-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .why-choose-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .why-choose-panel {
            padding: 32px 20px;
          }
          .why-choose-title {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
