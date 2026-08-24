import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { useQuoteModal } from '../../context/QuoteContext';

export default function Navbar() {
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');


  const navItems = [
    { name: 'HOME', href: '#', hasDropdown: false },
    { name: 'ABOUT US', href: '/about-us', hasDropdown: false },
    { name: 'PRODUCTS', href: '#products', hasDropdown: true },
    { name: 'BRANDS', href: '#brands', hasDropdown: false },
    { name: 'SERVICES', href: '#services', hasDropdown: false },
    { name: 'INDUSTRIES', href: '#industries', hasDropdown: false },
    { name: 'PRICING', href: '/pricing', hasDropdown: false },
    { name: 'CONTACT US', href: '#contact', hasDropdown: false },
  ];

  const handleNavClick = (e, item) => {
    setActiveTab(item.name);
    if (item.name === 'PRICING') {
      e.preventDefault();
      navigate('/pricing');
      return;
    }
    if (item.name === 'ABOUT US') {
      e.preventDefault();
      navigate('/about-us');
      return;
    }
    if (item.href.startsWith('#')) {
      e.preventDefault();
      if (item.href === '#') {
        if (location.pathname !== '/') {
          navigate('/');
          window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        if (location.pathname !== '/') {
          navigate(`/${item.href}`);
          return;
        }
        const targetEl = document.querySelector(item.href);
        if (targetEl) {
          const headerOffset = 115.5;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* ── Top Information Bar (White) ── */}
      <div className="bg-white border-b border-slate-200">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '7px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, { name: 'HOME', href: '#' })}
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <img
              src={logoImg}
              alt="RDA PowerTech Logo"
              style={{ height: '48.3px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Right: Contact Info (Phone & Email) - Desktop */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '30px', fontSize: '14.2px', fontWeight: 600 }}>
            {/* Phone */}
            <a
              href="tel:+919973015880"
              style={{ display: 'flex', alignItems: 'center', gap: '8.4px', color: '#334155', textDecoration: 'none' }}
              className="hover:text-[#FFB800] transition-colors group"
            >
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '31.5px', height: '31.5px', borderRadius: '50%', background: '#071224' }}
                className="group-hover:!bg-[#FFB800] transition-colors"
              >
                <Phone style={{ width: '14.7px', height: '14.7px', color: 'white' }} />
              </span>
              <span style={{ fontWeight: 700, color: '#1e293b' }}>9973015880</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@rdapowertech.com"
              style={{ display: 'flex', alignItems: 'center', gap: '8.4px', color: '#334155', textDecoration: 'none' }}
              className="hover:text-[#FFB800] transition-colors group"
            >
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '31.5px', height: '31.5px', borderRadius: '50%', background: '#071224' }}
                className="group-hover:!bg-[#FFB800] transition-colors"
              >
                <Mail style={{ width: '14.7px', height: '14.7px', color: 'white' }} />
              </span>
              <span style={{ fontWeight: 700, color: '#1e293b' }}>info@rdapowertech.com</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden" style={{ alignItems: 'center' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ padding: '6.3px', color: '#1e293b', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X style={{ width: '27.3px', height: '27.3px' }} /> : <Menu style={{ width: '27.3px', height: '27.3px' }} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar (Dark Navy) ── */}
      <div style={{ background: '#071224', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', height: '40px' }}>
            {navItems.map((item) => {
              const isActive = item.name === 'PRICING' ? location.pathname === '/pricing' : item.name === 'ABOUT US' ? location.pathname === '/about-us' : (location.pathname === '/' && activeTab === item.name);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4.2px',
                    padding: '0 15px',
                    fontSize: '13.1px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    height: '100%',
                    color: isActive ? '#ffffff' : '#cbd5e1',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#cbd5e1'; }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown style={{ width: '13.65px', height: '13.65px', color: '#94a3b8', strokeWidth: 2.5 }} />
                  )}
                  {/* Active Yellow Bottom Indicator */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '10.5px',
                      right: '10.5px',
                      height: '3.15px',
                      background: '#FFB800',
                      borderRadius: '2px 2px 0 0',
                    }} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: GET A QUOTE Button */}
          <div className="hidden md:flex" style={{ alignItems: 'center' }}>
            <button
              onClick={() => openQuoteModal()}
              style={{
                background: '#FFB800',
                color: '#071224',
                fontWeight: 700,
                fontSize: '12.6px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '6.3px 19px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e6a600'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFB800'; }}
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile view bar summary */}
          <div className="flex md:hidden" style={{ alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10.5px 0' }}>
            <a
              href="tel:+919973015880"
              style={{ display: 'flex', alignItems: 'center', gap: '6.3px', fontSize: '12.6px', fontWeight: 600, color: '#e2e8f0', textDecoration: 'none' }}
            >
              <Phone style={{ width: '14.7px', height: '14.7px', color: '#FFB800' }} />
              <span>9973015880</span>
            </a>
            <button
              onClick={() => openQuoteModal()}
              style={{ background: '#FFB800', color: '#071224', fontWeight: 700, fontSize: '12.6px', textTransform: 'uppercase', padding: '6.3px 17px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div style={{ background: '#071224', borderTop: '1px solid #1e293b', padding: '12px 16px 24px' }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleNavClick(e, item);
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                marginBottom: '4px',
                background: (item.name === 'PRICING' ? location.pathname === '/pricing' : item.name === 'ABOUT US' ? location.pathname === '/about-us' : activeTab === item.name) ? '#FFB800' : 'transparent',
                color: (item.name === 'PRICING' ? location.pathname === '/pricing' : item.name === 'ABOUT US' ? location.pathname === '/about-us' : activeTab === item.name) ? '#071224' : '#e2e8f0',
              }}
            >
              <span>{item.name}</span>
              {item.hasDropdown && <ChevronDown style={{ width: '16px', height: '16px' }} />}
            </a>
          ))}

          <div style={{ paddingTop: '12px', marginTop: '8px', borderTop: '1px solid #1e293b' }}>
            <a href="tel:+919973015880" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', textDecoration: 'none', fontSize: '14px', marginBottom: '12px' }}>
              <Phone style={{ width: '16px', height: '16px', color: '#FFB800' }} />
              <span>9973015880</span>
            </a>
            <a href="mailto:rdapowertech@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>
              <Mail style={{ width: '16px', height: '16px', color: '#FFB800' }} />
              <span>rdapowertech@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
