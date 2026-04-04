"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      <style>{`
        /* 1. ده المسار الخافت اللي بيكون ثابت كأنه قاعدة الليد */
        .track {
          fill: rgba(255, 255, 255, 0.02);
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 1px;
        }

        /* 2. ده الليد الجراي المضيء اللي بيجري على الحواف */
        .led-runner {
          fill: none;
          stroke: #D1D5DB; /* لون جراي/فضي فاتح */
          stroke-width: 2.5px;
          stroke-linecap: round;
          /* الخط ده هو سر الحركة: حتة منورة (150) ومسافة ضلمة (1200) */
          stroke-dasharray: 150 1200; 
          stroke-dashoffset: 1200;
          animation: runLed 5s linear infinite;
          /* تأثير الوهج (Glow) لليد الجراي */
          filter: drop-shadow(0 0 5px #D1D5DB) drop-shadow(0 0 15px #9CA3AF);
        }

        /* أنيميشن الجري المتواصل */
        @keyframes runLed {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        {/* === طبقة المسار الثابت (الخلفية) === */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="track" letterSpacing="0.05em">
          Experience Power
        </text>
        <text x="500" y="220" fontSize="70" fontWeight="200" className="track" letterSpacing="0.3em">
          ENERGY
        </text>

        {/* === طبقة الليد الجراي المتحرك === */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="led-runner" letterSpacing="0.05em">
          Experience Power
        </text>
        {/* خلينا الكلمة التانية تبدأ متأخرة شوية عشان تدي شكل أحلى */}
        <text x="500" y="220" fontSize="70" fontWeight="200" className="led-runner" letterSpacing="0.3em" style={{ animationDelay: '2.5s' }}>
          ENERGY
        </text>
      </svg>
    </div>
  );
}