"use client";
import React, { useState } from 'react';
import AnimatedLogo from './animated-logo';
import emailjs from '@emailjs/browser';

export default function HeroHome() {
  const [loading, setLoading] = useState(false);

  const handleMaintenanceRequest = async () => {
    setLoading(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // رابط خرائط جوجل المباشر
          const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
          
          const templateParams = {
            message: mapLink, 
          };

          await emailjs.send(
            'service_f4r4djs',
            'template_lbpbwjd',
            templateParams,
            'DtlldLHpRbg87Fqy7' // المفتاح السليم
          );

          alert("تم تحديد موقعك بنجاح! فريق الصيانة سيتواصل معك فوراً ⚡");
        } catch (error) {
          console.error("Error sending location:", error);
          alert("حدث خطأ في إرسال الموقع، تأكد من اتصالك بالإنترنت.");
        } finally {
          setLoading(false);
        }
      }, (error) => {
        alert("برجاء تفعيل تحديد الموقع (GPS) لنتمكن من الوصول إليك.");
        setLoading(false);
      });
    } else {
      alert("متصفحك لا يدعم تحديد الموقع.");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030303] text-slate-200 font-sans border-b border-white/5" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600/15 via-[#030303] to-[#030303] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center mt-12">
        <div className="flex justify-center items-center gap-4 mb-8 opacity-60 text-[10px] uppercase tracking-[0.4em] text-slate-400 font-semibold" dir="ltr">
           <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-slate-400"></div>
           Premium EV Solutions
           <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-slate-400"></div>
        </div>

        <AnimatedLogo />

        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400/80 mb-16 leading-relaxed font-light mt-4">
          نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية. 
          <br className="hidden md:block" />
          توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={handleMaintenanceRequest}
            disabled={loading}
            className="w-full sm:w-64 px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-sm font-semibold text-sm uppercase tracking-wide transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "جاري الإرسال..." : "اطلب صيانة فورية (GPS)"}
          </button>
          
          <button className="w-full sm:w-64 px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white hover:bg-white/5 rounded-sm font-semibold text-sm uppercase tracking-wide transition-all duration-300 backdrop-blur-sm">
            استكشف خدماتنا
          </button>
        </div>
      </div>
    </section>
  );
}