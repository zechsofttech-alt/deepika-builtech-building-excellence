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
      <div className="relative w-12 h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden rounded-full shadow-lg border border-surface-mid">
        <picture>
          <source srcSet="/assets/logo-bg-blue.webp" type="image/webp" />
          <img 
            src="/assets/logo-bg-blue.png" 
            alt="Deepika Builtech Engineering logo" 
            width="56"
            height="56"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-black text-lg lg:text-xl tracking-tighter leading-none uppercase text-amber">
            DEEPIKA
          </span>
          <span className="font-heading font-black text-lg lg:text-xl tracking-tighter leading-none text-amber uppercase">
            BUILTECH
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;


