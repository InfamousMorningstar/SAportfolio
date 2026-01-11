import React from 'react';

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function CardWrapper({ children, className = '' }: CardWrapperProps) {
  return (
    <div className={`max-w-7xl mx-auto rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 relative overflow-hidden group ${className}`}>
       {/* Subtle Gradient Glow */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-1000" />
       
       {/* Content */}
       <div className="relative z-10">
         {children}
       </div>
    </div>
  );
}
