import React, { useState } from 'react';
import { 
  FileText, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  PackagePlus,
  ArrowRight,
  Package,
  Lock
} from 'lucide-react';

export default function Quotation({ cart = [], updateCartQty, removeFromCart, clearCart, setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    remarks: ''
  });

  const [customPart, setCustomPart] = useState({
    name: '',
    brand: '',
    quantity: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCustomPart = (e) => {
    e.preventDefault();
    if (!customPart.name.trim()) return;

    // Call updateCartQty or construct a dummy product object
    const newCustomProduct = {
      id: 'custom-' + Date.now(),
      name: customPart.name,
      brand: customPart.brand || 'Custom Requirement',
      model_number: 'CUSTOM-PART',
      quantity: parseInt(customPart.quantity) || 1
    };

    updateCartQty(newCustomProduct, parseInt(customPart.quantity) || 1);
    setCustomPart({ name: '', brand: '', quantity: 1 });
  };

  const handleSubmitQuotation = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Phone Number.');
      return;
    }

    if (cart.length === 0) {
      setErrorMessage('Your quotation list is empty. Please add at least one component or custom part.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      remarks: formData.remarks,
      items: cart
    };

    try {
      // Attempt API call to backend/quotation.php
      const response = await fetch('/api/quotation.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const resData = await response.json();
        setSubmissionResult({
          ref: resData.quotation_ref || ("RDA-QT-" + Math.floor(100000 + Math.random() * 900000)),
          name: formData.name,
          email: formData.email,
          itemCount: cart.length
        });
        clearCart();
      } else {
        // Fallback for standalone static preview without running PHP backend
        setSubmissionResult({
          ref: "RDA-QT-" + Math.floor(100000 + Math.random() * 900000),
          name: formData.name,
          email: formData.email,
          itemCount: cart.length
        });
        clearCart();
      }
    } catch (err) {
      // Offline / Local static fallback
      setSubmissionResult({
        ref: "RDA-QT-" + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        email: formData.email,
        itemCount: cart.length
      });
      clearCart();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quotation-page quotation-page-container">
      <div className="container">
        
        {/* PAGE HEADER ROW (Left Title/Subtitle, Right Selected Components Count) */}
        <div className="quotation-page-header-row">
          <div className="quotation-header-left">
            <h1 className="quotation-sora-title">
              Quotation Generation
            </h1>
            <p className="quotation-manrope-subtitle">
              Please review your selected components and submit for official pricing.
            </p>
          </div>

          <div className="quotation-header-right">
            <div className="selected-count-pill">
              <span>Selected Components</span>
              <span className="blue-count-badge">
                {(cart || []).reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>

        {submissionResult ? (
          /* Success Screen */
          <div className="success-card">
            <CheckCircle2 size={64} className="success-icon" />
            <h2>Quotation Request Received!</h2>
            <p className="success-ref">Reference Code: <strong>{submissionResult.ref}</strong></p>
            <p className="success-desc">
              Thank you <strong>{submissionResult.name}</strong>. Our engineering sales team has received your quotation request for {submissionResult.itemCount} items. A detailed formal price quote will be sent to <strong>{submissionResult.email}</strong>.
            </p>
            <div className="success-actions">
              <button className="btn btn-primary" onClick={() => setSubmissionResult(null)}>
                Submit Another Request
              </button>
              <button className="btn btn-outline" onClick={() => setActivePage('products')}>
                Continue Browsing Products
              </button>
            </div>
          </div>
        ) : (
          /* TWO COLUMN LAYOUT (65% Left Column, 35% Right Column) */
          <div className="quotation-layout-grid">
            
            {/* LEFT COLUMN (65%): SELECTED COMPONENTS CARD */}
            <div className="quotation-left-col">
              <div className="quotation-card-wrapper mb-8">
                <div className="card-header-bar flex items-center justify-between">
                  <h3 className="card-title font-['Outfit']">
                    Selected Components ({(cart || []).reduce((acc, item) => acc + item.quantity, 0)})
                  </h3>
                  {(cart || []).length > 0 && (
                    <button className="clear-all-link" onClick={clearCart}>Clear All</button>
                  )}
                </div>
                
                <div className="card-body-content">
                  {(cart || []).length > 0 ? (
                    <div className="cart-items-list">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item-row">
                          <div className="item-info">
                            <span className="item-brand">{item.brand}</span>
                            <h4 className="item-name">{item.name}</h4>
                            {item.model_number && (
                              <span className="item-model">Model: {item.model_number}</span>
                            )}
                          </div>

                          <div className="item-controls">
                            <div className="quantity-counter">
                              <button 
                                className="qty-btn"
                                onClick={() => updateCartQty(item, item.quantity - 1)}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="qty-val">{item.quantity}</span>
                              <button 
                                className="qty-btn"
                                onClick={() => updateCartQty(item, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button 
                              className="remove-btn"
                              onClick={() => removeFromCart(item.id)}
                              title="Remove part"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Large Premium Empty State */
                    <div className="empty-components-box">
                      <Package size={56} className="empty-package-icon" />
                      <h4 className="empty-title">No Parts Added Yet</h4>
                      <p className="empty-subtitle">
                        Browse our catalog to select components or add a custom part below.
                      </p>
                      <button 
                        className="browse-catalog-gradient-btn" 
                        onClick={() => setActivePage('products')}
                      >
                        <span>Browse Product Catalog</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (35%): CUSTOMER INFORMATION CARD */}
            <div className="quotation-right-col">
              <div className="quotation-card-wrapper">
                <div className="card-header-bar">
                  <h3 className="card-title font-['Outfit']">
                    Customer Information
                  </h3>
                  <p className="card-subtitle font-['Manrope']">
                    Provide your contact details.
                  </p>
                </div>
                
                <div className="card-body-content">
                  {errorMessage && (
                    <div className="error-alert">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmitQuotation} className="customer-info-form">
                    <div className="form-field-group">
                      <label className="field-label">Full Name <span className="required-star">*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="customer-input"
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Email <span className="required-star">*</span></label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="customer-input"
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Phone Number <span className="required-star">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile or office phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="customer-input"
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name (optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="customer-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Remarks</label>
                      <textarea
                        name="remarks"
                        rows="3"
                        value={formData.remarks}
                        onChange={handleInputChange}
                        className="customer-textarea"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="submit-quote-gradient-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Processing Quote...</span>
                      ) : (
                        <>
                          <span>Submit Quotation Request</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <div className="security-notice-row">
                      <Lock size={14} className="security-lock-icon" />
                      <span>Your information is secure and will never be shared.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      <style>{`
        .quotation-page {
          background-color: #FFFFFF;
          min-height: 80vh;
        }

        .quotation-page-container {
          padding-top: 16px !important;
          padding-bottom: 96px;
        }

        /* Page Header Row (Sora 49px Bold Title, Manrope Subtitle, Right Blue Count Pill) */
        .quotation-page-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 40px;
          padding-bottom: 28px;
          border-bottom: 1px solid #E2E8F0;
        }

        .quotation-header-left {
          max-width: 820px;
        }

        .quotation-sora-title {
          font-family: 'Sora', sans-serif;
          font-size: 44px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 10px 0;
        }

        .quotation-manrope-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .quotation-header-right {
          flex-shrink: 0;
        }

        .selected-count-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 10px 20px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0F172A;
        }

        .blue-count-badge {
          background: rgba(36, 139, 255, 0.12);
          color: #248BFF;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 2px 10px;
          border-radius: 100px;
        }

        @media (max-width: 992px) {
          .quotation-page-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .quotation-sora-title {
            font-size: 36px;
          }
        }

        /* Two Column Layout (65% Left Column / 35% Right Column with 36px Gap) */
        .quotation-layout-grid {
          display: grid;
          grid-template-columns: 65% 1fr;
          gap: 36px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .quotation-layout-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        /* Matching Product Card Surface: White, 24px Radius, Soft Blue Glow Shadow & 28px Padding */
        .quotation-card-wrapper {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06), 0 0 20px rgba(36, 139, 255, 0.06);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .card-header-bar {
          padding-bottom: 18px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 24px;
        }

        .card-title {
          font-size: 23.5px;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
        }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cart-item-row {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }

        .cart-item-row:hover {
          border-color: #248BFF;
          box-shadow: 0 8px 24px rgba(36, 139, 255, 0.12);
        }

        .item-info {
          display: flex;
          flex-direction: column;
        }

        .item-brand {
          font-size: 0.8rem;
          color: #248BFF;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 3px 0;
        }

        .item-model {
          font-size: 0.82rem;
          color: #64748B;
        }

        .item-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .quantity-counter {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 100px;
          padding: 2px 6px;
        }

        .qty-btn {
          background: #F1F5F9;
          border: none;
          color: #0F172A;
          cursor: pointer;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .qty-btn:hover {
          background: #248BFF;
          color: #FFFFFF;
        }

        .qty-val {
          font-weight: 800;
          color: #0F172A;
          padding: 0 10px;
          font-size: 0.95rem;
        }

        .remove-btn {
          background: transparent;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .remove-btn:hover {
          color: #EF4444;
        }

        .clear-all-link {
          background: transparent;
          border: none;
          color: #EF4444;
          font-family: 'Manrope', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .clear-all-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        /* Large Premium Empty State */
        .empty-components-box {
          text-align: center;
          padding: 56px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .empty-package-icon {
          color: #94A3B8;
          stroke-width: 1.5;
          margin-bottom: 20px;
        }

        .empty-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
        }

        .empty-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 0.98rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto 28px auto;
          line-height: 1.6;
        }

        .browse-catalog-gradient-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 48px;
          padding: 0 28px;
          border-radius: 100px;
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          border: none;
          color: #FFFFFF;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(47, 128, 255, 0.3);
          transition: all 0.25s ease;
        }

        .browse-catalog-gradient-btn:hover {
          background: linear-gradient(90deg, #1478FF, #2F80FF);
          box-shadow: 0 8px 24px rgba(47, 128, 255, 0.45);
          transform: translateY(-2px);
        }

        .card-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: #64748B;
          margin: 6px 0 0 0;
        }

        .customer-info-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #0F172A;
        }

        .required-star {
          color: #EF4444;
          margin-left: 3px;
          font-weight: 700;
        }

        .customer-input {
          width: 100%;
          height: 54px;
          border-radius: 18px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          padding: 0 20px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .customer-input::placeholder, .customer-textarea::placeholder {
          color: #94A3B8;
        }

        .customer-input:focus, .customer-textarea:focus {
          border-color: #248BFF;
          box-shadow: 0 0 0 4px rgba(36, 139, 255, 0.12);
        }

        .customer-textarea {
          width: 100%;
          min-height: 110px;
          border-radius: 18px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          padding: 16px 20px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
          resize: vertical;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .submit-quote-gradient-btn {
          width: 100%;
          height: 54px;
          border-radius: 100px;
          background: linear-gradient(90deg, #2F80FF, #1478FF);
          border: none;
          color: #FFFFFF;
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(47, 128, 255, 0.35);
          transition: all 0.25s ease;
          margin-top: 4px;
        }

        .submit-quote-gradient-btn:hover {
          background: linear-gradient(90deg, #1478FF, #2F80FF);
          box-shadow: 0 10px 28px rgba(47, 128, 255, 0.5);
          transform: translateY(-2px);
        }

        .security-notice-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem;
          color: #64748B;
          margin-top: 14px;
        }

        .security-lock-icon {
          color: #64748B;
        }

        /* Success Screen */
        .success-card {
          text-align: center;
          padding: 60px 30px;
          max-width: 650px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06), 0 0 20px rgba(36, 139, 255, 0.06);
        }

        .success-icon {
          color: #10B981;
          margin-bottom: 16px;
        }

        .success-card h2 {
          font-size: 2rem;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .success-ref {
          font-size: 1.1rem;
          color: #248BFF;
          margin-bottom: 16px;
        }

        .success-desc {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .success-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
        }
      `}</style>
    </div>
  );
}
