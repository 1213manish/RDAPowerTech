import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Truck, Award, Headphones, ArrowUpRight, FileText, FileCheck, Headset } from 'lucide-react';
import TrustedBrandsShowcase from '../components/TrustedBrandsShowcase';
import ProductCatalogSection from '../components/ProductCatalogSection';

export default function Home({ setActivePage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-effects">
          <div className="hero-bg-image" />
          <div className="hero-fade-left" />
          <div className="hero-fade-bottom" />
          <div className="hero-fade-top" />
          <div className="hero-fade-right" />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={14} className="badge-icon" />
              <span>AUTHORIZED INDUSTRIAL DISTRIBUTOR</span>
            </div>

            <h1 className="hero-title">
              Precision Industrial <br />
              <span className="gradient-text">Electrical Solutions</span>
            </h1>

            <p className="hero-subtitle">
              Sourcing & supplying top-tier circuit breakers, switchgears, drives, contactors,
              and custom solar distribution panels for industrial applications.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={() => setActivePage('products')}>
                <span>Products</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => setActivePage('quotation')}>
                <span>Get Quotation</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">1000+</span>
                <span className="stat-label">Products Listed</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Genuine Guarantee</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Global Brands</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value">50k+</span>
                <span className="stat-label">Parts Supplied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Industry Leaders Brand Showcase Section */}
      <TrustedBrandsShowcase />

      {/* Premium Product Catalog Section */}
      <ProductCatalogSection setActivePage={setActivePage} />

      {/* Compact Enterprise B2B Call-To-Action (CTA) Section */}
      <section className="cta-section-v2">
        <div className="cta-container-v2">
          <div className="cta-glass-panel">
            {/* Subtle Blue Accent Highlights Centered on Top & Bottom Edges */}
            <div className="cta-panel-highlight-top" />
            <div className="cta-panel-highlight-bottom" />
            <div className="cta-grid-pattern" />

            <div className="cta-split-layout">
              {/* LEFT SIDE (50%) */}
              <div className="cta-left-col">
                {/* 44px Poppins 700 Title (2 Lines Only) */}
                <h2 className="cta-title-v2">
                  Need a Custom Part Quote <br />
                  for <span className="cta-highlight-blue">Your Project</span>?
                </h2>

                {/* Small Blue Accent Line */}
                <div className="cta-accent-line" />

                {/* Paragraph Text (Shorter 2-Line Copy) */}
                <p className="cta-paragraph-v2">
                  Upload your Bill of Materials (BOM) or browse our catalog to receive a fast, accurate quotation.
                </p>
              </div>

              {/* RIGHT SIDE (50%) - Aligned with First Line of Heading */}
              <div className="cta-right-col">
                <div className="cta-right-glow" />

                {/* Balanced CTA Button (340px x 60px) */}
                <button
                  className="cta-btn-primary-v2"
                  onClick={() => setActivePage('quotation')}
                >
                  <span>Generate Quotation Now</span>
                  <ArrowRight size={20} className="cta-arrow-icon" />
                </button>

                {/* Three Inline Trust Indicators */}
                <div className="cta-trust-strip">
                  <div className="cta-trust-item">
                    <ShieldCheck size={15} className="cta-trust-icon" />
                    <span>Fast & Accurate</span>
                  </div>

                  <span className="cta-trust-dot">•</span>

                  <div className="cta-trust-item">
                    <FileCheck size={15} className="cta-trust-icon" />
                    <span>Secure & Reliable</span>
                  </div>

                  <span className="cta-trust-dot">•</span>

                  <div className="cta-trust-item">
                    <Headset size={15} className="cta-trust-icon" />
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          background-color: #FFFFFF;
          overflow-x: hidden;
        }

        /* Hero Styles */
        .hero-section {
          position: relative;
          padding: 60px 0 80px;
          min-height: 75vh;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          overflow: hidden;
        }

        .hero-bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Hero Render Graphic - Adjusted Scale (75%) & Position (-3% X, -20px Y) */
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/hero-products.png');
          background-size: 75% auto;
          background-position: right center;
          transform: translate(-3%, -20px);
          background-repeat: no-repeat;
          opacity: 1;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        /* Light Soft Fade Overlays */
        .hero-fade-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 44%;
          background: linear-gradient(to right, #FFFFFF 50%, rgba(255, 255, 255, 0.6) 80%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-fade-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 10%;
          background: linear-gradient(to top, #FFFFFF 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-fade-top {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 8%;
          background: linear-gradient(to bottom, #FFFFFF 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-fade-right {
          display: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Left-Aligned Hero Content */
        .hero-content {
          max-width: 640px;
          margin: 0;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(36, 139, 255, 0.08);
          border: 1px solid rgba(36, 139, 255, 0.25);
          border-radius: 100px;
          color: #248BFF;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .badge-icon {
          color: #248BFF;
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.12;
          color: #0F172A;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #248BFF 0%, #38BDF8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.18rem;
          line-height: 1.65;
          color: #475569;
          max-width: 600px;
          margin: 0 0 28px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #248BFF 0%, #0D7DFF 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(36, 139, 255, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(36, 139, 255, 0.5);
          background: linear-gradient(135deg, #38BDF8 0%, #248BFF 100%);
        }

        .btn-secondary {
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        .btn-secondary:hover {
          background: #F1F5F9;
          border-color: #248BFF;
          color: #248BFF;
          transform: translateY(-2px);
        }

        /* Left-Aligned Horizontal Stats Glass Strip */
        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 28px;
          padding: 20px 28px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
          max-width: 640px;
          margin: 0;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 500;
          margin-top: 4px;
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background: #E2E8F0;
        }

        /* ========== COMPACT ENTERPRISE B2B CTA SECTION ========== */
        .cta-section-v2 {
          width: 100%;
          padding: 48px 0;
          background: #FFFFFF;
          position: relative;
        }

        .cta-container-v2 {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cta-glass-panel {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 28px;
          padding: 36px 40px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        /* Subtle Blue Ambient Glow & Border Highlights */
        .cta-panel-highlight-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #248BFF, transparent);
          pointer-events: none;
        }

        .cta-panel-highlight-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(36, 139, 255, 0.6), transparent);
          pointer-events: none;
        }

        .cta-grid-pattern {
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 220px;
          height: 220px;
          background-image: radial-gradient(rgba(36, 139, 255, 0.12) 1.5px, transparent 1.5px);
          background-size: 16px 16px;
          pointer-events: none;
          opacity: 0.7;
        }

        /* Connected Split Layout */
        .cta-split-layout {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        /* ---- LEFT COLUMN (50%) ---- */
        .cta-left-col {
          flex: 1;
          max-width: 620px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* 56x56px Rounded Square Icon Container */
        .cta-icon-box {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #F1F5F9;
          border: 1px solid rgba(36, 139, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #248BFF;
          margin-bottom: 16px;
        }

        .cta-icon-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(36, 139, 255, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        /* 44px Poppins 700 Heading */
        .cta-title-v2 {
          font-family: 'Poppins', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }

        .cta-highlight-blue {
          color: #248BFF;
        }

        .cta-accent-line {
          width: 50px;
          height: 3px;
          background: #248BFF;
          border-radius: 2px;
          margin-bottom: 14px;
          box-shadow: 0 0 10px rgba(36, 139, 255, 0.4);
        }

        /* Shorter 2-3 Line Paragraph Copy */
        .cta-paragraph-v2 {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          max-width: 520px;
          margin: 0;
        }

        /* ---- RIGHT COLUMN (50%) ---- */
        .cta-right-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          margin-top: 0;
          padding-right: 8%;
          transform: translateY(60%);
        }

        .cta-right-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          top: -20px;
          right: 30px;
          background: radial-gradient(circle, rgba(36, 139, 255, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Balanced CTA Button */
        .cta-btn-primary-v2 {
          position: relative;
          z-index: 2;
          width: 340px;
          max-width: 100%;
          height: 60px;
          border-radius: 14px;
          background: linear-gradient(90deg, #248BFF, #0D7DFF);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(36, 139, 255, 0.3);
          transition: transform 350ms ease-out, box-shadow 350ms ease-out, background 350ms ease-out;
        }

        .cta-btn-primary-v2:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 35px rgba(36, 139, 255, 0.45);
          background: linear-gradient(90deg, #0D7DFF, #248BFF);
        }

        .cta-arrow-icon {
          transition: transform 350ms ease-out;
        }

        .cta-btn-primary-v2:hover .cta-arrow-icon {
          transform: translateX(6px);
        }

        /* Three Inline Trust Indicators */
        .cta-trust-strip {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 340px;
          gap: 12px;
          margin-top: 18px;
        }

        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          white-space: nowrap;
        }

        .cta-trust-icon {
          color: #248BFF;
          flex-shrink: 0;
        }

        .cta-trust-dot {
          color: #CBD5E1;
          font-size: 13px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .hero-content {
            max-width: 580px;
          }
          .hero-bg-image {
            background-size: 77% auto;
            background-position: right center;
            opacity: 0.85;
          }
          .cta-title-v2 {
            font-size: 36px;
          }
          .cta-paragraph-v2 {
            font-size: 15px;
          }
          .cta-right-col {
            margin-top: 60px;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            padding: 40px 0 50px;
          }
          .hero-stats {
            flex-wrap: wrap;
            gap: 16px;
          }
          .stat-divider {
            display: none;
          }
          .cta-glass-panel {
            padding: 36px 28px;
          }
          .cta-split-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .cta-left-col {
            max-width: 100%;
          }
          .cta-right-col {
            width: 100%;
            align-items: flex-start;
            margin-top: 0;
            padding-right: 0;
          }
          .cta-btn-primary-v2 {
            width: 100%;
          }
          .cta-trust-strip {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
