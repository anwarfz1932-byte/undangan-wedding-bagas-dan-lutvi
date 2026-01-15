
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

export const ORNAMENT_LEFT = (
  <svg width="60" height="60" viewBox="0 0 100 100" className="fill-[#D4AF37]">
    <path d="M100,0 C80,20 60,30 40,30 C20,30 0,20 0,0 L0,100 C20,80 40,70 60,70 C80,70 100,80 100,100 Z" />
  </svg>
);
