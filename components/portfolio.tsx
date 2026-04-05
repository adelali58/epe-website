"use client";
import React from 'react';

const projects = [
  {
    title: "محطات الشحن الحكومية",
    description: "تنفيذ وتجهيز البنية التحتية وسيرفرات إدارة محطات الشحن وفق المواصفات والسيناريوهات الحكومية القياسية.",
    icon: "🏢",
    category: "مشاريع قومية"
  },
  {
    title: "تركيب شواحن Ultium PowerUP",
    description: "توريد وتركيب أجهزة الشحن المتقدمة (Model 3004) مع تأسيس الكابلات وضمان كفاءة التشغيل العالية.",
    icon: "🔌",
    category: "محطات شحن"
  },
  {
    title: "نظام الإدارة الذكي (EPE App)",
    description: "تطوير وربط محطات الشحن بتطبيق موبايل وسيرفرات سحابية لمتابعة الاستهلاك والتحكم عن بعد لحظياً.",
    icon: "📱",
    category: "أنظمة برمجية"
  },
  {
    title: "أنظمة التحكم والتأمين",
    description: "تركيب أنظمة حماية ذكية وانتركم متكامل لضمان أمان محطات الشحن الخاصة وعزل الدوائر الكهربائية.",
    icon: "🛡️",
    category: "تحكم وحماية"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-[#050505]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            سابقة <span className="text-blue-500">أعمالنا</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            نفخر بتنفيذ أحدث محطات الشحن والأنظمة الذكية بأعلى معايير الجودة والأمان.
          </p>
        </div>

        {/* شبكة الأعمال */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* تأثير إضاءة */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* أيقونة المشروع */}
              <div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-2xl bg-slate-950 border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <span className="text-4xl">{project.icon}</span>
              </div>
              
              {/* تفاصيل المشروع */}
              <div className="relative z-10 text-center sm:text-right flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-bold mb-3 border border-slate-700">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}