"use client";

import React from "react";

// تأكد أن ملف public/car-bg.jpg موجود فعلياً وصورة واضحة التباين

export default function HeroHome() {
  // إعادة نفس وظيفة الإرسال على واتساب
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
          alert(
            "تنبيه: لم نتمكن من تحديد موقعك بدقة، سيتم تحويلك للواتساب لإرسال الطلب."
          );
          sendToWhatsApp(null, null);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      sendToWhatsApp(null, null);
    }
  };

  // موجات زخرفية SVG (energy wave) تعلو الخلفية بشكل هادئ وجذاب
  const energyWaves = (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
      viewBox="0 0 1440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="energyWave1" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#a3e635" stopOpacity="0.17" />
          <stop offset="1" stopColor="#004b50" stopOpacity="0.07" />
        </linearGradient>
        <linearGradient id="energyWave2" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#98ece7" stopOpacity="0.32" />
          <stop offset="1" stopColor="#a3e635" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <path
        d="M0 280C180 350 380 230 720 270C1060 310 1260 175 1440 265V400H0V280Z"
        fill="url(#energyWave1)"
      />
      <path
        d="M0 340C240 420 480 250 720 340C960 430 1200 310 1440 350V400H0V340Z"
        fill="url(#energyWave2)"
      />
    </svg>
  );

  return (
    <section
      className="relative min-h-[100vh] flex flex-col justify-between"
      style={{ background: "var(--epe-light)" }}
    >
      {/* موجات الطاقة الزخرفية */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
        {energyWaves}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-28 pb-12 md:pt-32 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            {/* العنوان مع صورة كهرباء للسيارة بشكل عصري احترافي */}

            <div className="relative flex flex-col items-center w-fit mx-auto">
              {/* صورة سيارة كهرباء في الخلف تماماً خلف كلمة Experience - صورة شفافة/ناعمة */}
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 pointer-events-none select-none"
                style={{
                  width: "270px",
                  height: "140px",
                  zIndex: 0,
                  opacity: 0.21, // شفافية جمالية
                  filter:
                    "drop-shadow(0 10px 26px #004b5070) saturate(1.08) brightness(1.03)",
                }}
                aria-hidden
              >
                <img
                  src="/car-bg.jpg"
                  alt="Electric car charging"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                  draggable={false}
                  loading="eager"
                />
              </div>

              <h1 className="text-[2.8rem] sm:text-5xl md:text-7xl font-extrabold leading-tighter tracking-tight mb-2 md:mb-4 relative z-10">
                <span
                  style={{
                    color: "var(--epe-teal)",
                    textShadow: "0 4px 24px #00393d14, 0 1.5px 0px #fff4",
                  }}
                  className="bg-clip-text"
                >
                  Experience Power
                </span>
              </h1>
              <span
                style={{
                  letterSpacing: "0.3em",
                  color: "#0f2323",
                  opacity: 0.88,
                }}
                className="block font-light text-xl md:text-2xl tracking-[0.3em] relative z-10"
              >
                ENERGY
              </span>
            </div>
            {/* وصف الخدمة */}
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl text-[#606b75] mb-8 leading-relaxed font-medium">
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
                <br />
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
              </p>
              {/* الأزرار */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white"
                  style={{
                    background: "var(--epe-teal)",
                    transition: "background .3s",
                  }}
                  onMouseOver={e =>
                    (e.currentTarget.style.background = "var(--epe-lime)")
                  }
                  onMouseOut={e =>
                    (e.currentTarget.style.background = "var(--epe-teal)")
                  }
                >
                  اطلب صيانة فورية (GPS)
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-transparent text-[#004b50] border border-[#004b50] hover:bg-[#a3e635] hover:text-[#004b50] transition-colors duration-300 flex items-center justify-center"
                  style={{
                    boxShadow: "0 1.5px 12px 0 #004b5023",
                  }}
                >
                  استكشف خدماتنا
                </a>
              </div>
            </div>
            {/* تلميح واجهة تشبه الفيس بوك: زرار أبيض، ظلال، خلفية فاتحة، زر أساسي بارز ملون */}
          </div>
        </div>
      </div>
    </section>
  );
}