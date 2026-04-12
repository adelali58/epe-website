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
      // لينك جوجل ماب الصحيح الذي يفتح دبوساً (Pin) على موقع العميل
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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0a192f]">
      {/* مشهد الخلفية المظلم الأصلي (السيارة، الشاحن، الدوائر) - مرئي بوضوح */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad42243c3d?q=80&w=2000&auto=format&fit=crop')",
          filter: "brightness(0.35)", // تعتيم الخلفية قليلاً لإبراز النص ولكن مع إبقاء العربية واضحة
          opacity: "1" // الخلفية مرئية تماماً
        }}
      ></div>

      {/* الكبسولة البيضاء "المخفية" (شفافة جزئياً) في الجزء السفلي الأوسط */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mx-auto mb-20 md:mb-24">
        
        <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-full px-6 py-12 md:px-20 md:py-16 text-center border border-white/20 relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:border-white/40">
          
          <div className="mb-8">
            {/* العنوان الفضي الميتاليك - واضح */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                Experience:Life
              </span>
              <br />
              <span className="bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] text-4xl md:text-5xl tracking-[0.3em] font-light mt-4 block">
                ENERGY
              </span>
            </h1>
          </div>
          
          {/* النصوص الفرعية في النص - واضحة ومقروءة */}
          <p className="text-lg md:text-xl text-[#004b50] mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            <br />
            نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
          </p>
          
          {/* الأزرار "البارزة والواضحة" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* زرار الصيانة الأبيض الممتلئ البارز */}
            <button
              onClick={handleEmergencyMaintenance}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-white/30"
            >
              اطلب صيانة فورية (GPS)
            </button>
            
            {/* زرار مفرغ باللون التيل المعتمد البارز */}
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 border-2 border-[#00d4cc] text-[#00d4cc] font-bold rounded-full transition-all duration-300 hover:bg-[#00d4cc] hover:text-black"
            >
              استكشف خدماتنا
            </a>
          </div>

        </div>
      </div>
      
      {/* لمسات نهائية في الأسفل */}
      <div className="w-full text-center p-6 relative z-10">
          <p className="text-[#00d4cc] text-lg font-bold">
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