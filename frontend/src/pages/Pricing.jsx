import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Download, FileText, FolderSearch, Lock, CheckCircle, X } from 'lucide-react';
import { pricingBrands } from '../data/pricingData';
import { useQuoteModal } from '../context/QuoteContext';
import '../styles/pricing.css';

function PricingBrandLogo({ brand }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (brand.logo && !imgFailed) {
    return (
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        style={{
          maxWidth: '85%',
          maxHeight: '44px',
          objectFit: 'contain',
          transform: brand.scale ? `scale(${brand.scale})` : undefined,
          transition: 'transform 0.2s',
        }}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <span style={{ color: brand.color, fontFamily: "'Inter', sans-serif", fontWeight: 900 }}>
      {brand.wordmark}
    </span>
  );
}

export default function Pricing() {
  const { openQuoteModal, isPricingUnlocked } = useQuoteModal();
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    if (!isPricingUnlocked) {
      openQuoteModal('Pricing & Product Catalog Access', { isMandatory: true });
    }
  }, [isPricingUnlocked]);

  const requestQuote = (brand = '') => {
    setSelectedBrand(null);
    openQuoteModal(brand ? `${brand} pricing & catalog request` : 'Pricing & catalog request');
  };

  const handleCardAction = (brand) => {
    if (!isPricingUnlocked) {
      openQuoteModal('Pricing & Product Catalog Access', { isMandatory: true });
      return;
    }
    setSelectedBrand(brand);
  };

  return (
    <div className="pricing-page">
      <section className="pricing-hero" aria-labelledby="pricing-title">
        <div className="pricing-container pricing-hero__content">
          <div className="pricing-hero__copy">
            <p className="pricing-eyebrow">Industrial Automation & Electrical Solutions</p>
            <h1 id="pricing-title"><span>Product</span> <strong>Pricing &amp; Catalogs</strong></h1>
            <p>Browse brand-wise price lists &amp; product catalogs.</p>
          </div>
          <aside className="pricing-hero__quote">
            <FolderSearch aria-hidden="true" />
            <div>
              <h2>Can't find what you're looking for?</h2>
              <p>Tell us your requirement and we'll get back to you.</p>
            </div>
            <button
              type="button"
              onClick={() => requestQuote()}
              aria-label="Request a quote for a product or catalog"
            >
              Request a Quote <ArrowRight />
            </button>
          </aside>
        </div>
      </section>

      <section className="pricing-brands" aria-labelledby="choose-brand-title">
        <div className="pricing-container">
          <div className="pricing-heading">
            <h2 id="choose-brand-title">Choose a Brand</h2>
            <span aria-hidden="true" />
            <p>Select a brand to view and download the latest price lists &amp; catalogs.</p>
          </div>

          {!isPricingUnlocked && (
            <div
              style={{
                maxWidth: '750px',
                margin: '0 auto 26px auto',
                padding: '14px 20px',
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock style={{ width: '20px', height: '20px', color: '#B45309', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#92400E' }}>
                  Complete the quote form to unlock all brand pricing & catalogs.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link
                  to="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#475569',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    padding: '7px 11px',
                    background: '#f1f5f9',
                    borderRadius: '6px',
                  }}
                >
                  <ArrowLeft style={{ width: '13px', height: '13px' }} />
                  <span>Back to Home</span>
                </Link>
                <button
                  type="button"
                  onClick={() => openQuoteModal('Pricing & Product Catalog Access', { isMandatory: true })}
                  style={{
                    background: '#FFB800',
                    color: '#061329',
                    fontWeight: 800,
                    fontSize: '11.5px',
                    textTransform: 'uppercase',
                    padding: '7px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Fill Form to Unlock
                </button>
              </div>
            </div>
          )}

          {isPricingUnlocked && (
            <div
              style={{
                maxWidth: '680px',
                margin: '0 auto 26px auto',
                padding: '10px 18px',
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <CheckCircle style={{ width: '18px', height: '18px', color: '#16A34A', flexShrink: 0 }} />
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#166534' }}>
                Pricing Access Unlocked: You can now browse all brand documents and catalogs.
              </span>
            </div>
          )}

          <div className="pricing-grid" style={!isPricingUnlocked ? { filter: 'blur(2px)', pointerEvents: 'auto', opacity: 0.85 } : {}}>
            {pricingBrands.map((brand) => (
              <article
                className="pricing-card"
                key={brand.id}
                onClick={() => handleCardAction(brand)}
                style={{ cursor: 'pointer' }}
              >
                <div className="pricing-card__body">
                  <div className="pricing-wordmark">
                    <PricingBrandLogo brand={brand} />
                  </div>
                  <p>{brand.categories.slice(0, 3).join('  |  ')}</p>
                  <p>{brand.categories.slice(3).join('  |  ') || 'Industrial Solutions'}</p>
                </div>
                <button
                  className="pricing-card__download"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardAction(brand);
                  }}
                  aria-label={`View ${brand.name} price list documents`}
                >
                  <FileText aria-hidden="true" />
                  <span>Download Price List</span>
                  <Download aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          <p className="pricing-more-brands">
            More brands and manufacturer documents are being added regularly. Can't find your brand?{' '}
            <button type="button" onClick={() => requestQuote()}>
              Request it from our team <ArrowRight />
            </button>
          </p>
        </div>
      </section>

      <section className="pricing-cta">
        <div className="pricing-container">
          <div className="pricing-cta__content">
            <div className="pricing-cta__visual" aria-hidden="true" />
            <div className="pricing-cta__copy">
              <h2>Looking for something specific?</h2>
              <p>Tell us what you need and we'll share the right pricing and product documents.</p>
            </div>
            <button type="button" onClick={() => requestQuote()}>
              Request a Quote <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {selectedBrand && (
        <div
          className="pricing-dialog-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedBrand(null)}
        >
          <section
            className="pricing-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="pricing-dialog__close"
              onClick={() => setSelectedBrand(null)}
              aria-label="Close document selector"
            >
              <X />
            </button>
            <p className="pricing-eyebrow">{selectedBrand.name}</p>
            <h2 id="document-dialog-title">Pricing documents</h2>
            <div className="pricing-documents">
              {selectedBrand.documents.map((document) =>
                document.available ? (
                  <a
                    key={document.title}
                    href={document.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Download ${document.title} PDF`}
                  >
                    <FileText />
                    <span>
                      {document.title}
                      <small>{document.type} document</small>
                    </span>
                    <Download />
                  </a>
                ) : (
                  <button
                    key={document.title}
                    type="button"
                    onClick={() => requestQuote(selectedBrand.name)}
                  >
                    <FileText />
                    <span>
                      {document.title}
                      <small>Available on request</small>
                    </span>
                    <ArrowRight />
                  </button>
                )
              )}
            </div>
            <p className="pricing-dialog__note">
              Our team will share the current manufacturer document for your requirement.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
