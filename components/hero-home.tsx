"use client";

import React from "react";

export default function HeroHome() {
  // فانكشن التوجيه السحري للواتساب
  const sendToWhatsApp = (lat: number | null, lng: number | null) => {
    const clientName = prompt("برجاء إدخال اسمك الكريم:");
    if (!clientName) return; 

    const clientPhone = prompt("برجاء إدخال رقم موبايلك للتواصل السريع:");
    if (!clientPhone) return; 

    // تحديد اللوكيشن أو كتابة رسالة بديلة لو العميل رفض يدينا الصلاحية
    let locationText = "العميل لم يقم بتفعيل خدمة الموقع (GPS)";
    if (lat && lng) {
      locationText = `https://maps.google.com/?q=${lat},${lng}`;
    }

    // تجهيز الرسالة
    const rawMessage = `طلب صيانة فورية 🚨\nالاسم: ${clientName}\nالرقم: ${clientPhone}\nموقع العميل: ${locationText}`;
    
    // تشفير الرسالة عشان تشتغل على كل المتصفحات (أندرويد، آيفون، متصفحات لايت)
    const encodedMessage = encodeURIComponent(rawMessage);
    
    // اللينك "الجوكر" اللي بيقرأ واتساب العادي والأعمال
    const jokerUrl = `https://api.whatsapp.com/send?phone=201080380777&text=${encodedMessage}`;
    
    // التوجيه المباشر
    window.location.href = jokerUrl;
  };

  const handleEmergencyMaintenance = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // لو وافق على اللوكيشن
          sendToWhatsApp(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // لو رفض اللوكيشن، هنحوله برضه للواتساب بس من غير اللوكيشن عشان منخسرش الطلب
          alert("لم نتمكن من تحديد موقعك بدقة، سيتم تحويلك للواتساب لإكمال الطلب.");
          sendToWhatsApp(null, null);
        },
        // تسريع طلب اللوكيشن عشان المتصفح ميعملش بلوك
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      // لو متصفحه قديم جداً
      sendToWhatsApp(null, null);
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