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
    // رجعنا للخلفية الفاتحة اللي بتشحن مع طبقة بيضاء شفافة شيك
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop')" }}
    >
      {/* الطبقة الفاتحة اللي بتخلي الموقع مريح للعين (نفس الصورة الأولى) */}
      <div className="absolute inset-0 bg-[#f8fafc]/90"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4">
              {/* اللمسة الفضية الميتاليك 3D على كلمة Experience Power */}
              <span className="bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]">
                Experience Power
              </span>
              <br />
              {/* كلمة ENERGY بلون التيل الأساسي للشركة */}
              <span className="text-[#004b50] font-light tracking-[0.3em] opacity-80">
                ENERGY
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
                <br />
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
              </p>
              
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-[#004b50] text-white hover:bg-[#00363a] transition-colors duration-300 shadow-lg mb-4 sm:mb-0"
                >
                  اطلب صيانة فورية (GPS)
                </button>
                
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-transparent text-[#004b50] border-2 border-[#004b50] hover:bg-slate-200 transition-colors duration-300 flex items-center justify-center"
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