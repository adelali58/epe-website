"use client";

import React from "react";

/**
 * Decorative SVG waves for subtle background.
 */
function EnergyWaves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
      aria-hidden="true"
      viewBox="0 0 1440 560"
      fill="none"
      style={{ minHeight: 560 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#004b50" stopOpacity="0.14" />
          <stop offset="70%" stopColor="#a3e635" stopOpacity="0.07" />
        </linearGradient>
      </defs>
      <path
        d="M0 400 Q 360 300 720 420 T 1440 350 V 560 H0Z"
        fill="url(#wave-gradient)"
      />
      <path
        d="M0 470 Q 480 380 1020 490 T 1440 430 V 560 H0Z"
        fill="url(#wave-gradient)"
        opacity="0.6"
      />
    </svg>
  );
}

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

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--epe-light)" }}
    >
      {/* Decorative background waves */}
      <EnergyWaves />

      {/* Absolute positioned electric car image behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-24 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center"
        style={{ minHeight: "270px" }}
      >
        <img
          src="/ev-car-charging.png"
          alt=""
          className="w-[340px] md:w-[403px] object-contain opacity-80 drop-shadow-2xl"
          style={{
            marginTop: 0,
            filter: "saturate(1.05) contrast(1.1) drop-shadow(0 32px 64px #a3e63530)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 py-32 w-full">
        <div className="text-center">

          <div className="relative mb-10" style={{ zIndex: 30 }}>
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-2"
              style={{ letterSpacing: "-0.045em" }}
            >
              <span
                style={{
                  color: "var(--epe-teal)",
                  position: "relative",
                  zIndex: 30,
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: "10px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  padding: "0.18em 0.3em",
                  // This padding gives some "banner above bg-image" look
                  boxShadow: "0 2px 24px 0 #004b501a"
                }}
                className="inline-block font-black"
              >
                {/* Car image behind via background image */}
                Experience
                <span className="font-extrabold text-[0.85em] pl-1">Power</span>
              </span>
            </h1>
            <span
              className="text-2xl md:text-4xl font-light uppercase tracking-[0.35em] block mt-2"
              style={{ color: "var(--epe-teal)" }}
            >
              ENERGY
            </span>
          </div>

          <div className="max-w-3xl mx-auto mt-3">
            <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-medium" style={{ color: "#36454f" }}>
              نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.<br />
              توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
            </p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <button
                onClick={handleEmergencyMaintenance}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white shadow-lg mb-4 sm:mb-0 transition-colors duration-200"
                style={{
                  backgroundColor: "var(--epe-teal)"
                }}
                onMouseOver={e =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "var(--epe-lime)")
                }
                onMouseOut={e =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "var(--epe-teal)")
                }
              >
                اطلب صيانة فورية (GPS)
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-transparent text-[#1876f2] border border-[#c7e9e9] hover:bg-[#f1f9fb] transition-colors duration-200 flex items-center justify-center"
                style={{
                  fontWeight: 700,
                  borderColor: "#badada"
                }}
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