"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      {/* الـ SVG هو المسرح اللي هتحصل عليه الحركة */}
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        <defs>
          {/* 1. تدرج لوني فضي فخم للحروف نفسها (ستايل مرسيدس) */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#A0AEC0" stopOpacity="1" />
            <stop offset="100%" stopColor="#718096" stopOpacity="1" />
          </linearGradient>

          {/* 2. تأثير الوهج (Glow) للشهاب */}
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 3. لون الشهاب المضيء (أبيض ناصع مع أزرق سماوي) */}
          <radialGradient id="meteorGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 4. الحروف نفسها (اسم الشركة بالكامل) */}
        <text x="500" y="130" fontSize="75" fontWeight="900" fill="url(#textGradient)" letterSpacing="0.05em">
          Experience Power
        </text>
        <text x="500" y="220" fontSize="70" fontWeight="200" fill="url(#textGradient)" letterSpacing="0.3em opacity-80">
          ENERGY
        </text>

        {/* 5. المسار الخفي اللي الشهاب هيلف عليه (شكل بيضاوي حول الكلمة) */}
        <ellipse
          id="orbitPath"
          cx="500"
          cy="160"
          rx="470"
          ry="130"
          fill="none"
          stroke="none"
        />

        {/* 6. الشهاب المضيء نفسه (دائرة مع وهج) */}
        <circle r="12" fill="url(#meteorGradient)" filter="url(#glow)">
          {/* حركة الشهاب على المسار */}
          <animateMotion
            dur="4s" {/* سرعة اللفة (4 ثواني) */}
            repeatCount="indefinite" {/* يفضل يلف للأبد */}
            rotate="auto"
          >
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
        
        {/* ذيل الشهاب (دائرة تانية أصغر وخفت) */}
         <circle r="6" fill="url(#meteorGradient)" filter="url(#glow)" opacity="0.5">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            rotate="auto"
            begin="0.1s" {/* بيبدأ متأخر سنة عشان يبان كأنه ذيل */}
          >
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>

      </svg>
    </div>
  );
}