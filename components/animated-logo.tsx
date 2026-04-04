"use client";
import React from 'react';

export default function AnimatedLogo() {
  return (
    <div className="w-full flex justify-center py-12 scale-90 md:scale-100" dir="ltr">
      <style>{`
        /* 1. الكلمة نفسها: مخفية تماماً في البدايةوبتترسم ورا الليزر */
        .etched-text {
          fill: transparent;
          stroke: #4B5563; /* لون المسار الرمادي المطفي اللي الليزر بيسيبه وراه */
          stroke-width: 1px;
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          /* الأنيميشن بياخد 8 ثواني وبيكرر نفسه عشان تتفرج عليه براحتك */
          animation: draw 8s ease-in-out infinite; 
        }

        /* 2. رأس الليزر: الخط المضيء الساطع اللي في الصورة بتاعتك */
        .laser-head {
          fill: transparent;
          stroke: #F3F4F6; /* لون جراي/أبيض ساطع جداً */
          stroke-width: 2.5px;
          stroke-linecap: round;
          /* خط طوله 60 بيكسل ومسافة فاضية 1200 عشان يبان كأنه شعاع بيمشي */
          stroke-dasharray: 60 1200; 
          stroke-dashoffset: 1200;
          animation: draw-head 8s ease-in-out infinite;
          /* تأثير الوهج (Glow) اللي بيخلي الخط ينور */
          filter: drop-shadow(0 0 5px #FFFFFF) drop-shadow(0 0 15px #9CA3AF);
        }

        /* مسار حركة الكلمة */
        @keyframes draw {
          0% { stroke-dashoffset: 1200; fill: transparent; }
          40% { stroke-dashoffset: 0; fill: transparent; }
          /* بعد ما الليزر يخلص رسم، الكلمة بتتملي بلون فضي فخم */
          50%, 80% { stroke-dashoffset: 0; fill: rgba(156, 163, 175, 0.9); stroke: rgba(156, 163, 175, 0.3); }
          100% { stroke-dashoffset: 0; fill: transparent; stroke: transparent; }
        }

        /* مسار حركة رأس الليزر المضيء */
        @keyframes draw-head {
          0% { stroke-dashoffset: 1200; opacity: 1; }
          40% { stroke-dashoffset: 0; opacity: 1; }
          /* الليزر بيختفي أول ما الرسم يخلص */
          45%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
      
      <svg
        viewBox="0 0 1000 300"
        className="w-full max-w-[900px] h-auto font-sans"
        style={{ textAnchor: 'middle' }}
      >
        {/* === الطبقة الأولى: الحروف اللي بتترسم خطوة خطوة === */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="etched-text" letterSpacing="0.05em">
          Experience Power
        </text>
        <text x="500" y="220" fontSize="70" fontWeight="200" className="etched-text" letterSpacing="0.3em">
          ENERGY
        </text>

        {/* === الطبقة التانية: شعاع الليزر المضيء اللي بيجري === */}
        <text x="500" y="130" fontSize="75" fontWeight="900" className="laser-head" letterSpacing="0.05em">
          Experience Power
        </text>
        {/* مأخرين الكلمة التانية نص ثانية عشان تدي حركة انسيابية */}
        <text x="500" y="220" fontSize="70" fontWeight="200" className="laser-head" letterSpacing="0.3em" style={{ animationDelay: '0.5s' }}>
          ENERGY
        </text>
      </svg>
    </div>
  );
}