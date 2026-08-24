import React, { useState } from 'react';
import '../../styles/about-clients.css';

/* ════════════════════════════════════════════════════════════════
   CLIENT DATA
   ─────────────────────────────────────────────────────────────
   logo: public path served by Vite (files go in frontend/public/clients/)
   e.g.  /clients/ntpc.png   →  frontend/public/clients/ntpc.png

   logoType 'image' → renders <img>.
   If the image fails to load (file missing), card falls back to the
   clean text-badge placeholder automatically via onError.

   When you have the real logo file:
     1. Copy it to  frontend/public/clients/<filename>
     2. No code change needed — the img src is already set.
   ════════════════════════════════════════════════════════════════ */
const clients = [
  {
    id: 'ntpc',
    name: 'NTPC',
    category: 'Power & Energy',
    logo: '/clients/ntpc.webp',
    accentColor: '#0057A8',
    scale: 1.10, // +10%
  },
  {
    id: 'dbcorp',
    name: 'DB CORP LTD',
    category: 'Media & Industrial',
    logo: '/clients/dbcorp.png',
    accentColor: '#1a1a2e',
    scale: 1.10, // +10%
  },
  {
    id: 'gspcl',
    name: 'GSPCL',
    category: 'Petroleum & Gas',
    logo: '/clients/gspcl.webp',
    accentColor: '#006400',
    scale: 1.30, // +30% (Bharat Petroleum)
  },
  {
    id: 'hpcl',
    name: 'HPCL',
    category: 'Oil & Energy',
    logo: '/clients/hpcl.webp',
    accentColor: '#B22222',
    scale: 1.30, // +30%
  },
  {
    id: 'jindal',
    name: 'JINDAL STEEL & POWER',
    category: 'Power & Steel',
    logo: '/clients/jindal.png',
    accentColor: '#003087',
    scale: 1.90, // +90%
  },
  {
    id: 'bhel',
    name: 'BHEL',
    category: 'Heavy Engineering',
    logo: '/clients/bhel.webp',
    accentColor: '#003580',
    scale: 1.05, // +5%
  },
  {
    id: 'indianoil',
    name: 'INDIANOIL',
    category: 'Oil & Gas',
    logo: '/clients/indianoil.webp',
    accentColor: '#C00000',
    scale: 1.25, // +25%
  },
  {
    id: 'tata',
    name: 'TATA',
    category: 'Diversified Industrial',
    logo: '/clients/tata.png',
    accentColor: '#003087',
    scale: 1.10, // +10%
  },
  {
    id: 'adani',
    name: 'ADANI',
    category: 'Energy & Infrastructure',
    logo: '/clients/adani.webp',
    accentColor: '#003A8C',
  },
  {
    id: 'vedanta',
    name: 'VEDANTA',
    category: 'Metals & Mining',
    logo: '/clients/vedanta.webp',
    accentColor: '#8B0000',
  },
  {
    id: 'reliance',
    name: 'RELIANCE',
    category: 'Energy & Petrochemicals',
    logo: '/clients/reliance.webp',
    accentColor: '#003087',
  },
  {
    id: 'larsen',
    name: 'LARSEN & TOUBRO',
    category: 'Engineering & Construction',
    logo: '/clients/larsen.webp',
    accentColor: '#003366',
  },
];

/* ════════════════════════════════════════════════════════════════
   ClientCard  —  shows real logo image; falls back to text badge
   ════════════════════════════════════════════════════════════════ */
function ClientCard({ client }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="ac2-card" data-client={client.id}>
      <div className="ac2-card__inner">
        {!imgFailed ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="ac2-card__logo-img"
            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="ac2-card__logo-text-wrap">
            <span
              className="ac2-card__logo-text"
              style={{ color: client.accentColor }}
            >
              {client.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   Main section
   ════════════════════════════════════════════════════════════════ */
export default function ClientsNetwork() {
  return (
    <section className="ac2-section" aria-label="Our Clients">
      <div className="ac2-container">

        {/* ── Section Heading ── */}
        <div className="ac2-header">
          <h2 className="ac2-heading">
            OUR CLIENTS
            <span className="ac2-heading__underline" />
          </h2>
        </div>

        {/* ── 6×2 Logo Grid ── */}
        <div className="ac2-grid">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

      </div>
    </section>
  );
}


