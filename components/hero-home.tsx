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
      {/* الخلفية: صورة سيارة فاخرة بتأثير درامي */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad42243c3d?q=80&w=2000&auto=format&fit=crop')",
          filter: "brightness(0.25)" 
        }}
      ></div>
      
      {/* طبقة التدرج اللوني للعمق الفني */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020617] z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32">
        <div className="text-center">
          
          <div className="mb-10">
            {/* اللمسة الفضية الميتاليك (Experience Power) */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-[#f8fafc] via-[#94a3b8] to-[#475569] bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                Experience Power
              </span>
            </h1>
            
            {/* اللمسة الذهبية (ENERGY) */}
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.6em] text-[#D4AF37] uppercase drop-shadow-[0_2px_5px_rgba(212,175,55,0.3)]">
              Energy
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light">
              نمنحك طاقة المستقبل بمعايير هندسية فاخرة.
            </p>
            
            {/* الأزرار الملكية بالذهب والأسود */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleEmergencyMaintenance}
                className="group relative w-full sm:w-auto px-12 py-4 bg-[#D4AF37] text-black font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              >
                اطلب صيانة فورية (GPS)
              </button>
              
              <a
                href="#services"
                className="w-full sm:w-auto px-12 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full transition-all duration-300 hover:bg-[#D4AF37]/10"
              >
                استكشف خدماتنا
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* خط الإضاءة السفلي النابض */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>
    </section>
  );
}