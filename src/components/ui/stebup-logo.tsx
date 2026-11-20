import React from 'react';

interface StebupLogoProps {
  /** Color of the designed stepped "E" (matches the active page theme color) */
  accentColor?: string;
  /** Color of ST, B, and UP (defaults to crisp white on dark surfaces) */
  primaryColor?: string;
  className?: string;
}

const SteppedEAndB = ({
  primaryColor,
  accentColor,
}: {
  primaryColor: string;
  accentColor: string;
}) => (
  <>
    {/* Designed Stepped E (takes the respective page color) */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="
        M148 28 H177 A3 3 0 0 1 180 31 V37 A3 3 0 0 1 177 40 H148 A3 3 0 0 1 145 37 V31 A3 3 0 0 1 148 28 Z
        M151 31.8 A2.2 2.2 0 1 0 151 36.2 A2.2 2.2 0 1 0 151 31.8 Z
        M136 54 H177 A3 3 0 0 1 180 57 V63 A3 3 0 0 1 177 66 H136 A3 3 0 0 1 133 63 V57 A3 3 0 0 1 136 54 Z
        M139 57.8 A2.2 2.2 0 1 0 139 62.2 A2.2 2.2 0 1 0 139 57.8 Z
        M124 80 H177 A3 3 0 0 1 180 83 V89 A3 3 0 0 1 177 92 H124 A3 3 0 0 1 121 89 V83 A3 3 0 0 1 124 80 Z
        M127 83.8 A2.2 2.2 0 1 0 127 88.2 A2.2 2.2 0 1 0 127 83.8 Z
      "
      fill={accentColor}
      style={{ transition: 'fill 300ms ease' }}
    />
    <path
      d="M127 80 V60 H133 M139 54 V34 H145"
      fill="none"
      stroke={accentColor}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'stroke 300ms ease' }}
    />
    <circle
      cx="127"
      cy="60"
      r="2.1"
      fill={accentColor}
      style={{ transition: 'fill 300ms ease' }}
    />
    <circle
      cx="139"
      cy="34"
      r="2.1"
      fill={accentColor}
      style={{ transition: 'fill 300ms ease' }}
    />

    {/* Stemless Geometric B */}
    <path
      d="
        M188 28 H215 C228.5 28 237 34 237 43.5 C237 50.5 232.5 55.8 224.5 58.8 C234 61.8 239 67.8 239 76 C239 85.8 229.5 92 215 92 H188 C186.9 92 186 91.1 186 90 V82 C186 80.9 186.9 80 188 80 H213.5 C220.5 80 224 77.5 224 73 C224 68.5 220.5 66 213.5 66 H188 C186.9 66 186 65.1 186 64 V56 C186 54.9 186.9 54 188 54 H212.5 C219 54 222.5 51.5 222.5 47 C222.5 42.8 219 40 212.5 40 H188 C186.9 40 186 39.1 186 38 V30 C186 28.9 186.9 28 188 28 Z
      "
      fill={primaryColor}
      style={{ transition: 'fill 300ms ease' }}
    />
  </>
);

export const StebupWordmark: React.FC<StebupLogoProps> = ({
  accentColor = '#A1A1AA',
  primaryColor = '#F4F4F6',
  className = 'h-5 w-[88px]',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="24 22 332 76"
    preserveAspectRatio="xMinYMid meet"
    fill="none"
    className={`block shrink-0 ${className}`}
    aria-label="Stebup"
    role="img"
  >
    <text
      x="128"
      y="92"
      textAnchor="end"
      fill={primaryColor}
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="91"
      fontWeight="700"
      letterSpacing="-3.5"
    >
      ST
    </text>
    <SteppedEAndB primaryColor={primaryColor} accentColor={accentColor} />
    <text
      x="244"
      y="92"
      textAnchor="start"
      fill={primaryColor}
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="91"
      fontWeight="700"
      letterSpacing="-3.5"
    >
      UP
    </text>
  </svg>
);

export const StebupMark: React.FC<StebupLogoProps> = ({
  accentColor = '#A1A1AA',
  primaryColor = '#F4F4F6',
  className = 'h-8 w-auto',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="116 22 128 76"
    fill="none"
    className={className}
    aria-label="Stebup mark"
    role="img"
  >
    <SteppedEAndB primaryColor={primaryColor} accentColor={accentColor} />
  </svg>
);
