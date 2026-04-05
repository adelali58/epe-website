"use client";
import React from 'react';

const services = [
  {
    title: "توريد وتركيب الشواحن",
    description: "نوفر أحدث أجهزة شحن السيارات الكهربائية (AC & DC) مع تركيب هندسي مطابق للمواصفات العالمية.",
    icon: "🔌",
    tag: "الأكثر طلباً"
  },
  {
    title: "صيانة Tesla Wall Connector",
    description: "فريق متخصص في تركيب وبرمجة شواحن تسلا المنزلية وإصلاح أعطال الدوائر الكهربائية الخاصة بها.",
    icon: "🏎️",
    tag: "تخصصنا"
  },
  {
    title: "محطات الشحن السريع",
    description: "تصميم وتنفيذ بنية تحتية لمحطات الشحن العام والخاص بقدرات عالية تبدأ من 22KW وحتى 120KW.",
    icon: "⚡",
    tag: "Commercial"
  },
  {
    title: "الفحص الهندسي الدوري",
    description: "خدمة صيانة دورية للتأكد من سلامة الكابلات، القواطع، وكفاءة الشحن للحفاظ على بطارية سيارتك.",
    icon: "🛠️",
    tag: "أمان"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#030303]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            حلول <span className="text-blue-500">طاقة</span> متكاملة
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            نقدم حزمة من الخدمات الهندسية المتخصصة لدعم التحول الكهربائي في مصر بأعلى معايير الأمان.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* خلفية مضيئة عند الهوفر */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition-colors"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                  {service.tag}
                </span>
                
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* زرار دعوة لاتخاذ إجراء */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-6 text-sm">هل تحتاج لاستشارة فنية بخصوص نوع الشاحن المناسب؟</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full font-bold transition-all duration-300"
          >
            احصل على استشارة مجانية
            <span className="text-xl">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}