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
    // هنا حطينا صورة العربية اللي بتشحن في الخلفية بشكل كامل
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=2000&auto=format&fit=crop')" }}
    >
      {/* طبقة شفافة غامقة عشان الصورة متغطيش على الكلام وتدي فخامة */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32">
        <div className="text-center">
          
          <div className="mb-10">
            {/* تعديل الاسم لـ Experience:Life باللون الفضي الميتاليك */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-[#f8fafc] via-[#94a3b8] to-[#475569] bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
                Experience:Life
              </span>
            </h1>
            
            {/* كلمة Energy بلون أبيض ناصع عشان تنطق على الخلفية الغامقة */}
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.6em] text-white uppercase drop-shadow-lg">
              Energy
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light drop-shadow-md">
              نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
              <br />
              توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* زرار الصيانة بلون التيل بتاع الشركة */}
              <button
                onClick={handleEmergencyMaintenance}
                className="w-full sm:w-auto px-12 py-4 bg-[#004b50] text-white font-black rounded-full shadow-xl hover:bg-[#00363a] transition-all duration-300 hover:scale-105"
              >
                اطلب صيانة فورية (GPS)
              </button>
              
              {/* زرار مفرغ باللون الأبيض */}
              <a
                href="#services"
                className="w-full sm:w-auto px-12 py-4 border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-[#004b50]"
              >
                استكشف خدماتنا
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}