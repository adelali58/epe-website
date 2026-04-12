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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a192f]">
      {/* مشهد الخلفية المركب (EV & Charging Specialized Composite) */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {/* صور خلفية مخصصة - شواحن، جراجات، شبكات شحن */}
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594535182308-8ffef9bb9034?q=80&w=800')" }}></div>
        </div>
        {/* تدرج لوني عميق */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32 w-full flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* العمود الأيسر: النصوص والأزرار */}
          <div className="text-right md:text-right">
            <div className="mb-10">
              {/* العنوان الرئيسي الذهبي الميتاليك (Experience:Life ENERGY) */}
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-2 leading-none italic">
                <span className="bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#a1a1aa] bg-clip-text text-transparent drop-shadow-[0_8px_15px_rgba(212,175,55,0.7)]">
                  Experience:Life
                </span>
                <br />
                <span className="bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#a1a1aa] bg-clip-text text-transparent drop-shadow-[0_8px_15px_rgba(212,175,55,0.7)] text-5xl md:text-6xl tracking-[0.3em] font-light">
                  ENERGY
                </span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto md:mr-0">
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light drop-shadow-md">
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
                <br />
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-end gap-6">
                {/* زرار الصيانة الذهبي الممتلئ (GPS) */}
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-12 py-4 bg-[#D4AF37] text-black font-black rounded-full shadow-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  اطلب صيانة فورية (GPS)
                </button>
                
                {/* زرار مفرغ باللون التيل المعتمد (استكشف خدماتنا) */}
                <a
                  href="#services"
                  className="w-full sm:w-auto px-12 py-4 border-2 border-[#00d4cc] text-[#00d4cc] font-bold rounded-full transition-all duration-300 hover:bg-[#00d4cc]/5"
                >
                  استكشف خدماتنا
                </a>
              </div>
            </div>
          </div>
          
          {/* العمود الأيمن: العربية التيسلا والشاحن (جزء من تكوين الخلفية) */}
          <div className="hidden md:block">
            {/* تم دمج العربية والشاحن في الخلفية العامة، هذا العمود يبقي التخطيط متوازناً */}
          </div>
          
        </div>
      </div>
      
      {/* لمسات نهائية: وصف شبكة الشحن الذكية في الأسفل */}
      <div className="w-full text-right p-6 relative z-10">
          <p className="text-[#00d4cc] text-lg font-medium drop-shadow-lg">
            تحصيل المسا في الاعتمانيج
            <span className="text-white opacity-80 mx-2">|</span>
            Smart charging network
          </p>
          <div className="flex justify-end mt-2">
            {/* أيقونة سهم زخرفية للأسفل */}
            <div className="w-8 h-8 rounded-full border border-white opacity-40 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
          </div>
      </div>
      
    </section>
  );
}