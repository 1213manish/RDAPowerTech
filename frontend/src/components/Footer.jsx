import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BRANDS, COMPANY_DETAILS } from '../data/mockData';

export default function Footer({ setActivePage }) {
  const scrollToTop = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand Info & Logo Image */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => scrollToTop('home')}>
              <img
                src="/logo.png"
                alt="RDA PowerTech Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-desc">
              Authorized part supplier for industrial electrical components, switchgears, drives, contactors & custom solar distribution panels.
            </p>
            <div className="brand-badges">
              <span className="badge">100% Genuine</span>
              <span className="badge">Fast Delivery</span>
              <span className="badge">B2B Supplier</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToTop('home')}>Home</button></li>
              <li><button onClick={() => scrollToTop('products')}>Our Products</button></li>
              <li><button onClick={() => scrollToTop('quotation')}>Request Quotation</button></li>
              <li><button onClick={() => scrollToTop('about')}>About Us</button></li>
              <li><button onClick={() => scrollToTop('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Featured Brands */}
          <div className="footer-col">
            <h4 className="footer-title">Our Brands</h4>
            <ul className="footer-links brand-list">
              {BRANDS.slice(0, 6).map((b, idx) => (
                <li key={idx}>
                  <button onClick={() => scrollToTop('products')}>
                    {b.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <div className="contact-text">
                  <span className="label">Address:</span>
                  <span className="value">
                    {COMPANY_DETAILS.shortAddress}
                  </span>
                </div>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" size={18} />
                <div className="contact-text">
                  <span className="label">Phone:</span>
                  <span className="value">{COMPANY_DETAILS.phoneFormatted}</span>
                </div>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" size={18} />
                <div className="contact-text">
                  <span className="label">Email:</span>
                  <span className="value">{COMPANY_DETAILS.email}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RDA PowerTech. All Rights Reserved. Industrial Electrical Spares.</p>
          <div className="legal-links">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <style>{`
        /* Standardized Footer Top Margin (48px) and Container Alignment */
        .site-footer {
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
          padding: 32px 0 24px;
          margin-top: 0;
        }

        .footer-content {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 2fr;
          gap: 36px;
          margin-bottom: 40px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 16px;
        }

        .footer-logo-img {
          height: 54px;
          width: auto;
          object-fit: contain;
          transition: transform 0.25s ease;
        }

        .footer-brand:hover .footer-logo-img {
          transform: scale(1.03);
        }

        .footer-desc {
          color: #475569;
          font-size: 0.88rem;
          line-height: 1.55;
          margin-bottom: 16px;
          max-width: 320px;
        }

        .brand-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-title {
          font-size: 1.05rem;
          color: #0F172A;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
          font-weight: 700;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: #248BFF;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links button {
          background: transparent;
          border: none;
          color: #475569;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0;
          text-align: left;
        }

        .footer-links button:hover {
          color: #248BFF;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-icon {
          color: #248BFF;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          line-height: 1.45;
        }

        .contact-text .label {
          color: #64748B;
          font-weight: 600;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .contact-text .value {
          color: #0F172A;
          font-weight: 500;
        }

        .footer-bottom {
          border-top: 1px solid #E2E8F0;
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #64748B;
        }

        .legal-links {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
