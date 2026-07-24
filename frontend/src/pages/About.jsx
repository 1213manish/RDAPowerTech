import React from 'react';
import { 
  User, 
  Building2, 
  Award, 
  Zap, 
  ShieldCheck, 
  Globe2, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase,
  Target,
  Sparkles,
  Layers,
  FileCheck,
  Headset,
  ArrowUpRight
} from 'lucide-react';

export default function About({ setActivePage }) {
  return (
    <div className="about-page">
      {/* ==========================================
          SECTION 1: ABOUT THE FOUNDER
      ========================================== */}
      <section className="about-section section-founder">
        <div className="about-container">
          <div className="founder-grid">
            {/* Left: Founder Visual Container */}
            <div className="founder-visual-card">
              <div className="founder-visual-inner">
                <div className="founder-avatar-holder">
                  <User size={72} className="founder-avatar-icon" />
                  <span className="founder-avatar-label">FOUNDER PORTRAIT PLACEHOLDER</span>
                </div>
                <div className="founder-badge-pill">
                  <Sparkles size={14} className="accent-sparkle" />
                  <span>FOUNDER & MANAGING DIRECTOR</span>
                </div>
              </div>
              <div className="founder-quote-box">
                <p className="founder-quote-text">
                  "[FOUNDER VISION STATEMENT PLACEHOLDER: Driving industrial innovation through uncompromised component quality and engineering reliability.]"
                </p>
                <div className="founder-signature-line">
                  <span className="signature-name">[FOUNDER NAME PLACEHOLDER]</span>
                  <span className="signature-title">Founder & CEO, RDA PowerTech</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Profile & Vision Structure */}
            <div className="founder-content">
              <div className="section-badge">
                <User size={14} className="badge-icon" />
                <span>FOUNDER & LEADERSHIP</span>
              </div>

              <h1 className="section-title-sora">
                About the <span className="text-primary-gradient">Founder</span>
              </h1>

              <div className="structure-text-block">
                <p className="lead-paragraph">
                  [FOUNDER INTRODUCTION & EXECUTIVE SUMMARY PLACEHOLDER - Detailing the founding story, industry background, and vision for RDA PowerTech in industrial power & automation.]
                </p>
                <p className="body-paragraph">
                  [FOUNDER LEADERSHIP & PHILOSOPHY PLACEHOLDER - Outlining how leadership values shape component sourcing, global brand partnerships, and client-first engineering delivery.]
                </p>
              </div>

              {/* Founder Highlight Metrics */}
              <div className="founder-metrics-grid">
                <div className="metric-card">
                  <span className="metric-value">20+</span>
                  <span className="metric-label">[YEARS INDUSTRY EXP.]</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">1,500+</span>
                  <span className="metric-label">[PROJECTS EXECUTED]</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">15+</span>
                  <span className="metric-label">[GLOBAL OEM BRAND PARTNERS]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: OUR CLIENTS
      ========================================== */}
      <section className="about-section section-clients">
        <div className="about-container">
          <div className="section-header-center">
            <div className="section-badge">
              <Building2 size={14} className="badge-icon" />
              <span>OUR CLIENTELE & TRUST</span>
            </div>
            <h2 className="section-title-sora">
              Trusted by <span className="text-primary-gradient">Industry Leaders</span>
            </h2>
            <p className="section-subtitle">
              [OUR CLIENTS SECTION SUBTITLE PLACEHOLDER - Highlighting key corporate, EPC, and manufacturing client partnerships.]
            </p>
          </div>

          {/* Client Filter Pills (Layout Wireframe) */}
          <div className="client-filter-bar">
            <span className="filter-pill active">[ALL SECTORS]</span>
            <span className="filter-pill">[POWER & UTILITIES]</span>
            <span className="filter-pill">[MANUFACTURING & OEM]</span>
            <span className="filter-pill">[EPC CONTRACTORS]</span>
            <span className="filter-pill">[SOLAR & RENEWABLES]</span>
          </div>

          {/* Client Logos Grid */}
          <div className="clients-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="client-logo-card">
                <div className="client-logo-placeholder">
                  <Building2 size={28} className="client-icon" />
                  <span className="client-placeholder-name">[CLIENT BRAND LOGO #{item}]</span>
                </div>
                <div className="client-card-meta">
                  <span className="client-sector-tag">[SECTOR #{item}]</span>
                  <span className="client-tier-pill">[PARTNER SINCE 2021]</span>
                </div>
              </div>
            ))}
          </div>

          {/* Client Footprint Strip */}
          <div className="client-footprint-strip">
            <div className="footprint-item">
              <span className="footprint-num">500+</span>
              <span className="footprint-text">[CORPORATE CLIENTS SERVED]</span>
            </div>
            <div className="footprint-divider" />
            <div className="footprint-item">
              <span className="footprint-num">99.4%</span>
              <span className="footprint-text">[ON-TIME BOM DELIVERY RATE]</span>
            </div>
            <div className="footprint-divider" />
            <div className="footprint-item">
              <span className="footprint-num">100%</span>
              <span className="footprint-text">[GENUINE OEM GUARANTEE]</span>
            </div>
            <div className="footprint-divider" />
            <div className="footprint-item">
              <span className="footprint-num">24/7</span>
              <span className="footprint-text">[ENGINEERING SUPPORT]</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: WHO WE ARE + OUR CORE VALUES
      ========================================== */}
      <section className="about-section section-who-we-are">
        <div className="about-container">
          <div className="section-header-center">
            <div className="section-badge">
              <Target size={14} className="badge-icon" />
              <span>COMPANY PROFILE & ETHOS</span>
            </div>
            <h2 className="section-title-sora">
              Who We Are & <span className="text-primary-gradient">Our Core Values</span>
            </h2>
            <p className="section-subtitle">
              [WHO WE ARE & VALUES SUBTITLE PLACEHOLDER - Engineering precision, supply chain integrity, and customer commitment.]
            </p>
          </div>

          <div className="who-values-grid">
            {/* Left: Who We Are Card */}
            <div className="who-we-are-card">
              <div className="who-header">
                <div className="who-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3>[WHO WE ARE - OVERVIEW]</h3>
              </div>

              <div className="who-body">
                <p className="who-p">
                  [WHO WE ARE PARAGRAPH 1 PLACEHOLDER - Describing RDA PowerTech as an authorized distributor of LV/MV electrical components, circuit protection, and industrial automation products.]
                </p>
                <p className="who-p">
                  [WHO WE ARE PARAGRAPH 2 PLACEHOLDER - Highlighting end-to-end BOM fulfillment, technical consultation, and global procurement partnerships.]
                </p>

                <div className="who-tags">
                  <span className="who-tag-pill">
                    <CheckCircle2 size={14} /> [AUTHORIZED DISTRIBUTOR]
                  </span>
                  <span className="who-tag-pill">
                    <CheckCircle2 size={14} /> [END-TO-END BOM SOURCING]
                  </span>
                  <span className="who-tag-pill">
                    <CheckCircle2 size={14} /> [ENGINEERING INTEGRITY]
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Core Values Grid */}
            <div className="core-values-container">
              <div className="values-grid">
                {/* Value 1 */}
                <div className="value-card">
                  <div className="value-icon-box">
                    <ShieldCheck size={24} />
                  </div>
                  <h4>[1. UNCOMPROMISING QUALITY]</h4>
                  <p>[CORE VALUE 1 DESCRIPTION PLACEHOLDER - 100% genuine components direct from verified global manufacturers.]</p>
                </div>

                {/* Value 2 */}
                <div className="value-card">
                  <div className="value-icon-box">
                    <Zap size={24} />
                  </div>
                  <h4>[2. ENGINEERING SPEED]</h4>
                  <p>[CORE VALUE 2 DESCRIPTION PLACEHOLDER - Fast BOM quotes, rapid inventory turnaround, and express dispatch.]</p>
                </div>

                {/* Value 3 */}
                <div className="value-card">
                  <div className="value-icon-box">
                    <Award size={24} />
                  </div>
                  <h4>[3. COMPETITIVE B2B PRICING]</h4>
                  <p>[CORE VALUE 3 DESCRIPTION PLACEHOLDER - Optimized bulk pricing models tailored for OEMs & contractors.]</p>
                </div>

                {/* Value 4 */}
                <div className="value-card">
                  <div className="value-icon-box">
                    <Headset size={24} />
                  </div>
                  <h4>[4. TECHNICAL SUPPORT]</h4>
                  <p>[CORE VALUE 4 DESCRIPTION PLACEHOLDER - Dedicated application engineers assisting with part cross-referencing.]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: PAST COLLABORATIONS & SECTORS SERVED
      ========================================== */}
      <section className="about-section section-collaborations">
        <div className="about-container">
          <div className="section-header-center">
            <div className="section-badge">
              <Briefcase size={14} className="badge-icon" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="section-title-sora">
              Past Collaborations & <span className="text-primary-gradient">Sectors Served</span>
            </h2>
            <p className="section-subtitle">
              [PAST COLLABORATIONS SUBTITLE PLACEHOLDER - Proven track record across key industrial, utility, and renewable sectors.]
            </p>
          </div>

          <div className="collab-sectors-grid">
            {/* Sector 1 */}
            <div className="sector-card">
              <div className="sector-card-top">
                <div className="sector-icon-box">
                  <Globe2 size={26} />
                </div>
                <span className="sector-metric-badge">[1,500+ UNITS]</span>
              </div>
              <h3 className="sector-title">[SOLAR & RENEWABLE GRID INTEGRATION]</h3>
              <p className="sector-desc">
                [SECTOR 1 DESCRIPTION PLACEHOLDER - Supplying IP65 solar combiner boxes, high-voltage fuses, and AC/DC isolator switchgears for utility-scale solar projects.]
              </p>
              <div className="sector-tags">
                <span className="sector-tag">[COMBINER BOXES]</span>
                <span className="sector-tag">[DC ISOLATORS]</span>
                <span className="sector-tag">[SOLAR FUSES]</span>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="sector-card">
              <div className="sector-card-top">
                <div className="sector-icon-box">
                  <Factory size={26} />
                </div>
                <span className="sector-metric-badge">[250+ LINES]</span>
              </div>
              <h3 className="sector-title">[INDUSTRIAL PLANT AUTOMATION]</h3>
              <p className="sector-desc">
                [SECTOR 2 DESCRIPTION PLACEHOLDER - Delivering Variable Frequency Drives (VFDs), DIN-rail power supplies, and PLCs for high-speed manufacturing lines.]
              </p>
              <div className="sector-tags">
                <span className="sector-tag">[VFD DRIVES]</span>
                <span className="sector-tag">[POWER SUPPLIES]</span>
                <span className="sector-tag">[PLC AUTOMATION]</span>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="sector-card">
              <div className="sector-card-top">
                <div className="sector-icon-box">
                  <Zap size={26} />
                </div>
                <span className="sector-metric-badge">[10,000+ BREAKERS]</span>
              </div>
              <h3 className="sector-title">[LV & MV SWITCHGEAR ASSEMBLY]</h3>
              <p className="sector-desc">
                [SECTOR 3 DESCRIPTION PLACEHOLDER - Partnering with switchgear panel builders to supply Air Circuit Breakers (ACB), MCCBs, and busbar distribution components.]
              </p>
              <div className="sector-tags">
                <span className="sector-tag">[AIR CIRCUIT BREAKERS]</span>
                <span className="sector-tag">[MCCB]</span>
                <span className="sector-tag">[PANEL SWITCHGEAR]</span>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="sector-card">
              <div className="sector-card-top">
                <div className="sector-icon-box">
                  <Building2 size={26} />
                </div>
                <span className="sector-metric-badge">[100+ OEM CONTRACTS]</span>
              </div>
              <h3 className="sector-title">[OEM MACHINE BUILDER SOLUTIONS]</h3>
              <p className="sector-desc">
                [SECTOR 4 DESCRIPTION PLACEHOLDER - Long-term component supply contracts providing contactors, overload relays, and pilot controls for machinery OEMs.]
              </p>
              <div className="sector-tags">
                <span className="sector-tag">[CONTACTORS]</span>
                <span className="sector-tag">[OVERLOAD RELAYS]</span>
                <span className="sector-tag">[OEM SUPPLY]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: CONTACT CTA
      ========================================== */}
      <section className="about-section section-contact-cta">
        <div className="about-container">
          <div className="cta-glass-card">
            {/* Blue Ambient Glow Line Highlights */}
            <div className="cta-highlight-top" />
            <div className="cta-highlight-bottom" />
            <div className="cta-grid-bg" />

            <div className="cta-inner-layout">
              <div className="cta-text-col">
                <h2 className="cta-title-sora">
                  Ready to Partner with <br />
                  <span className="text-primary-gradient">RDA PowerTech</span>?
                </h2>
                <p className="cta-subtitle-manrope">
                  [CONTACT CTA SUBTITLE PLACEHOLDER - Connect with our engineering sales team to request component quotations, bulk BOM pricing, or custom technical solutions.]
                </p>
              </div>

              <div className="cta-action-col">
                <div className="cta-buttons">
                  <button 
                    className="btn btn-primary-about"
                    onClick={() => setActivePage('quotation')}
                  >
                    <span>[REQUEST A QUOTATION]</span>
                    <ArrowRight size={18} />
                  </button>
                  <button 
                    className="btn btn-secondary-about"
                    onClick={() => setActivePage('contact')}
                  >
                    <span>[CONTACT SALES TEAM]</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                {/* Trust Strip */}
                <div className="cta-trust-strip">
                  <div className="trust-item">
                    <ShieldCheck size={15} className="trust-icon" />
                    <span>[FAST & ACCURATE]</span>
                  </div>
                  <span className="trust-dot">•</span>
                  <div className="trust-item">
                    <FileCheck size={15} className="trust-icon" />
                    <span>[100% GENUINE]</span>
                  </div>
                  <span className="trust-dot">•</span>
                  <div className="trust-item">
                    <Headset size={15} className="trust-icon" />
                    <span>[EXPERT SUPPORT]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          GLOBAL PAGE STYLES (MATCHING DESIGN SYSTEM)
      ========================================== */}
      <style>{`
        /* Core Colors & Typography Specs */
        .about-page {
          background-color: #F8FAFC;
          color: #0F172A;
          font-family: 'Manrope', sans-serif;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .about-section {
          padding: 80px 0;
          position: relative;
        }

        /* Typography Helper Classes */
        .section-title-sora {
          font-family: 'Sora', sans-serif;
          font-size: 2.6rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1.05rem;
          color: #64748B;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .text-primary-gradient {
          background: linear-gradient(135deg, #2F80FF 0%, #248BFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Badge Pills */
        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(47, 128, 255, 0.08);
          border: 1px solid rgba(47, 128, 255, 0.2);
          border-radius: 100px;
          color: #2F80FF;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        .badge-icon {
          color: #2F80FF;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 56px;
        }

        /* ==========================================
           SECTION 1: ABOUT THE FOUNDER STYLES
        ========================================== */
        .section-founder {
          padding-top: 60px;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 56px;
          align-items: stretch;
        }

        .founder-visual-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 20px 40px -15px rgba(47, 128, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .founder-visual-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2F80FF, #FFD233);
        }

        .founder-visual-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .founder-avatar-holder {
          width: 140px;
          height: 140px;
          border-radius: 24px;
          background: #F1F5F9;
          border: 2px dashed rgba(47, 128, 255, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #2F80FF;
          margin-bottom: 24px;
          padding: 16px;
          text-align: center;
        }

        .founder-avatar-label {
          font-size: 10px;
          font-weight: 700;
          color: #64748B;
          margin-top: 8px;
          letter-spacing: 0.05em;
        }

        .founder-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #FEF08A;
          border: 1px solid #FDE047;
          border-radius: 100px;
          color: #854D0E;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .accent-sparkle {
          color: #D97706;
        }

        .founder-quote-box {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #E2E8F0;
        }

        .founder-quote-text {
          font-style: italic;
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .founder-signature-line {
          display: flex;
          flex-direction: column;
        }

        .signature-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #0F172A;
        }

        .signature-title {
          font-size: 0.85rem;
          color: #64748B;
        }

        .founder-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .structure-text-block {
          margin: 24px 0 36px;
        }

        .lead-paragraph {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .body-paragraph {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748B;
        }

        .founder-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .metric-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 20px 16px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
          transition: transform 0.25s ease;
        }

        .metric-card:hover {
          transform: translateY(-2px);
          border-color: #2F80FF;
        }

        .metric-value {
          display: block;
          font-family: 'Sora', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #2F80FF;
          line-height: 1.2;
        }

        .metric-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
          margin-top: 4px;
          display: block;
          letter-spacing: 0.03em;
        }

        /* ==========================================
           SECTION 2: OUR CLIENTS STYLES
        ========================================== */
        .client-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-pill {
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill.active,
        .filter-pill:hover {
          background: #2F80FF;
          color: #FFFFFF;
          border-color: #2F80FF;
          box-shadow: 0 4px 14px rgba(47, 128, 255, 0.25);
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .client-logo-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 150px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .client-logo-card:hover {
          transform: translateY(-3px);
          border-color: #2F80FF;
          box-shadow: 0 10px 25px rgba(47, 128, 255, 0.1);
        }

        .client-logo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #2F80FF;
        }

        .client-placeholder-name {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.02em;
        }

        .client-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-top: 12px;
          border-top: 1px solid #F1F5F9;
        }

        .client-sector-tag {
          font-size: 10px;
          font-weight: 700;
          color: #64748B;
        }

        .client-tier-pill {
          font-size: 10px;
          font-weight: 600;
          color: #2F80FF;
          background: rgba(47, 128, 255, 0.08);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .client-footprint-strip {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 28px 36px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
        }

        .footprint-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footprint-num {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #0F172A;
        }

        .footprint-text {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }

        .footprint-divider {
          width: 1px;
          height: 36px;
          background: #E2E8F0;
        }

        /* ==========================================
           SECTION 3: WHO WE ARE & CORE VALUES STYLES
        ========================================== */
        .who-values-grid {
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 40px;
          align-items: start;
        }

        .who-we-are-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
        }

        .who-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .who-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(47, 128, 255, 0.1);
          color: #2F80FF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .who-header h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0F172A;
        }

        .who-p {
          font-size: 0.96rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 16px;
        }

        .who-tags {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #F1F5F9;
        }

        .who-tag-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          color: #0F172A;
          background: #F8FAFC;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
        }

        .who-tag-pill svg {
          color: #2F80FF;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .value-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .value-card:hover {
          transform: translateY(-3px);
          border-color: #2F80FF;
          box-shadow: 0 12px 28px rgba(47, 128, 255, 0.1);
        }

        .value-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(47, 128, 255, 0.08);
          color: #2F80FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .value-card h4 {
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 10px;
        }

        .value-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748B;
        }

        /* ==========================================
           SECTION 4: PAST COLLABORATIONS STYLES
        ========================================== */
        .collab-sectors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .sector-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
        }

        .sector-card:hover {
          transform: translateY(-4px);
          border-color: #2F80FF;
          box-shadow: 0 16px 36px rgba(47, 128, 255, 0.12);
        }

        .sector-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sector-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: #F1F5F9;
          color: #2F80FF;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #E2E8F0;
        }

        .sector-metric-badge {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #2F80FF;
          background: rgba(47, 128, 255, 0.08);
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(47, 128, 255, 0.2);
        }

        .sector-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .sector-desc {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #64748B;
          margin-bottom: 24px;
        }

        .sector-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
        }

        .sector-tag {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* ==========================================
           SECTION 5: CONTACT CTA STYLES
        ========================================== */
        .section-contact-cta {
          padding-bottom: 100px;
        }

        .cta-glass-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 56px 48px;
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        .cta-highlight-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2F80FF, transparent);
        }

        .cta-highlight-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFD233, transparent);
        }

        .cta-grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(47, 128, 255, 0.08) 1.5px, transparent 1.5px);
          background-size: 20px 20px;
          pointer-events: none;
          opacity: 0.6;
        }

        .cta-inner-layout {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .cta-text-col {
          max-width: 600px;
        }

        .cta-title-sora {
          font-family: 'Sora', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .cta-subtitle-manrope {
          font-size: 1rem;
          line-height: 1.65;
          color: #475569;
        }

        .cta-action-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 20px;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-primary-about {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 14px;
          background: linear-gradient(135deg, #2F80FF 0%, #0D7DFF 100%);
          color: #FFFFFF;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(47, 128, 255, 0.35);
          transition: all 0.25s ease;
        }

        .btn-primary-about:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(47, 128, 255, 0.45);
        }

        .btn-secondary-about {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 14px;
          background: #FFFFFF;
          color: #0F172A;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: 1px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-secondary-about:hover {
          background: #F1F5F9;
          border-color: #2F80FF;
          color: #2F80FF;
          transform: translateY(-2px);
        }

        .cta-trust-strip {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #64748B;
        }

        .trust-icon {
          color: #2F80FF;
        }

        .trust-dot {
          color: #CBD5E1;
          font-size: 12px;
        }

        /* ==========================================
           RESPONSIVE BREAKPOINTS
        ========================================== */
        @media (max-width: 1024px) {
          .founder-grid {
            grid-template-columns: 1fr;
          }
          .founder-visual-card {
            max-width: 440px;
            margin: 0 auto;
          }
          .who-values-grid {
            grid-template-columns: 1fr;
          }
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cta-inner-layout {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-action-col {
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .collab-sectors-grid,
          .values-grid {
            grid-template-columns: 1fr;
          }
          .client-footprint-strip {
            flex-direction: column;
            gap: 20px;
          }
          .footprint-divider {
            display: none;
          }
          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary-about,
          .btn-secondary-about {
            width: 100%;
            justify-content: center;
          }
          .section-title-sora {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
