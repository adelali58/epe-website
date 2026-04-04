"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      <style>{`
        /* 1. الكلمة بتترسم ببطء شديد ورا الليزر */
        .etched-text {
          fill: transparent;
          stroke: #4B5563; 
          stroke-width: 0.8px;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          /* زودنا الوقت لـ 15 ثانية عشان يبقى سلو موشن حقيقي */
          animation: draw-slow 15s ease-in-out infinite; 
        }

        /* 2. رأس الليزر المضيء (الليد الجراي) بحركة بطيئة جداً */
        .laser-head {
          fill: transparent;
          stroke: #F3F4F6; 
          stroke-width: 2px;
          stroke-linecap: round;
          stroke-dasharray: 40 1500; 
          stroke-dashoffset: 1500;
          animation: draw-head-slow 15s ease-in-out infinite;
          filter: drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 20px #9CA3AF);
        }

        /* أنيميشن رسم الحروف السلو موشن */
        @keyframes draw-slow {
          0% { stroke-dashoffset: 1500; fill: transparent; }
          45% { stroke-dashoffset: 0; fill: transparent; }
          /* الكلمة بتنور وتثبت فترة طويلة عشان العميل يشوفها */
          55%, 85% { stroke-dashoffset: 0; fill: rgba(209, 213, 219, 0.8); stroke: rgba(156, 163, 175, 0.2); }
          100% { stroke-dashoffset: 0; fill: transparent; stroke: transparent; }
        }

        /* أنيميشن رأس الليزر السلو موشن */
        @keyframes draw-head-slow {
          0% { stroke-dashoffset: 1500; opacity: 1; }
          45% { stroke-dashoffset: 0; opacity: 1; }
          50%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
      
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        {/* الطبقة الأولى: رسم الحروف */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="etched-text" letterSpacing="0.05em">
          Experience Power
        </text>
        <text x="500" y="220" fontSize="70" fontWeight="200" className="etched-text" letterSpacing="0.3em">
          ENERGY
        </text>

        {/* الطبقة الثانية: رأس الليزر المضيء */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="laser-head" letterSpacing="0.05em">
          Experience Power
        </text>
        {/* تأخير بسيط للكلمة التانية عشان الانسيابية */}
        <text x="500" y="220" fontSize="70" fontWeight="200" className="laser-head" letterSpacing="0.3em" style={{ animationDelay: '1s' }}>
          ENERGY
        </text>
      </svg>
    </div>
  );
}