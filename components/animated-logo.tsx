"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#A0AEC0" stopOpacity="1" />
            <stop offset="100%" stopColor="#718096" stopOpacity="1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="meteorGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        <text x="500" y="130" fontSize="75" fontWeight="900" fill="url(#textGradient)" letterSpacing="0.05em">
          Experience Power
        </text>
        <text x="500" y="220" fontSize="70" fontWeight="200" fill="url(#textGradient)" letterSpacing="0.3em" opacity="0.8">
          ENERGY
        </text>

        <ellipse
          id="orbitPath"
          cx="500"
          cy="160"
          rx="470"
          ry="130"
          fill="none"
          stroke="none"
        />

        <circle r="12" fill="url(#meteorGradient)" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
        
         <circle r="6" fill="url(#meteorGradient)" filter="url(#glow)" opacity="0.5">
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="0.1s">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}