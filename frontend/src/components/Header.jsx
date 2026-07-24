import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ activePage, setActivePage, quotationCartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'quotation', label: 'Quotation Generation' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <img 
            src="/logo.png" 
            alt="RDA PowerTech Logo - Powering Industry. Delivering Trust." 
            className="header-logo-img"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Quotation Cart */}
        <div className="header-actions">
          <button 
            className="quote-cart-btn" 
            onClick={() => handleNavClick('quotation')}
            title="View Quotation Cart"
          >
            <ShoppingBag size={18} />
            <span>Quotation</span>
            {quotationCartCount > 0 && (
              <span className="cart-badge">{quotationCartCount}</span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 82px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #E2E8F0;
          padding: 0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transition: background 0.3s ease;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 82px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          flex-shrink: 0;
        }

        .header-logo-img {
          height: 56px;
          width: auto;
          object-fit: contain;
          transition: transform 0.25s ease;
        }

        .brand-logo:hover .header-logo-img {
          transform: scale(1.03);
        }

        /* Centered Desktop Navigation Bar between Logo and Quotation Cart Button */
        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
          height: 100%;
          flex: 1;
          margin: 0 32px;
        }

        .nav-link {
          background: none;
          border: none;
          color: #475569;
          font-family: var(--font-outfit);
          font-weight: 600;
          font-size: 19px;
          height: 100%;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding: 0 4px;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #0F172A;
        }

        .nav-link.active {
          color: #248BFF;
          font-weight: 700;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          border-radius: 3px 3px 0 0;
          box-shadow: 0 -2px 8px rgba(36, 139, 255, 0.4);
        }

        .header-actions {
          display: flex;
          align-items: center;
          height: 100%;
          flex-shrink: 0;
        }

        .quote-cart-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 44px;
          padding: 0 20px;
          border-radius: 100px;
          background: rgba(36, 139, 255, 0.08);
          border: 1px solid rgba(36, 139, 255, 0.3);
          color: #248BFF;
          font-family: var(--font-outfit);
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .quote-cart-btn:hover {
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          color: #FFFFFF;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(36, 139, 255, 0.35);
        }

        .cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #EF4444;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #FFFFFF;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #0F172A;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: #475569;
          font-family: var(--font-outfit);
          font-size: 1rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav-link.active {
          background: rgba(36, 139, 255, 0.08);
          color: #248BFF;
          font-weight: 700;
        }

        @media (max-width: 868px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
