"use client";

import React, { useState } from "react";

export default function HeroHome() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      title1: "Experience:Life",
      title2: "ENERGY",
      desc1: "Providing engineering luxury standards in EV charging solutions.",
      desc2: "Supply, installation, and maintenance with the highest levels of safety and European technology.",
      btnMaintenance: "Urgent Maintenance (GPS)",
      btnExplore: "Explore Our Services",
      promptName: "Please enter your name:",
      promptPhone: "Please enter your phone number:",
      alertGPS: "Alert: We couldn't accurately determine your location. You will be redirected to WhatsApp.",
      whatsappMsg: "Urgent Maintenance Request 🚨\nName: {name}\nPhone: {phone}\nLocation: {location}",
      langToggle: "عربي",
      dir: "ltr"
    },
    ar: {
      title1: "Experience:Life",
      title2: "ENERGY",
      desc1: "نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.",
      desc2: "توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.",
      btnMaintenance: "اطلب صيانة فورية (GPS)",
      btnExplore: "استكشف خدماتنا",
      promptName: "برجاء إدخال اسمك الكريم:",
      promptPhone: "برجاء إدخال رقم موبايلك للتواصل السريع:",
      alertGPS: "تنبيه: لم نتمكن من تحديد موقعك بدقة، سيتم تحويلك للواتساب لإرسال الطلب.",
      whatsappMsg: "طلب صيانة فورية 🚨\nالاسم: {name}\nالرقم: {phone}\nموقع العميل: {location}",
      langToggle: "English",
      dir: "rtl"
    }
  };

  const t = content[lang];

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const sendToWhatsApp = (lat: number | null, lng: number | null) => {
    const clientName = prompt(t.promptName);
    if (!clientName) return; 

    const clientPhone = prompt(t.promptPhone);
    if (!clientPhone) return; 

    let locationText = "Location not provided / العميل لم يفعل الموقع";
    if (lat && lng) {
      locationText = `https://www.google.com/maps?q=${lat},${lng}`;
    }

    const rawMessage = `${t.whatsappMsg.replace('{name}', clientName).replace('{phone}', clientPhone).replace('{location}', locationText)}`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=201080380777&text=${encodedMessage}`;
    
    window.location.href = whatsappUrl;
  };

  const handleEmergencyMaintenance = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          sendToWhatsApp(position.coords.latitude, position.coords.longitude);
        },
        () => {
          alert(t.alertGPS);
          sendToWhatsApp(null, null);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      sendToWhatsApp(null, null);
    }
  };

  return (
    <section className="bg-slate-50 min-h-screen pb-20" dir={t.dir}>
      
      {/* 1. الغلاف (Cover Photo) - تم تعديل المسار ليقرأ من فولدر images */}
      <div 
        className="relative w-full h-[350px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/car-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* زرار تغيير اللغة */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
          <button 
            onClick={toggleLang}
            className="bg-white/90 backdrop-blur-sm text-[#004b50] hover:bg-[#004b50] hover:text-white px-5 py-2 rounded-full font-bold shadow-lg transition-all duration-300 border-2 border-transparent hover:border-white"
          >
            {t.langToggle}
          </button>
        </div>
      </div>

      {/* 2. الصورة الشخصية (Profile Box) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-24 md:-mt-32">
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 text-center border-4 border-white/80">
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                {t.title1}
              </span>
            </h1>
            <h2 className="text-[#004b50] text-3xl md:text-4xl tracking-[0.4em] font-light mt-2 drop-shadow-sm">
              {t.title2}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            {t.desc1}
            <br />
            {t.desc2}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={handleEmergencyMaintenance}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-black bg-[#004b50] text-white hover:bg-[#00363a] hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {t.btnMaintenance}
            </button>
            
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold bg-white text-[#004b50] border-2 border-[#004b50] hover:bg-[#004b50] hover:text-white transition-all duration-300 shadow-sm"
            >
              {t.btnExplore}
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}