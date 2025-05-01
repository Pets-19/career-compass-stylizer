
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg 
        width="44" 
        height="44" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="text-blue-500"
      >
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="rgba(59, 130, 246, 0.1)" 
        />
        <path 
          d="M2 17L12 22L22 17" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M2 12L12 17L22 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <circle 
          cx="12" 
          cy="12" 
          r="2" 
          fill="currentColor" 
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}
