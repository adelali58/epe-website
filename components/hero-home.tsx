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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc]">
      
      {/* 1. الخلفية: صورة عربية كهربائية بتشحن مع طبقة بيضاء شفافة عشان تريح العين */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      {/* تفتيح الخلفية عشان الكبسولة تنطق */}
      <div className="absolute inset-0 bg-slate-100/80 z-0"></div>

      {/* 2. الكبسولة البيضاء (نص دايرة من الجوانب وموجودة في النص بالظبط) */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-[3rem] md:rounded-[5rem] px-6 py-12 md:px-20 md:py-16 text-center border border-white">
          
          <div className="mb-8">
            {/* العنوان الفضي الميتاليك */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                Experience:Life
              </span>
              <br />
              <span className="text-[#004b50] text-4xl md:text-5xl tracking-[0.3em] font-light mt-4 block">
                ENERGY
              </span>
            </h1>
          </div>
          
          {/* برجراف "الحلول الهندسية" اللي إنت عايزه في النص */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            <br />
            نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
          </p>
          
          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={handleEmergencyMaintenance}
              className="w-full sm:w-auto px-10 py-4 bg-[#004b50] text-white font-black rounded-full shadow-lg hover:scale-105 hover:bg-[#00363a] hover:shadow-xl transition-all duration-300"
            >
              اطلب صيانة فورية (GPS)
            </button>
            
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 border-2 border-[#004b50] text-[#004b50] font-bold rounded-full transition-all duration-300 hover:bg-[#004b50] hover:text-white"
            >
              استكشف خدماتنا
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}