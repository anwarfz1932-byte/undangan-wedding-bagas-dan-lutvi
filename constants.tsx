
import React from 'react';

export const COLORS = {
  wood: '#5C4033',
  cream: '#FDF5E6',
  gold: '#D4AF37',
  deepBrown: '#3D2B1F',
  accent: '#8B4513'
};

export const WEDDING_DATE = new Date('2026-01-31T08:00:00');

export const JAVANESE_MOTIF = (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="parang" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 40 L40 0 M20 40 L40 20 M0 20 L20 0" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#parang)" />
  </svg>
);

export const FLORAL_CORNER = (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,10 Q50,10 50,50 M10,10 Q10,50 50,50 M50,50 Q90,50 90,90 M50,50 Q50,90 90,90" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5"/>
    <path d="M20,10 Q60,20 40,60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <path d="M10,20 Q20,60 60,40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <path d="M10,10 L190,190" stroke="currentColor" strokeWidth="0.2" opacity="0.1"/>
  </svg>
);

export const PETAL_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2C12,2 4,10 4,16C4,20.42 7.58,24 12,24C16.42,24 20,20.42 20,16C20,10 12,2 12,2Z" />
  </svg>
);
