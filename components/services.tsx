"use client";

import React, { useState } from "react";

export default function ServicesSection() {
  // المفروض الـ state دي تيجي من Context أو Props عشان تسمع في الموقع كله
  // بس حطيتهالك هنا عشان تجرب السكشن لوحده
  const [lang, setLang] = useState<'en' | 'ar'>('ar'); 

  const content = {
    en: {
      sectionTitle: "Our Premium Services",
      sectionSubtitle: "Complete solutions for EV charging infrastructure",
      services: [
        {
          id: 1,
          icon: "⚡",
          title: "Home Charger Installation",
          desc: "Safe and professional installation of AC chargers for villas and private garages with European safety standards.",
        },
        {
          id: 2,
          icon: "🏢",
          title: "Commercial Stations",
          desc: "Supplying DC fast chargers and setting up complete charging hubs for malls, companies, and public parking.",
        },
        {
          id: 3,
          icon: "🛠️",
          title: "Maintenance & Support",
          desc: "24/7 urgent maintenance services with GPS tracking to ensure your chargers are always operating at peak efficiency.",
        }
      ],
      dir: "ltr"
    },
    ar: {
      sectionTitle: "خدماتنا المميزة",
      sectionSubtitle: "حلول متكاملة للبنية التحتية لشحن السيارات الكهربائية",
      services: [
        {
          id: 1,
          icon: "⚡",
          title: "تركيب شواحن الفيلات",
          desc: "تركيب آمن واحترافي لشواحن الـ AC في الفيلات والجراجات الخاصة بأعلى معايير الأمان الأوروبية.",
        },
        {
          id: 2,
          icon: "🏢",
          title: "المحطات التجارية",
          desc: "توريد شواحن الـ DC السريعة وتأسيس محطات متكاملة للمولات، الشركات، والمواقف العامة.",
        },
        {
          id: 3,
          icon: "🛠️",
          title: "الصيانة والدعم الفني",
          desc: "خدمات صيانة فورية على مدار الساعة مع تتبع الـ GPS لضمان عمل أجهزتك بأعلى كفاءة دائماً.",
        }
      ],
      dir: "rtl"
    }
  };

  const t = content[lang];

  return (
    <section id="services" className="bg-slate-50 py-20 px-4 sm:px-6 relative" dir={t.dir}>
      <div className="max-w-6xl mx-auto">
        
        {/* عنوان السكشن - بنفس ستايل الهيدر */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text text-transparent">
              {t.sectionTitle}
            </span>
          </h2>
          <p className="text-[#004b50] text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* شبكة الخدمات (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-[#004b50]/30 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* الأيقونة */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#004b50] group-hover:text-white transition-colors duration-300 shadow-sm">
                {service.icon}
              </div>
              
              {/* تفاصيل الخدمة */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#004b50] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}