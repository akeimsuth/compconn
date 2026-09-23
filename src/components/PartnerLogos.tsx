import React, { useState } from 'react';

/**
 * High-fidelity vector and asset logos for COMPconn's certified technology partners:
 * 1. Microsoft Partner (microsoft.webp)
 * 2. Fortinet Engage Advocate Partner
 * 3. Sophos Certified Partner
 * 4. Ermes Intelligent Anti Phishing (ermes.webp)
 * 5. GFI Partner
 * 6. BDRSuite by Vembu
 */

export const MicrosoftPartnerLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  const [useFallback, setUseFallback] = useState(false);

  if (!useFallback) {
    return (
      <img
        src="/microsoft.webp"
        alt="Microsoft Partner"
        referrerPolicy="no-referrer"
        onError={() => setUseFallback(true)}
        className={`max-h-[46px] w-auto object-contain select-none ${className}`}
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`} title="Microsoft Partner">
      <svg viewBox="0 0 260 70" className="h-full w-auto max-h-[48px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Microsoft 4-Color Grid */}
        <g transform="translate(6, 12)">
          <rect x="0" y="0" width="21" height="21" fill="#F25022" rx="1" />
          <rect x="25" y="0" width="21" height="21" fill="#7FBA00" rx="1" />
          <rect x="0" y="25" width="21" height="21" fill="#00A4EF" rx="1" />
          <rect x="25" y="25" width="21" height="21" fill="#FFB900" rx="1" />
        </g>

        {/* Microsoft Wordmark */}
        <text
          x="64"
          y="32"
          fill="#737373"
          fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="-0.01em"
        >
          Microsoft
        </text>

        {/* Partner Designation */}
        <text
          x="64"
          y="55"
          fill="#737373"
          fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
          fontSize="23"
          fontWeight="600"
          letterSpacing="-0.01em"
        >
          Partner
        </text>
      </svg>
    </div>
  );
};

export const ErmesLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  const [useFallback, setUseFallback] = useState(false);

  if (!useFallback) {
    return (
      <img
        src="/ermes.webp"
        alt="Ermes Intelligent Anti Phishing"
        referrerPolicy="no-referrer"
        onError={() => setUseFallback(true)}
        className={`max-h-[44px] w-auto object-contain select-none ${className}`}
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`} title="Ermes Intelligent Anti Phishing">
      <svg viewBox="0 0 280 72" className="h-full w-auto max-h-[48px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ermes Winged Emblem */}
        <g transform="translate(6, 12)">
          {/* Curved Visor Arc */}
          <path
            d="M 40,4 C 42,16 38,32 20,44 C 14,34 16,18 40,4 Z"
            stroke="#062B55"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Upper Wing Feather */}
          <path
            d="M 4,14 C 2,14 2,19 10,19 L 23,19"
            stroke="#062B55"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Lower Wing Feather */}
          <path
            d="M 11,26 C 8,26 8,31 17,31 L 26,31"
            stroke="#062B55"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Center Joint Pivot Circle */}
          <circle cx="26" cy="28" r="3.2" fill="#00D26A" stroke="#062B55" strokeWidth="2.5" />
        </g>

        {/* ERMES Wordmark */}
        <text
          x="62"
          y="36"
          fill="#062B55"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="28"
          fontWeight="900"
          letterSpacing="0.06em"
        >
          ERMES
        </text>

        {/* Intelligent Anti Phishing Subtext */}
        <text
          x="63"
          y="54"
          fill="#334155"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="0.01em"
        >
          Intelligent Anti Phishing
        </text>

        {/* Cyber Security Accent Indicator */}
        <circle cx="220" cy="51" r="2.5" fill="#00D26A" />
      </svg>
    </div>
  );
};

export const FortinetEngageLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`inline-flex items-center select-none ${className}`} title="Fortinet Engage Advocate Partner">
    <svg viewBox="0 0 320 80" className="h-full w-auto max-h-[48px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fortinet Iconic Red Blocks */}
      <g transform="translate(4, 18)">
        <rect x="0" y="0" width="16" height="8" rx="2" fill="#DA291C" />
        <rect x="0" y="12" width="8" height="8" rx="2" fill="#DA291C" />
        <rect x="12" y="12" width="16" height="8" rx="2" fill="#DA291C" />
        <rect x="20" y="0" width="8" height="8" rx="2" fill="#DA291C" />
        <rect x="0" y="24" width="16" height="8" rx="2" fill="#DA291C" />
        <rect x="20" y="24" width="8" height="8" rx="2" fill="#DA291C" />
      </g>

      {/* FORTINET Wordmark */}
      <text
        x="42"
        y="42"
        fill="#062B55"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        FORTINET
      </text>

      {/* ENGAGE ADVOCATE PARTNER Subtext */}
      <g transform="translate(42, 60)">
        <text
          x="0"
          y="0"
          fill="#DA291C"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.14em"
        >
          ENGAGE ADVOCATE PARTNER
        </text>
      </g>

      {/* Decorative Brand Accent Dot */}
      <circle cx="310" cy="56" r="3" fill="#DA291C" />
    </svg>
  </div>
);

