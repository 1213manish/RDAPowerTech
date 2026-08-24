import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function FloatingWidgets() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isVisible = showTooltip || isHovered;

  useEffect(() => {
    // Show first tooltip 3s after page load to grab immediate attention
    const initialTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 3000);

    // Repeat cycle: every 13s total (10s hidden + 3s visible)
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 13000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const buttons = [
    {
      href: 'tel:+919973015880',
      bg: '#0066CC',
      bgHover: '#0052a3',
      icon: <Phone style={{ width: '18px', height: '18px', fill: 'white', color: 'transparent', flexShrink: 0 }} />,
      label: 'Call Now',
      title: 'Call Now',
    },
    {
      href: 'mailto:info@rdapowertech.com',
      bg: '#EE4B2B',
      bgHover: '#d63f21',
      icon: <Mail style={{ width: '18px', height: '18px', color: 'white', flexShrink: 0 }} />,
      label: 'Mail Us',
      title: 'Email Us',
    },
  ];

  return (
    <>
      {/* ── Fixed Right Side Floating Action Buttons (Desktop Only) ── */}
      <div style={{
        position: 'fixed',
        right: 0,
        top: '33%',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
      }}
      className="hidden lg:flex"
      >
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href}
            target={btn.target}
            rel={btn.rel}
            title={btn.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: btn.bg,
              color: '#ffffff',
              padding: '14px 14px',
              borderRadius: '8px 0 0 8px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              minWidth: '44px',
              minHeight: '50px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = btn.bgHover;
              e.currentTarget.style.transform = 'translateX(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = btn.bg;
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            {btn.icon}
            <span style={{ fontWeight: 700, fontSize: '11px', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {btn.label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Fixed Bottom Right WhatsApp FAB + "Let's Chat" Tooltip ── */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated "Let's Chat" Tooltip Popup (North-West Position) */}
        <div style={{
          position: 'absolute',
          bottom: '52px',
          right: '48px',
          background: '#050D1E',
          color: '#ffffff',
          padding: '8px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 800,
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.28)',
          border: '1.5px solid #25D366',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
          <span>Let's Chat 👋</span>
          {/* Arrow pointing down towards WhatsApp button */}
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            right: '20px',
            width: '10px',
            height: '10px',
            background: '#050D1E',
            borderRight: '1.5px solid #25D366',
            borderBottom: '1.5px solid #25D366',
            transform: 'rotate(45deg)',
          }} />
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919973015880"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#25D366',
            color: '#ffffff',
            padding: '14px',
            borderRadius: '50%',
            boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid white',
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          aria-label="WhatsApp Support"
        >
          <MessageCircle style={{ width: '28px', height: '28px', fill: 'white', color: 'transparent' }} />
        </a>
      </div>
    </>
  );
}
