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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f8fafc]">
      {/* مشهد الخلفية (EV Collage) */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594535182308-8ffef9bb9034?q=80&w=800')" }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-20 w-full flex-grow flex items-center justify-center">
        
        {/* اللوحة البيضاء (الكبسولة) - نص دايرة من الحواف وموجودة في النص بالظبط */}
        <div className="bg-white shadow-2xl rounded-[3rem] md:rounded-[6rem] p-10 md:px-24 md:py-16 max-w-4xl w-full text-center border border-slate-100 relative overflow-hidden transition-all duration-500 hover:shadow-3xl">
          
          <div className="mb-8">
            {/* العنوان الفضي الميتاليك */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                Experience:Life
              </span>
              <br />
              <span className="text-[#004b50] text-4xl md:text-5xl tracking-[0.3em] font-light mt-3 block">
                ENERGY
              </span>
            </h1>
          </div>
          
          {/* النصوص الفرعية في النص */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            <br />
            نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
          </p>
          
          {/* الأزرار في النص */}
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
      
      {/* اللمسة السفلية */}
      <div className="w-full text-center p-6 relative z-10">
          <p className="text-[#004b50] text-lg font-bold">
            حلول هندسية متكاملة
            <span className="text-slate-400 mx-2">|</span>
            Smart charging network
          </p>
          <div className="flex justify-center mt-3">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-sm animate-bounce">
                <svg className="w-4 h-4 text-[#004b50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
          </div>
      </div>
      
    </section>
  );
}