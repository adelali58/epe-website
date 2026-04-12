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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f8fafc]">
      {/* مشهد الخلفية المركب (EV Collage) بشفافية خفيفة جداً تليق بالثيم الفاتح */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {/* صور خلفية مخصصة - شواحن، جراجات، سيارات كهربائية */}
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=800')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594535182308-8ffef9bb9034?q=80&w=800')" }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32 w-full flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* العمود الأيسر: النصوص والأزرار */}
          <div className="text-right md:text-right">
            <div className="mb-10">
              {/* العنوان الرئيسي (Experience:Life) فضي ميتاليك متوافق مع الأبيض */}
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-2 leading-none italic">
                <span className="bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 bg-clip-text text-transparent drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  Experience:Life
                </span>
                <br />
                {/* كلمة ENERGY بلون التيل الداكن عشان تنطق على الأبيض */}
                <span className="text-[#004b50] text-5xl md:text-6xl tracking-[0.3em] font-light">
                  ENERGY
                </span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto md:mr-0">
              {/* النصوص الفرعية بلون رمادي داكن للقراءة المريحة */}
              <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed font-medium">
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
                <br />
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-end gap-6">
                {/* زرار الصيانة بلون البراند الأساسي (Teal) */}
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-12 py-4 bg-[#004b50] text-white font-black rounded-full shadow-lg hover:scale-105 hover:bg-[#00363a] hover:shadow-xl transition-all duration-300"
                >
                  اطلب صيانة فورية (GPS)
                </button>
                
                {/* زرار مفرغ بنفس لون البراند */}
                <a
                  href="#services"
                  className="w-full sm:w-auto px-12 py-4 border-2 border-[#004b50] text-[#004b50] font-bold rounded-full transition-all duration-300 hover:bg-[#004b50]/5"
                >
                  استكشف خدماتنا
                </a>
              </div>
            </div>
          </div>
          
          {/* العمود الأيمن */}
          <div className="hidden md:block">
             {/* مساحة فارغة للحفاظ على التوازن والتخطيط */}
          </div>
          
        </div>
      </div>
      
      {/* لمسات نهائية في الأسفل تناسب الثيم الفاتح */}
      <div className="w-full text-right p-6 relative z-10">
          <p className="text-[#004b50] text-lg font-bold">
            حلول هندسية متكاملة
            <span className="text-slate-400 mx-2">|</span>
            Smart charging network
          </p>
          <div className="flex justify-end mt-2">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-sm">
                <svg className="w-4 h-4 text-[#004b50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
          </div>
      </div>
      
    </section>
  );
}