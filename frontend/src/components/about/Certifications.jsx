import React, { useState, useEffect, useCallback } from 'react';
import { Eye, X, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteContext';
import iecImg from '../../assets/about/iec-certificate.jpeg';
import udyamImg from '../../assets/about/msme-certificate.jpeg';
import gstImg from '../../assets/about/gst-certificate.jpeg';
import '../../styles/about-certifications.css';

export default function Certifications() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedDoc, setSelectedDoc] = useState(null);

  const certificates = [
    {
      title: 'Udyam Registration Certificate',
      image: udyamImg,
      alt: 'RDAPOWER TECH Udyam Registration Certificate',
    },
    {
      title: 'GST Registration Certificate',
      image: gstImg,
      alt: 'RDAPOWER TECH GST Registration Certificate',
    },
    {
      title: 'Importer Exporter Code (IEC)',
      image: iecImg,
      alt: 'RDAPOWER TECH Importer Exporter Code Certificate',
    },
  ];

  // Close modal on ESC key press
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setSelectedDoc(null);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedDoc) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedDoc, handleKeyDown]);

  return (
    <section className="about-certs">
      <div className="about-certs__container">
        {/* Section Heading */}
        <div className="about-certs__header">
          <h2 className="about-certs__heading">
            OUR CERTIFICATIONS & REGISTRATIONS
            <span className="about-certs__heading-underline" />
          </h2>
        </div>

        {/* 3 Document Cards Grid */}
        <div className="about-certs__grid">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="about-certs__card"
              onClick={() => setSelectedDoc(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDoc(cert);
                }
              }}
              aria-label={`View full ${cert.title}`}
            >
              {/* Document Preview Area - Full Image */}
              <div className="about-certs__preview-box">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="about-certs__preview-img"
                />
                <div className="about-certs__preview-overlay">
                  <span className="about-certs__preview-badge">
                    <Eye style={{ width: '15px', height: '15px' }} />
                    <span>View Document</span>
                  </span>
                </div>
              </div>

              {/* Document Label */}
              <div className="about-certs__card-body">
                <h3 className="about-certs__card-title">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="about-certs__trust-strip">
          <h4 className="about-certs__trust-heading">BUILT ON TRUST & COMPLIANCE</h4>
          <p className="about-certs__trust-subtext">
            Official business registrations and documentation reflecting our commitment to transparent and reliable business practices.
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div className="about-certs__cta-wrapper">
          <span className="about-certs__cta-text">
            Looking for industrial products or automation solutions?
          </span>
          <button
            onClick={() => openQuoteModal('Industrial Products & Automation Solutions')}
            className="about-certs__cta-btn"
          >
            <span>GET A QUOTE</span>
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedDoc && (
        <div
          className="about-certs__modal-backdrop"
          onClick={() => setSelectedDoc(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedDoc.subtitle}
        >
          <div
            className="about-certs__modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="about-certs__modal-header">
              <h3 className="about-certs__modal-title">{selectedDoc.subtitle}</h3>
              <button
                className="about-certs__modal-close"
                onClick={() => setSelectedDoc(null)}
                aria-label="Close document modal"
              >
                <X style={{ width: '18px', height: '18px' }} />
              </button>
            </div>

            {/* Modal Body with full image */}
            <div className="about-certs__modal-body">
              <img
                src={selectedDoc.image}
                alt={selectedDoc.alt}
                className="about-certs__modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
