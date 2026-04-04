"use client";
import React from 'react';
import AnimatedLogo from './animated-logo';

export default function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030303] text-slate-200 font-sans border-b border-white/5" dir="rtl">
      
      {/* إضاءة استوديو خافتة جداً من الأعلى (ستايل كشف السيارات) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600/15 via-[#030303] to-[#030303] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center mt-12">
        
        {/* شريط علوي بسيط جداً بلمسة هندسية */}
        <div className="flex justify-center items-center gap-4 mb-8 opacity-60">
           <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-slate-400"></div>
           <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-semibold" dir="ltr">Premium EV Solutions</span>
           <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-slate-400"></div>
        </div>

        {/* عنوان رئيسي بفخامة وثقة */}
        <AnimatedLogo /> font-medium tracking-tight mb-6 leading-[1.1]" dir="ltr">
          <span className="block text-white mb-2 tracking-normal drop-shadow-sm">
            Experience Power
          </span>
          {/* كلمة Energy بلون فضي معدني خافت ومسافات واسعة */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-700 font-light tracking-[0.15em]">
            ENERGY
          </span>
        </h1>

        {/* نص فرعي راقي ومباشر */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400/80 mb-16 leading-relaxed font-light">
          نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية. 
          <br className="hidden md:block" />
          توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
        </p>

        {/* زراير بستايل تيسلا (ألوان صلبة وحادة) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-64 px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-sm font-semibold text-sm uppercase tracking-wide transition-colors duration-300">
            اطلب معاينة هندسية
          </button>
          
          <button className="w-full sm:w-64 px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white hover:bg-white/5 rounded-sm font-semibold text-sm uppercase tracking-wide transition-all duration-300 backdrop-blur-sm">
            استكشف خدماتنا
          </button>
        </div>

      </div>
    </section>
  );
}