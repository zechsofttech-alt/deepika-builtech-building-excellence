import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = true, variant = 'color' }) => {
  // Using the Blue/Gold theme from the user's provided logo
  const brandBlue = "#0024ff"; // Bright vibrant blue as in image
  const brandGold = "#c5a059"; // Premium gold as in image
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* The Iconic Circle Logo */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Outer Blue Circle */}
        <circle cx="50" cy="50" r="48" fill={brandBlue} />
        
        {/* Inner White Ring */}
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" opacity="0.8" />
        
        {/* The PEB Triangle (Gold) */}
        <path
          d="M50 20L85 55H15L50 20Z"
          fill={brandGold}
          stroke={brandGold}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        
        {/* The Crane Icon (Inside Triangle) */}
        <g stroke="black" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <line x1="53" y1="35" x2="53" y2="55" /> {/* Mast */}
          <line x1="40" y1="38" x2="65" y2="38" /> {/* Jib */}
          <line x1="43" y1="38" x2="43" y2="48" /> {/* Hook Line */}
          <circle cx="43" cy="50" r="2" fill="none" stroke="black" strokeWidth="1" /> {/* Hook */}
        </g>

        {/* Brand Text inside circle */}
        <text
          x="50"
          y="68"
          textAnchor="middle"
          fill={brandGold}
          style={{ fontSize: '10px', fontWeight: '900', fontFamily: 'Arial, sans-serif' }}
        >
          DEEPIKA
        </text>
        <text
          x="50"
          y="78"
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '4.5px', fontWeight: '600', fontFamily: 'Arial, sans-serif', letterSpacing: '0.1em' }}
        >
          BUILTECH ENGINEERING
        </text>
      </svg>
      
      {showText && (
        <div className="hidden sm:flex flex-col">
          <span className="font-heading font-black text-xl tracking-tighter leading-none text-ink uppercase">
            DEEPIKA
          </span>
          <span className="font-heading font-black text-xl tracking-tighter leading-none text-amber uppercase">
            BUILTECH
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