export const SophosLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`inline-flex items-center select-none ${className}`} title="Sophos Partner">
    <svg viewBox="0 0 240 70" className="h-full w-auto max-h-[46px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sophosOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="50%" stopColor="#F26522" />
          <stop offset="100%" stopColor="#C8480A" />
        </linearGradient>
      </defs>

      {/* Iconic Sophos Tilted Parallelogram / Rhombus Ring */}
      <g transform="translate(6, 12)">
        <path
          d="M24 2 L48 2 C51.5 2 54 4.5 53 8 L42 42 C41 45.5 38 48 34.5 48 L10.5 48 C7 48 4.5 45.5 5.5 42 L16.5 8 C17.5 4.5 20.5 2 24 2 Z"
          stroke="url(#sophosOrangeGrad)"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* SOPHOS Wordmark */}
      <text
        x="72"
        y="45"
        fill="#062B55"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="30"
        fontWeight="800"
        letterSpacing="0.04em"
      >
        SOPHOS
      </text>
    </svg>
  </div>
);

export const GfiPartnerLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`inline-flex items-center select-none ${className}`} title="GFI Partner">
    <svg viewBox="0 0 220 70" className="h-full w-auto max-h-[46px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* GF in Italic Bold Dark */}
      <text
        x="6"
        y="46"
        fill="#111827"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="36"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="-0.03em"
      >
        GF
      </text>

      {/* Distinct Blue "I" Pill */}
      <rect
        x="63"
        y="18"
        width="11"
        height="32"
        rx="2.5"
        transform="skewX(-14)"
        fill="#087FEA"
      />

      {/* Partner in Italic Dark */}
      <text
        x="86"
        y="46"
        fill="#111827"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="800"
        fontStyle="italic"
        letterSpacing="-0.01em"
      >
        Partner
      </text>
    </svg>
  </div>
);

export const BdrSuiteLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`inline-flex items-center select-none ${className}`} title="BDRSuite by Vembu">
    <svg viewBox="0 0 220 76" className="h-full w-auto max-h-[48px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* BDR in Dark Charcoal/Navy */}
      <text
        x="6"
        y="42"
        fill="#0F172A"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        BDR
      </text>

      {/* Suite in Vibrant Red */}
      <text
        x="80"
        y="42"
        fill="#D32F2F"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        Suite
      </text>

      {/* Thin Horizontal Divider Rule */}
      <line x1="6" y1="52" x2="214" y2="52" stroke="#B0BEC5" strokeWidth="2.5" strokeLinecap="round" />

      {/* "by vembu" underneath rule */}
      <text
        x="122"
        y="68"
        fill="#64748B"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11.5"
        fontWeight="600"
      >
        <tspan fill="#D32F2F" fontWeight="800">by </tspan>
        vembu
      </text>
    </svg>
  </div>
);

export const PARTNERS = [
  {
    id: 'microsoft',
    name: 'Microsoft Partner',
    tier: 'Certified Cloud & Solution Partner',
    Component: MicrosoftPartnerLogo,
    category: 'Microsoft 365, Azure Cloud & Enterprise Productivity'
  },
  {
    id: 'fortinet',
    name: 'Fortinet Engage Advocate Partner',
    tier: 'Engage Advocate Partner',
    Component: FortinetEngageLogo,
    category: 'Enterprise Firewall & Zero Trust Network Security'
  },
  {
    id: 'sophos',
    name: 'Sophos Certified Partner',
    tier: 'Certified Security Partner',
    Component: SophosLogo,
    category: 'Next-Gen Endpoint Detection & Managed Threat Response'
  },
  {
    id: 'ermes',
    name: 'Ermes Intelligent Anti Phishing',
    tier: 'Technology & AI Security Partner',
    Component: ErmesLogo,
    category: 'Intelligent Anti-Phishing & Automated Web Protection'
  },
  {
    id: 'gfi',
    name: 'GFI Partner',
    tier: 'Authorized Solutions Partner',
    Component: GfiPartnerLogo,
    category: 'Network Vulnerability, Mail Security & Archiving'
  },
  {
    id: 'bdrsuite',
    name: 'BDRSuite by Vembu',
    tier: 'Cloud Backup & Disaster Recovery Partner',
    Component: BdrSuiteLogo,
    category: 'Enterprise Backup, Replication & Ransomware Recovery'
  }
];
