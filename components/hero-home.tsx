"use client";
import React from 'react';

export default function HeroHome() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden font-sans border-b border-slate-800">
      
      {/* تأثيرات الإضاءة في الخلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 -z-10"></div>
      
      {/* شبكة خلفية تكنولوجية خفيفة */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 -z-10 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* شارة مضيئة (Badge) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          المستقبل يبدأ هنا
        </div>

        {/* العنوان الرئيسي (تم تظبيط المسافات والتدرج اللوني) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] md:leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
            Experience Power
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Energy
          </span>
        </h1>

        {/* النص الفرعي */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium" dir="rtl">
          شريكك الموثوق في توريد، تركيب، وصيانة شواحن السيارات الكهربائية (EV). حلول طاقة ذكية بأعلى معايير الأمان والتكنولوجيا.
        </p>

        {/* زراير اتخاذ القرار (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" dir="rtl">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
            اطلب معاينة الآن
            <span className="group-hover:animate-bounce text-xl">⚡</span>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center hover:-translate-y-1">
            تصفح خدماتنا
          </button>
        </div>

      </div>
    </section>
  );
}