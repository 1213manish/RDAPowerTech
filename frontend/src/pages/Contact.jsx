import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  FileCheck,
  Zap,
  Tag
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export default function Contact({ setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your Name, Email Address, and Message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message to rdapowertech@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setSentSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page container">
      {/* Header */}
      <div className="contact-header">
        <span className="badge">Get In Touch</span>
        <h1>Contact Us</h1>
        <p>Have questions about electrical part availability or custom requirements? Send us a message or reach out directly.</p>
      </div>

      <div className="contact-layout">
        {/* Left Column: Official Contact Details */}
        <div className="contact-info-col">
          <div className="info-card glass-card">
            <div className="company-badge-header">
              <Building2 size={24} className="company-icon" />
              <div>
                <h3>{COMPANY_DETAILS.name}</h3>
                <span className="company-sub">{COMPANY_DETAILS.itemCode}</span>
              </div>
            </div>

            <div className="contact-details-grid">
              <div className="contact-detail-block">
                <div className="detail-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Office & Shop Address</span>
                  <span className="detail-value">{COMPANY_DETAILS.address}</span>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="detail-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Phone / WhatsApp</span>
                  <span className="detail-value">{COMPANY_DETAILS.phoneFormatted}</span>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="detail-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">{COMPANY_DETAILS.email}</span>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="detail-icon-wrap">
                  <FileCheck size={22} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">GSTIN / Registration</span>
                  <span className="detail-value">{COMPANY_DETAILS.gstin} (State: {COMPANY_DETAILS.state})</span>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="detail-icon-wrap">
                  <Clock size={22} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Business Hours</span>
                  <span className="detail-value">{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="support-card glass-card">
            <h4>Technical Part Support</h4>
            <p>Our sales engineers assist in cross-referencing obsolete electrical part numbers and identifying equivalent replacement models from Siemens, Schneider, Eaton, L&T, and Mitsubishi.</p>
          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <div className="contact-form-col">
          <div className="form-card glass-card">
            <h3>Send Us a Message</h3>
            <p className="form-sub">Fill out the form below and your message will be dispatched directly to {COMPANY_DETAILS.email}.</p>

            {sentSuccess ? (
              <div className="success-message-box">
                <CheckCircle2 size={48} className="success-check-icon" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out to {COMPANY_DETAILS.shopName}. Our team will respond to your inquiry within 24 hours.</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSentSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMessage && (
                  <div className="error-alert">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Company / Firm Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Industries Ltd."
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Inquiry Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Availability">Product Availability Inquiry</option>
                    <option value="Bulk Order Quotation">Bulk Order Quotation</option>
                    <option value="Custom Solar DB Panel">Custom Solar DB Panel Requirement</option>
                    <option value="Technical Support">Technical Part Cross-Reference</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify product model numbers, quantities, or technical requirements..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .contact-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }

        .contact-header h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          color: #0F172A;
          margin: 12px 0;
        }

        .contact-header p {
          color: #475569;
          font-size: 1.1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 36px;
          align-items: start;
        }

        .company-badge-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #E2E8F0;
        }

        .company-icon {
          color: #248BFF;
          flex-shrink: 0;
        }

        .company-badge-header h3 {
          color: #0F172A;
          font-size: 1.25rem;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .company-sub {
          font-size: 0.85rem;
          color: #248BFF;
          font-weight: 600;
        }

        .glass-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }

        .contact-details-grid {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .contact-detail-block {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .detail-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(36, 139, 255, 0.08);
          border: 1px solid rgba(36, 139, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #248BFF;
          flex-shrink: 0;
        }

        .detail-content {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 3px;
        }

        .detail-value {
          color: #0F172A;
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .support-card {
          margin-top: 24px;
          border-color: #E2E8F0;
        }

        .support-card h4 {
          color: #0F172A;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }

        .support-card p {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        .form-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .form-sub {
          color: #475569;
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #475569;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 12px 16px;
          color: #0F172A;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #248BFF;
          box-shadow: 0 0 0 3px rgba(36, 139, 255, 0.15);
        }

        .form-group select option {
          background: #FFFFFF;
          color: #0F172A;
        }

        .submit-btn {
          margin-top: 8px;
          height: 50px;
          font-size: 1rem;
          justify-content: center;
        }

        .error-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          color: #DC2626;
          font-size: 0.9rem;
        }

        .success-message-box {
          text-align: center;
          padding: 36px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-check-icon {
          color: #10B981;
        }

        .success-message-box h4 {
          color: #0F172A;
          font-size: 1.4rem;
          margin: 0;
        }

        .success-message-box p {
          color: #475569;
          max-width: 400px;
          margin: 0;
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
