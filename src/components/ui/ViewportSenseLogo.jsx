import React from 'react';

const ViewportSenseLogo = ({ 
  size = 'md', 
  className = '', 
  showText = true, 
  variant = 'full' 
}) => {
  const sizeMap = {
    sm: { width: 24, height: 24, textSize: 'text-sm' },
    md: { width: 32, height: 32, textSize: 'text-base' },
    lg: { width: 48, height: 48, textSize: 'text-lg' },
    xl: { width: 64, height: 64, textSize: 'text-xl' }
  };

  const { width, height, textSize } = sizeMap[size];

  const LogoSVG = ({ className: svgClassName = '' }) => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      {/* Main triangular ruler body */}
      <path d="M32 6 L58 50 L6 50 Z" fill="url(#gradient)" stroke="#1e40af" strokeWidth="1.5"/>
      
      {/* Ruler edge markings - bottom edge (horizontal) */}
      <line x1="10" y1="50" x2="10" y2="46" stroke="white" strokeWidth="1" opacity="0.8"/>
      <line x1="14" y1="50" x2="14" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="18" y1="50" x2="18" y2="46" stroke="white" strokeWidth="1" opacity="0.8"/>
      <line x1="22" y1="50" x2="22" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="26" y1="50" x2="26" y2="45" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <line x1="30" y1="50" x2="30" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="34" y1="50" x2="34" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="38" y1="50" x2="38" y2="45" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <line x1="42" y1="50" x2="42" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="46" y1="50" x2="46" y2="46" stroke="white" strokeWidth="1" opacity="0.8"/>
      <line x1="50" y1="50" x2="50" y2="47" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <line x1="54" y1="50" x2="54" y2="46" stroke="white" strokeWidth="1" opacity="0.8"/>
      
      {/* Left edge markings (angled) */}
      <g transform="rotate(-60 32 32)">
        <line x1="20" y1="32" x2="22" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="24" y1="32" x2="27" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
        <line x1="28" y1="32" x2="30" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="32" y1="32" x2="35" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
        <line x1="36" y1="32" x2="38" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="40" y1="32" x2="43" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
      </g>
      
      {/* Right edge markings (angled) */}
      <g transform="rotate(60 32 32)">
        <line x1="20" y1="32" x2="22" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="24" y1="32" x2="27" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
        <line x1="28" y1="32" x2="30" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="32" y1="32" x2="35" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
        <line x1="36" y1="32" x2="38" y2="32" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="40" y1="32" x2="43" y2="32" stroke="white" strokeWidth="1" opacity="0.8"/>
      </g>
      
      {/* Measurement numbers */}
      <text x="26" y="44" fill="white" fontSize="3" opacity="0.9" textAnchor="middle">5</text>
      <text x="38" y="44" fill="white" fontSize="3" opacity="0.9" textAnchor="middle">10</text>
      
      {/* Central hole like real rulers */}
      <circle cx="32" cy="32" r="3" fill="none" stroke="white" strokeWidth="1" opacity="0.6"/>
      <circle cx="32" cy="32" r="1.5" fill="rgba(255,255,255,0.1)"/>
      
      {/* Brand marking */}
      <text x="32" y="28" fill="white" fontSize="4" opacity="0.7" textAnchor="middle" fontWeight="bold">VS</text>
      
      {/* Viewport indicators - smaller dots positioned like measurement points */}
      <circle cx="20" cy="42" r="1" fill="#60a5fa" opacity="0.9"/>
      <circle cx="32" cy="20" r="1" fill="#34d399" opacity="0.9"/>
      <circle cx="44" cy="42" r="1" fill="#a78bfa" opacity="0.9"/>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return <LogoSVG className={className} />;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <LogoSVG />
      {showText && (
        <span className={`font-semibold text-gray-900 ${textSize}`}>
          Viewport Sense
        </span>
      )}
    </div>
  );
};

export default ViewportSenseLogo;