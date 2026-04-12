"use client";

import React from "react";

export default function HeroHome() {
  const sendToWhatsApp = (lat: number | null, lng: number | null) => {
    const clientName = prompt("برجاء إدخال اسمك الكريم:");
    if (!clientName) return; 

    const clientPhone = prompt("برجاء إدخال رقم موبايلك للتواصل السريع:");
    if (!clientPhone) return; 

    let locationText = "العميل لم يقم بتفعيل خدمة الموقع (GPS)";
    if (lat && lng) {
      locationText = `https://www.google.com/maps?q=${lat},${lng}`;
    }

    const rawMessage = `طلب صيانة فورية 🚨\nالاسم: ${clientName}\nالرقم: ${clientPhone}\nموقع العميل: ${locationText}`;
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
          alert("تنبيه: لم نتمكن من تحديد موقعك بدقة، سيتم تحويلك للواتساب لإرسال الطلب.");
          sendToWhatsApp(null, null);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      sendToWhatsApp(null, null);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* خلفية السيارة الفاخرة مع تأثير التعتيم الملكي */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad42243c3d?q=80&w=2000&auto=format&fit=crop')",
          filter: "brightness(0.3)" 
        }}
      ></div>
      
      {/* تدرج لوني إضافي للعمق */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32">
        <div className="text-center">
          
          {/* الشعار الرئيسي */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">
              <span className="text-white drop-shadow-2xl">Experience Power</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.5em] text-[#D4AF37] uppercase">
              Energy
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* الوصف */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light italic">
              "نحن لا نشحن السيارات، نحن نمنحك طاقة المستقبل بمعايير ذهبية."
            </p>
            
            {/* الأزرار الملكية */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleEmergencyMaintenance}
                className="group relative w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                <span className="relative z-10">اطلب صيانة فورية (GPS)</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <a
                href="#services"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                استكشف خدماتنا الفاخرة
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* لمسة ديكورية خفيفة في الأسفل */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </section>
  );
}