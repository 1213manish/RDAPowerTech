import React from 'react';

export default function TrustedBrandsShowcase() {
  const brandLogos = [
    {
      name: 'ABB',
      svg: (
        <svg viewBox="0 0 100 35" className="h-9 md:h-11 w-auto fill-current">
          <text x="0" y="28" fontFamily="'Arial Black', Impact, sans-serif" fontSize="32" fontWeight="900" letterSpacing="-1">ABB</text>
        </svg>
      )
    },
    {
      name: 'Siemens',
      svg: (
        <svg viewBox="0 0 145 35" className="h-8 md:h-10 w-auto fill-current">
          <text x="0" y="26" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="900" letterSpacing="3">SIEMENS</text>
        </svg>
      )
    },
    {
      name: 'Schneider Electric',
      svg: (
        <svg viewBox="0 0 170 35" className="h-9 md:h-11 w-auto fill-current">
          <g>
            <rect x="0" y="5" width="10" height="25" fill="currentColor" />
            <text x="16" y="20" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800">Schneider</text>
            <text x="16" y="31" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1">ELECTRIC</text>
          </g>
        </svg>
      )
    },
    {
      name: 'L&T Electrical',
      svg: (
        <svg viewBox="0 0 185 35" className="h-9 md:h-11 w-auto fill-current">
          <g>
            <rect x="0" y="4" width="34" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
            <text x="4" y="23" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="900">L&T</text>
            <text x="40" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800">L&T Electrical</text>
            <text x="40" y="29" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="600" letterSpacing="1">& AUTOMATION</text>
          </g>
        </svg>
      )
    },
    {
      name: 'Phoenix Contact',
      svg: (
        <svg viewBox="0 0 175 35" className="h-9 md:h-11 w-auto fill-current">
          <g>
            <polygon points="0,6 18,6 26,17.5 18,29 0,29 8,17.5" />
            <text x="32" y="19" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" letterSpacing="1">PHOENIX</text>
            <text x="32" y="30" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="1.5">CONTACT</text>
          </g>
        </svg>
      )
    },
    {
      name: 'Eaton',
      svg: (
        <svg viewBox="0 0 120 35" className="h-9 md:h-11 w-auto fill-current">
          <text x="0" y="28" fontFamily="'Arial Black', Impact, sans-serif" fontSize="30" fontWeight="900" letterSpacing="-1">EATON</text>
        </svg>
      )
    },
    {
      name: 'Mitsubishi Electric',
      svg: (
        <svg viewBox="0 0 190 35" className="h-9 md:h-11 w-auto fill-current">
          <g>
            <polygon points="12,5 18,15 6,15" />
            <polygon points="18,15 24,25 12,25" />
            <polygon points="6,15 12,25 0,25" />
            <text x="30" y="18" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.5">MITSUBISHI</text>
            <text x="30" y="29" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1">ELECTRIC</text>
          </g>
        </svg>
      )
    },
    {
      name: 'Yaskawa',
      svg: (
        <svg viewBox="0 0 140 35" className="h-8 md:h-10 w-auto fill-current">
          <text x="0" y="26" fontFamily="'Arial Black', sans-serif" fontSize="24" fontWeight="900" letterSpacing="1">YASKAWA</text>
        </svg>
      )
    },
    {
      name: 'Delta Electronics',
      svg: (
        <svg viewBox="0 0 130 35" className="h-8 md:h-10 w-auto fill-current">
          <g>
            <polygon points="12,4 23,26 1,26" />
            <text x="28" y="24" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">DELTA</text>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#FFFFFF] pt-[72px] pb-[52px] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1320px] w-full mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Title Header with Divider Lines & Soft Glow */}
        <div
          className="w-full flex items-center justify-center gap-6 max-w-[1100px]"
          style={{ marginBottom: '28px' }}
        >
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#248BFF]/40 to-[#248BFF] shadow-[0_0_8px_rgba(36,139,255,0.4)]" />
          <h3 className="text-[#0F172A] text-base md:text-lg font-extrabold tracking-[0.25em] uppercase text-center shrink-0">
            OUR PARTNERS
          </h3>
          <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#248BFF]/40 to-[#248BFF] shadow-[0_0_8px_rgba(36,139,255,0.4)]" />
        </div>

        {/* Logos Flex Grid */}
        <div
          className="w-full flex flex-wrap items-center justify-center gap-x-[70px] gap-y-[32px] max-w-[1200px] mx-auto"
        >
          {brandLogos.map((brand, idx) => (
            <div
              key={idx}
              className="text-[#475569] opacity-70 hover:opacity-100 hover:text-[#248BFF] transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-108 hover:drop-shadow-[0_4px_16px_rgba(36,139,255,0.35)] cursor-pointer flex items-center justify-center h-12 md:h-14"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
