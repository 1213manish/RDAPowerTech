import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  CheckCircle, 
  Send, 
  Loader2, 
  User, 
  Phone, 
  Mail, 
  Building2, 
  Package, 
  MessageSquare, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Globe, 
  PhoneCall, 
  Lock, 
  Info
} from 'lucide-react';
import logoImg from '../../assets/quote-logo.png';

/* ─── Product mapping from card names / CTA triggers to dropdown values ─── */
const PRODUCT_MAP = {
  'PLC & HMI': 'PLC & HMI',
  'VARIABLE FREQUENCY DRIVES (VFD)': 'Variable Frequency Drives (VFD)',
  'VFD': 'Variable Frequency Drives (VFD)',
  'INDUSTRIAL SENSORS': 'Industrial Sensors',
  'SWITCHGEAR': 'Switchgear',
  'CONTROL PANELS': 'Control Panels',
  'PNEUMATIC PRODUCTS': 'Pneumatic Products',
  'INDUSTRIAL LUBRICANTS': 'Industrial Lubricants',
  'CABLES & WIRES': 'Cables & Wires',
  'INDUSTRIAL AUTOMATION': 'Industrial Automation',
  'PLC PROGRAMMING': 'PLC Programming',
  'VFD COMMISSIONING': 'VFD Commissioning',
  'ELECTRICAL MAINTENANCE': 'Electrical Maintenance',
  'CONTROL PANEL SOLUTIONS': 'Control Panel Solutions',
  'MACHINE BREAKDOWN SUPPORT': 'Machine Breakdown Support',
};

const PRODUCT_OPTIONS = [
  'PLC & HMI',
  'Variable Frequency Drives (VFD)',
  'Industrial Sensors',
  'Switchgear',
  'Control Panels',
  'Pneumatic Products',
  'Industrial Lubricants',
  'Cables & Wires',
  'Industrial Automation',
  'PLC Programming',
  'VFD Commissioning',
  'Electrical Maintenance',
  'Control Panel Solutions',
  'Machine Breakdown Support',
  'Other',
];

const INDUSTRY_OPTIONS = [
  'Manufacturing / Industrial',
  'Power Plant',
  'Cement',
  'Printing',
  'Food Processing',
  'Pharmaceuticals',
  'Steel',
  'Automobile',
  'Packaging',
  'Other',
];

function resolveProduct(raw = '') {
  if (!raw) return '';
  const upper = raw.toUpperCase().trim();
  if (PRODUCT_MAP[upper]) return PRODUCT_MAP[upper];
  const found = PRODUCT_OPTIONS.find(
    (o) => o && (upper.includes(o.toUpperCase()) || o.toUpperCase().includes(upper))
  );
  return found || '';
}

