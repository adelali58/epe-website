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
    <section className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. الغلاف (Cover Photo): صورة العربية بتشحن واخده الجزء اللي فوق */}
      <div 
        className="relative w-full h-[350px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=2000&auto=format&fit=crop')" }}
      >
        {/* طبقة خفيفة جداً عشان الغلاف يبان شيك */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 2. الصورة الشخصية (Profile Box): البوكس الأبيض اللي راكب فوق الغلاف */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-32 md:-mt-40">
        
        {/* البوكس بخلفية بيضاء صريحة وألوانك الأصلية */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 text-center border-4 border-white">
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">
              <span className="text-[#004b50]">Experience:Life</span>
            </h1>
            <h2 className="text-[#004b50] text-2xl md:text-3xl tracking-[0.3em] font-light opacity-80">
              ENERGY
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
            <br />
            توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
          </p>
          
          {/* الأزرار بالألوان الأصلية (Teal و أبيض) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleEmergencyMaintenance}
              className="w-full sm:w-auto px-10 py-3 rounded-lg font-bold bg-[#004b50] text-white hover:bg-[#00363a] transition-colors duration-300 shadow-md"
            >
              اطلب صيانة فورية (GPS)
            </button>
            
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-3 rounded-lg font-bold bg-transparent text-[#004b50] border-2 border-[#004b50] hover:bg-slate-100 transition-colors duration-300"
            >
              استكشف خدماتنا
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}