"use client";
import React, { useState } from "react";

export default function HeroHome() {
  const [lang, setLang] = useState("ar");

  const t = {
    ar: {
      title: "Experience Power Energy",
      subtitle: "شريكك الموثوق في توريد، تركيب، وصيانة شواحن السيارات الكهربائية (EV). حلول طاقة ذكية بأعلى معايير الأمان والتكنولوجيا.",
      btn1: "طلب صيانة فورية",
      btn2: "متجر قطع الغيار",
      s1_title: "توريد وتركيب",
      s1_desc: "تركيب كافة أنواع شواحن السيارات للمنازل والشركات والمولات بمعايير هندسية دقيقة.",
      s2_title: "صيانة دورية",
      s2_desc: "عقود صيانة دورية لضمان كفاءة الشاحن، حماية بطارية سيارتك، وإطالة العمر الافتراضي.",
      s3_title: "قطع غيار أصلية",
      s3_desc: "نوفر كافة الملحقات، كوابل الشحن، وقطع الغيار الأصلية بضمان معتمد.",
      s4_title: "دعم المواقع الذكي",
      s4_desc: "نظام تتبع ذكي؛ حدد موقع شاحنك بضغطة زر ليصلك فريقنا الهندسي فوراً في حالات الطوارئ.",
      client_title: "هل أنت عميل مسجل لدينا؟",
      client_desc: "عبر بوابتنا الذكية، يمكنك الآن الإبلاغ عن أي مشكلة فنية فقط بتحديد موقع الشاحن الخاص بك على الخريطة وسيتوجه الدعم الفني إليك مباشرة."
    },
    en: {
      title: "Experience Power Energy",
      subtitle: "Your trusted partner for supplying, installing, and maintaining EV chargers. Smart energy solutions with the highest safety standards.",
      btn1: "Emergency Support",
      btn2: "Spare Parts Store",
      s1_title: "Supply & Install",
      s1_desc: "Professional installation of all EV charger types for homes, businesses, and malls.",
      s2_title: "Routine Maintenance",
      s2_desc: "Annual maintenance contracts to ensure charger efficiency and protect your EV battery.",
      s3_title: "Genuine Parts",
      s3_desc: "We provide all accessories, charging cables, and certified spare parts with warranty.",
      s4_title: "Smart Location Support",
      s4_desc: "Smart tracking system; pinpoint your location with one click for instant technical support.",
      client_title: "Are you a registered client?",
      client_desc: "Through our smart portal, you can report any technical issue simply by pinpointing your charger's location on the map, and our support team will dispatch immediately."
    }
  };

  const currentLang = t[lang as keyof typeof t];
  const isRtl = lang === "ar";

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden transition-all duration-500" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-20 flex justify-between items-center p-6 mx-auto max-w-7xl">
        <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <span className="text-blue-500">⚡</span> EPE
        </div>
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
          {lang === "ar" ? "English" : "عربي"}
        </button>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">
            {currentLang.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            {currentLang.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="p-6 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group">
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{currentLang.s1_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{currentLang.s1_desc}</p>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all group">
            <div className="w-12 h-12 mb-6 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{currentLang.s2_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{currentLang.s2_desc}</p>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-amber-500/50 hover:bg-slate-800/50 transition-all group">
            <div className="w-12 h-12 mb-6 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{currentLang.s3_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{currentLang.s3_desc}</p>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 blur-xl"></div>
            <div className="w-12 h-12 mb-6 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{currentLang.s4_title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{currentLang.s4_desc}</p>
          </div>
        </div>

        <div className="relative p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-slate-900 to-black border border-slate-800 shadow-2xl overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">{currentLang.client_title}</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">{currentLang.client_desc}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {currentLang.btn1}
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                {currentLang.btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}