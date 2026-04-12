"use client";

import React from "react";

export default function HeroHome() {
  const handleEmergencyMaintenance = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          // لينك جوجل ماب الصحيح والدقيق
          const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

          const clientName = prompt("برجاء إدخال اسمك الكريم:");
          if (!clientName) return; 

          const clientPhone = prompt("برجاء إدخال رقم موبايلك للتواصل السريع:");
          if (!clientPhone) return; 

          const message = `طلب صيانة فورية 🚨%0Aالاسم: ${clientName}%0Aالرقم: ${clientPhone}%0Aموقع العميل: ${googleMapsUrl}`;
          
          // التحويل المباشر للواتساب لتجنب حظر النوافذ المنبثقة
          window.location.href = `https://wa.me/201080380777?text=${message}`;
        },
        () => {
          alert("برجاء الموافقة على صلاحية الوصول للموقع (GPS) لنتمكن من الوصول إليك بدقة.");
        }
      );
    } else {
      alert("عذراً، متصفحك لا يدعم خاصية تحديد الموقع.");
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="text-transparent bg-clip-text text-stroke bg-slate-800">Experience Power</span>
              <br />
              <span className="text-slate-200 font-light tracking-[0.3em]">ENERGY</span>
            </h1>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
                <br />
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-white text-slate-900 hover:bg-slate-200 transition-colors duration-300 shadow-lg mb-4 sm:mb-0"
                >
                  اطلب صيانة فورية (GPS)
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-transparent text-white border border-slate-700 hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center"
                >
                  استكشف خدماتنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}