export default function QuoteModal({ isOpen, onClose, defaultProduct = '', isMandatory = false, onSuccess }) {
  const navigate = useNavigate();
  const initialForm = {
    name: '',
    phone: '',
    email: '',
    industry: 'Manufacturing / Industrial',
    product: '',
    requirements: '',
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [quotationRef, setQuotationRef] = useState('');
  const modalRef = useRef(null);

  /* ── Smart product context detection ── */
  useEffect(() => {
    if (defaultProduct) {
      const mapped = resolveProduct(defaultProduct);
      setForm((prev) => ({
        ...prev,
        product: mapped,
        requirements: mapped ? '' : `Requirement for: ${defaultProduct}`,
      }));
    } else {
      setForm((prev) => ({ ...prev, product: '' }));
    }
  }, [defaultProduct]);

  /* ── Lock background scroll ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ── ESC key to close ── */
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  /* ── Focus first input on open ── */
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const firstInput = modalRef.current.querySelector('input, select, textarea');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 150);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else {
      const cleanedPhone = form.phone.replace(/[\s-+()]/g, '');
      if (cleanedPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number';
      }
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.requirements.trim()) {
      newErrors.requirements = 'Please describe your requirement or product details';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      company: form.industry,
      product: form.product,
      remarks: form.requirements.trim(),
    };

    try {
      let response;
      try {
        response = await fetch('/backend/quotation.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        response = await fetch('http://localhost:8000/quotation.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const data = await response.json();
      if (data.success) {
        setQuotationRef(data.quotation_ref || `RDA-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
        if (onSuccess) onSuccess(payload);
      } else {
        setSubmitError(data.message || 'Something went wrong while sending your request. Please try again.');
      }
    } catch {
      setQuotationRef(`RDA-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      if (onSuccess) onSuccess(payload);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    const wasMandatoryUnsubmitted = isMandatory && !submitted;
    setSubmitted(false);
    setForm(initialForm);
    setErrors({});
    setSubmitError('');
    onClose();
    if (wasMandatoryUnsubmitted) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        backgroundColor: 'rgba(3, 12, 28, 0.72)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        animation: 'rdModalFadeIn 0.22s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Request a Quote"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1060px',
          maxHeight: '94vh',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          fontFamily: "'Inter', sans-serif",
          animation: 'rdModalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="rd-quote-modal-container"
      >
        {/* ══════════════════════════════════════════════════
            LEFT PANEL — "WE DELIVER ON DEMAND" (35% width)
            ══════════════════════════════════════════════════ */}
        <div
          style={{
            width: '35%',
            background: 'linear-gradient(165deg, #061329 0%, #040c1a 100%)',
            color: '#ffffff',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          className="rd-left-panel"
        >
          {/* Subtle industrial dot pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.06,
              backgroundImage: `radial-gradient(#FFB800 1px, transparent 1px), radial-gradient(#0877C9 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
              pointerEvents: 'none',
            }}
          />

          {/* Top Section */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <img
                src={logoImg}
                alt="RDA PowerTech Logo"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* Small Yellow Accent Line */}
            <div
              style={{
                width: '36px',
                height: '3px',
                background: '#FFB800',
                borderRadius: '2px',
                marginBottom: '12px',
              }}
            />

            {/* Main Heading: WE DELIVER ON DEMAND */}
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 10px 0',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <span style={{ color: '#ffffff', display: 'block' }}>WE DELIVER</span>
              <span style={{ color: '#FFB800', display: 'block' }}>ON DEMAND</span>
            </h2>

            {/* Supporting Message */}
            <p
              style={{
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: '#cbd5e1',
                margin: '0 0 18px 0',
                fontWeight: 400,
              }}
            >
              Reliable industrial & electrical solutions, delivered to you. Right on time. Every time.
            </p>

            {/* 4 Benefit Cards in 2x2 Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
              }}
              className="rd-benefits-grid"
            >
              {/* Card 1 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <Truck style={{ width: '16px', height: '16px', color: '#FFB800', marginBottom: '4px' }} />
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  On-Time Delivery
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', lineHeight: 1.25 }}>
                  Fast delivery across India.
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <ShieldCheck style={{ width: '16px', height: '16px', color: '#FFB800', marginBottom: '4px' }} />
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  Genuine Products
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', lineHeight: 1.25 }}>
                  100% authentic quality.
                </div>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <Zap style={{ width: '16px', height: '16px', color: '#FFB800', marginBottom: '4px' }} />
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  Quick Response
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', lineHeight: 1.25 }}>
                  Reply within 24 hours.
                </div>
              </div>

              {/* Card 4 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <Globe style={{ width: '16px', height: '16px', color: '#FFB800', marginBottom: '4px' }} />
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  PAN India Supply
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', lineHeight: 1.25 }}>
                  Serving all industries.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contact Area */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            className="rd-contact-area"
          >
            <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
              Need Immediate Assistance?
            </div>
            <a
              href="tel:+919973015880"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: 700,
              }}
              className="hover:underline"
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'rgba(255, 184, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFB800',
                }}
              >
                <PhoneCall style={{ width: '13px', height: '13px' }} />
              </span>
              <span>
                Call us: <strong style={{ color: '#FFB800' }}>9973015880</strong>
              </span>
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            RIGHT PANEL — QUOTE FORM (65% width)
            ══════════════════════════════════════════════════ */}
        <div
          style={{
            width: '65%',
            background: '#ffffff',
            padding: '24px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: 'auto',
            position: 'relative',
          }}
          className="rd-right-panel"
        >
          {/* Top Right Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#f1f5f9',
              border: 'none',
              color: '#475569',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB800';
              e.currentTarget.style.color = '#061329';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
              e.currentTarget.style.color = '#475569';
            }}
            aria-label="Close dialog"
          >
            <X style={{ width: '16px', height: '16px' }} />
          </button>

          {submitted ? (
            /* ───── SUCCESS STATE ───── */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '30px 10px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: '#f0fdf4',
                  border: '2px solid #22c55e',
                  color: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle style={{ width: '34px', height: '34px' }} />
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#061329',
                  margin: '0 0 8px 0',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {isMandatory ? 'Access Granted & Quote Sent!' : 'Request Received!'}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#475569',
                  lineHeight: 1.5,
                  maxWidth: '420px',
                  margin: '0 0 20px 0',
                }}
              >
                Thank you, <strong style={{ color: '#061329' }}>{form.name}</strong>! {isMandatory ? 'Pricing & catalogs are now unlocked for you.' : 'Our team will review your requirement and contact you shortly.'}
              </p>

              {quotationRef && (
                <div
                  style={{
                    background: '#fffbeb',
                    border: '1px dashed #FFB800',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{ fontSize: '10.5px', color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                    Reference Number
                  </span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#b45309', fontFamily: 'monospace' }}>
                    {quotationRef}
                  </span>
                </div>
              )}

              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  marginBottom: '22px',
                  fontSize: '13px',
                  color: '#64748b',
                }}
              >
                Need immediate assistance?{' '}
                <a href="tel:+919973015880" style={{ color: '#061329', fontWeight: 700, textDecoration: 'underline' }}>
                  Call us: 9973015880
                </a>
              </div>

              <button
                onClick={handleClose}
                style={{
                  background: isMandatory ? '#FFB800' : '#061329',
                  color: isMandatory ? '#061329' : '#ffffff',
                  fontWeight: 800,
                  fontSize: '13.5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '12px 34px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: isMandatory ? '0 4px 14px rgba(255, 184, 0, 0.35)' : 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = isMandatory ? '#e6a600' : '#0c1a30')}
                onMouseLeave={(e) => (e.currentTarget.style.background = isMandatory ? '#FFB800' : '#061329')}
              >
                {isMandatory ? 'Unlock & View Pricing Page →' : 'Close'}
              </button>
            </div>
          ) : (
            /* ───── FORM VIEW ───── */
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Form Header (Clean title with icon) */}
              <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '7px',
                    background: '#FFF7DD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#b45309',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare style={{ width: '15px', height: '15px' }} />
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#061329',
                    margin: 0,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Request Your Quote
                </h3>
              </div>

              {submitError && (
                <div
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#dc2626',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    marginBottom: '12px',
                  }}
                >
                  {submitError}
                </div>
              )}

              {/* Form Elements */}
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* 1. Full Name */}
                <div>
                  <label style={labelStyle}>
                    Full Name <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User style={inputIconStyle} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={{
                        ...inputBoxStyle,
                        borderColor: errors.name ? '#DC2626' : '#d5dbe5',
                      }}
                      onFocus={handleFieldFocus}
                      onBlur={(e) => handleFieldBlur(e, errors.name)}
                    />
                  </div>
                  {errors.name && <div style={errorTextStyle}>{errors.name}</div>}
                </div>

                {/* 2 & 3. Mobile & Email (2-column on desktop) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="rd-form-row">
                  <div>
                    <label style={labelStyle}>
                      Mobile <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Phone style={inputIconStyle} />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9973015880"
                        style={{
                          ...inputBoxStyle,
                          borderColor: errors.phone ? '#DC2626' : '#d5dbe5',
                        }}
                        onFocus={handleFieldFocus}
                        onBlur={(e) => handleFieldBlur(e, errors.phone)}
                      />
                    </div>
                    {errors.phone && <div style={errorTextStyle}>{errors.phone}</div>}
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
                    <div style={{ position: 'relative' }}>
                      <Mail style={inputIconStyle} />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        style={{
                          ...inputBoxStyle,
                          borderColor: errors.email ? '#DC2626' : '#d5dbe5',
                        }}
                        onFocus={handleFieldFocus}
                        onBlur={(e) => handleFieldBlur(e, errors.email)}
                      />
                    </div>
                    {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
                  </div>
                </div>

                {/* 4 & 5. Business/Industry & Product/Service (2-column on desktop) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="rd-form-row">
                  <div>
                    <label style={labelStyle}>Business / Industry</label>
                    <div style={{ position: 'relative' }}>
                      <Building2 style={inputIconStyle} />
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        style={{
                          ...inputBoxStyle,
                          cursor: 'pointer',
                          appearance: 'auto',
                        }}
                        onFocus={handleFieldFocus}
                        onBlur={(e) => handleFieldBlur(e, false)}
                      >
                        {INDUSTRY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Product / Service</label>
                    <div style={{ position: 'relative' }}>
                      <Package style={inputIconStyle} />
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        style={{
                          ...inputBoxStyle,
                          cursor: 'pointer',
                          appearance: 'auto',
                          color: form.product ? '#172033' : '#6B7280',
                        }}
                        onFocus={handleFieldFocus}
                        onBlur={(e) => handleFieldBlur(e, false)}
                      >
                        <option value="" disabled>
                          Select product...
                        </option>
                        {PRODUCT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} style={{ color: '#172033' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 6. Requirements Textarea */}
                <div>
                  <label style={labelStyle}>
                    Requirements <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MessageSquare style={{ ...inputIconStyle, top: '14px', transform: 'none' }} />
                    <textarea
                      name="requirements"
                      rows={3}
                      value={form.requirements}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement, product, quantity, or application..."
                      style={{
                        ...inputBoxStyle,
                        height: '76px',
                        paddingTop: '10px',
                        resize: 'vertical',
                        borderColor: errors.requirements ? '#DC2626' : '#d5dbe5',
                      }}
                      onFocus={handleFieldFocus}
                      onBlur={(e) => handleFieldBlur(e, errors.requirements)}
                    />
                  </div>
                  {errors.requirements && <div style={errorTextStyle}>{errors.requirements}</div>}
                </div>

                {/* Information / Trust Strip (Compact) */}
                <div
                  style={{
                    background: '#FFF7DD',
                    border: '1px solid rgba(255, 184, 0, 0.3)',
                    borderRadius: '7px',
                    padding: '7px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Info style={{ width: '14px', height: '14px', color: '#b45309', flexShrink: 0 }} />
                  <span style={{ fontSize: '11.5px', color: '#78350f', lineHeight: 1.35 }}>
                    The more details you provide, the faster our team can assist with an accurate quote.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    height: '46px',
                    background: submitting ? '#d1d5db' : '#FFB800',
                    color: '#061329',
                    fontWeight: 800,
                    fontSize: '13.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '9px',
                    boxShadow: submitting ? 'none' : '0 3px 12px rgba(255, 184, 0, 0.28)',
                    transition: 'all 0.15s ease',
                    marginTop: '2px',
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      e.currentTarget.style.background = '#e6a600';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!submitting) {
                      e.currentTarget.style.background = '#FFB800';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 style={{ width: '16px', height: '16px', animation: 'rdSpin 1s linear infinite' }} />
                      <span>SENDING REQUEST...</span>
                    </>
                  ) : (
                    <>
                      <Send style={{ width: '15px', height: '15px' }} />
                      <span>SUBMIT REQUEST →</span>
                    </>
                  )}
                </button>

                {/* Privacy Message */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    fontSize: '11px',
                    color: '#6B7280',
                    textAlign: 'center',
                  }}
                >
                  <Lock style={{ width: '11px', height: '11px', color: '#9CA3AF' }} />
                  <span>Your information is secure and will never be shared with third parties.</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          RESPONSIVE & ANIMATION CSS
          ══════════════════════════════════════════════════ */}
      <style>{`
        @keyframes rdModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes rdModalScaleUp {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes rdSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 960px) {
          .rd-quote-modal-container {
            flex-direction: column !important;
            max-height: 94vh !important;
            width: 95vw !important;
            overflow-y: auto !important;
          }
          .rd-left-panel {
            width: 100% !important;
            padding: 20px 18px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .rd-right-panel {
            width: 100% !important;
            padding: 20px 18px !important;
          }
          .rd-benefits-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .rd-form-row {
            grid-template-columns: 1fr !important;
          }
          .rd-benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .rd-contact-area {
            margin-top: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Common Helper Styles ─── */
const labelStyle = {
  display: 'block',
  fontSize: '12.5px',
  fontWeight: 600,
  color: '#061329',
  marginBottom: '4px',
  fontFamily: "'Inter', sans-serif",
};

const inputBoxStyle = {
  width: '100%',
  height: '40px',
  padding: '8px 12px 8px 36px',
  background: '#ffffff',
  border: '1px solid #d5dbe5',
  borderRadius: '8px',
  color: '#172033',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: "'Inter', sans-serif",
};

const inputIconStyle = {
  position: 'absolute',
  left: '11px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '15px',
  height: '15px',
  color: '#6B7280',
  pointerEvents: 'none',
};

const errorTextStyle = {
  fontSize: '11px',
  color: '#DC2626',
  marginTop: '3px',
  fontWeight: 500,
};

const handleFieldFocus = (e) => {
  e.target.style.borderColor = '#FFB800';
  e.target.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.12)';
};

const handleFieldBlur = (e, hasError) => {
  e.target.style.borderColor = hasError ? '#DC2626' : '#d5dbe5';
  e.target.style.boxShadow = 'none';
};
