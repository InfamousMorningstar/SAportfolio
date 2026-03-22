import React from 'react';
import { cn } from '@/lib/utils';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 'full' | 'simple' | 'icon';
  color?: string;
  animated?: boolean;
}

export default function Logo({ 
  className, 
  variant = 'full', 
  color = "currentColor", 
  animated = false,
  ...props 
}: LogoProps) {
  
  // The "Apex Shard" - A precision-engineered abstract symbol.
  // Represents: Focus, Control, Ascension.
  // Design: Symmetrical blade-like structure with a central core.
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("select-none", className)}
      aria-label="Salman Ahmad Logo"
      {...props}
    >
      <defs>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className={cn("origin-center", animated && "animate-pulse-slow")}>
        
        {/* Central Core: The Pillar of Stability */}
        {/* A sharp vertical needle that anchors the design */}
        <path 
          d="M50 5 L54 20 L52 85 L50 95 L48 85 L46 20 Z" 
          fill={color} 
          className="transition-all duration-500 ease-out"
          fillOpacity={1}
        />
        
        {/* Wing Left: The Kinetic Drive */}
        {/* Angled blade providing width and stance */}
        <path 
          d="M42 30 L12 85 L38 75 L42 60 Z" 
          fill={color} 
          className="transition-all duration-500 ease-out delay-75"
          fillOpacity={0.9}
        />

        {/* Wing Right: The Kinetic Drive */}
        {/* Mirrored right blade */}
        <path 
          d="M58 30 L88 85 L62 75 L58 60 Z" 
          fill={color} 
          className="transition-all duration-500 ease-out delay-75"
          fillOpacity={0.9}
        />

        {/* Detail Lines (Only in full variant) */}
        {variant === 'full' && (
          <g opacity="0.5">
             <path d="M50 25 L50 75" stroke={color} strokeWidth="0.5" />
             {/* Tech notches */}
             <path d="M42 30 L38 38" stroke={color} strokeWidth="0.5" />
             <path d="M58 30 L62 38" stroke={color} strokeWidth="0.5" />
          </g>
        )}
      </g>
    </svg>
  );
}
