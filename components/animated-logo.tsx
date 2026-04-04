"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      {/* ستايل الـ CSS عشان نخلي الخطوط تترسم وترتعش كأنها ليزر */}
      <style>{`
        .laser-trace {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLaser 6s linear forwards, laserFlicker 0.2s linear infinite;
        }
        
        @keyframes drawLaser {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes laserFlicker {
          0%, 100% { opacity: 1; stroke-width: 1px; }
          50% { opacity: 0.8; stroke-width: 1.2px; }
        }

        .laser-dot {
          animation: laserDotFollow 6s linear forwards;
        }
        
        @keyframes laserDotFollow {
          0% { offset-distance: 0%; opacity: 1; }
          95% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
      
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        <defs>
          {/* لون الليزر الأبيض الناصع مع وهج خفيف */}
          <filter id="laserGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* الحروف كخطوط خارجية (Outlines) رفيعة جداً */}
        {/* Experience Power */}
        <text 
          x="500" 
          y="130" 
          fontSize="75" 
          fontWeight="900" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1" 
          className="laser-trace" 
          filter="url(#laserGlow)"
          letterSpacing="0.05em"
        >
          Experience Power
        </text>
        
        {/* ENERGY */}
        <text 
          x="500" 
          y="220" 
          fontSize="70" 
          fontWeight="200" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1" 
          className="laser-trace" 
          filter="url(#laserGlow)"
          letterSpacing="0.3em" 
          opacity="0.8"
          style={{ animationDelay: '3s' }} /* بيبدأ بعد الكلمة الأولى */
        >
          ENERGY
        </text>

        {/* اختياري: نقطة ليزر حمراء رفيعة "بترسم" الحروف (محتاجة مسار معقد، فخلينا نركز في الخطوط الأول) */}
      </svg>
    </div>
  );
}