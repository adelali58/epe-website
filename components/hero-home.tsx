"use client";

import React from "react";

export default function HeroHome() {
  const sendToWhatsApp = (lat: number | null, lng: number | null) => {
    // 1. طلب البيانات من العميل
    const clientName = prompt("برجاء إدخال اسمك الكريم:");
    if (!clientName) return;

    const clientPhone = prompt("برجاء إدخال رقم موبايلك للتواصل السريع:");
    if (!clientPhone) return;

    // 2. تجهيز نص الموقع (GPS)
    let locationText = "العميل لم يقم بتفعيل خدمة الموقع (GPS)";
    if (lat && lng) {
      locationText = `https://www.google.com/maps?q=${lat},${lng}`;
    }

    // 3. تجهيز الرسالة وتشفيرها
    const rawMessage = `طلب صيانة فورية 🚨\nالاسم: ${clientName}\nالرقم: ${clientPhone}\nموقع العميل: ${locationText}`;
    const encodedMessage = encodeURIComponent(rawMessage);

    // 4. اللينك الجوكر
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
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: "var(--epe-light)",
        // Facebook inspired subtle blue gradient/light theme
        backgroundImage:
          "linear-gradient(120deg, #f0f2f5 60%, #e6ecf3 100%)"
      }}
    >
      {/* Decorative energy wave pattern using SVG (styled like a faint Facebook background decoration) */}
      <svg
        aria-hidden="true"
        focusable="false"
        width="100%"
        height="480"
        viewBox="0 0 1440 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.12,
          pointerEvents: "none"
        }}
      >
        <defs>
          <linearGradient id="fbwave" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#0094a9" />
            <stop offset="45%" stopColor="#20cfc5" />
            <stop offset="100%" stopColor="#a3e635" />
          </linearGradient>
        </defs>
        <path
          d="M0 370 Q 390 450 720 380 T 1440 370"
          stroke="url(#fbwave)"
          strokeWidth="60"
          fill="none"
        />
        <path
          d="M0 290 Q 500 240 1440 310"
          stroke="var(--epe-teal)"
          strokeWidth="18"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M0 430 Q 600 490 1440 430"
          stroke="#b8e7e8"
          strokeWidth="15"
          fill="none"
          opacity="0.2"
        />
      </svg>
      <div className="z-10 w-full">
        <div className="max-w-3xl mx-auto rounded-lg shadow-xl px-6 py-12 bg-white/90 md:px-12 md:py-16 border border-slate-100">
          <div className="text-center pb-8">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
              style={{
                color: "var(--epe-teal)"
              }}
            >
              Experience Power
            </h1>
            <span
              className="block text-3xl font-light mb-2 tracking-[0.18em] uppercase"
              style={{
                color: "#1877f2", // Facebook primary blue for highlight
                letterSpacing: "0.18em"
              }}
            >
              ENERGY
            </span>
          </div>
          <div className="max-w-xl mx-auto mt-2">
            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
              <br />
              توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <button
                onClick={handleEmergencyMaintenance}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold shadow-lg mb-4 sm:mb-0 transition-colors duration-200 text-white"
                style={{
                  background: "var(--epe-teal)",
                  color: "#fff",
                  border: "none"
                }}
                onMouseOver={e => (e.currentTarget.style.background = "var(--epe-lime)")}
                onMouseOut={e => (e.currentTarget.style.background = "var(--epe-teal)")}
              >
                اطلب صيانة فورية (GPS)
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold border border-[#1877f2] text-[#1877f2] bg-transparent hover:bg-[#e7f3ff] hover:text-[#00549a] transition-colors duration-200 flex items-center justify-center"
                style={{ minWidth: 160 }}
              >
                استكشف خدماتنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}