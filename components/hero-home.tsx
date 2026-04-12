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

  // SVG background pattern: subtle wavy lines using currentColor
  const WaveBackground = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.11 }}
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="
          M 0 650 Q 400 600 800 670 T 1600 670
          M 0 780 Q 500 850 1200 790 T 1600 850
        "
        stroke="#004b50"
        strokeWidth="42"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="
          M 0 220 Q 600 140 1200 250 T 1600 210
        "
        stroke="#004b50"
        strokeWidth="16"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="
          M 0 400 Q 550 420 1200 330 T 1600 420
        "
        stroke="#a3e635"
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  // Image source: open-source/car charging SVG or PNG (replace with your static path or external url as needed)
  const carImageUrl =
    "https://raw.githubusercontent.com/entur/svg-icons/master/packages/entur-icon-set/svg/transport/ev-charging-station.svg"; // Example, change if you want

  return (
    <section
      className="relative"
      style={{
        background: "var(--epe-light)",
        minHeight: "640px",
        overflow: "hidden",
      }}
    >
      {/* Decorative pattern */}
      <WaveBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">

            <div className="relative flex flex-col items-center w-full">
              {/* Car charging image behind "experience" (centered, slightly blurred, design aware) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-12 opacity-70 select-none"
                style={{
                  zIndex: 1,
                  width: 220,
                  height: 110,
                  filter: "drop-shadow(0 3px 16px rgba(0,42,41,0.11)) blur(0.5px)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              >
                <img
                  src={carImageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    opacity: 0.95,
                    mixBlendMode: "multiply",
                    filter: "contrast(1.6) saturate(1.25)",
                  }}
                  loading="lazy"
                  draggable={false}
                />
              </div>
              {/* Headline */}
              <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4">
                <span
                  className="inline-block"
                  style={{
                    color: "var(--epe-teal)",
                    position: "relative",
                    background: "none",
                  }}
                >
                  Experience Power
                </span>
                <br />
                <span className="font-light tracking-[0.3em] opacity-90" style={{ color: "var(--epe-teal)" }}>
                  ENERGY
                </span>
              </h1>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.
                <br />
                توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.
              </p>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                <button
                  onClick={handleEmergencyMaintenance}
                  // Facebook style button: teal as primary (notched corners mimic Facebook style)
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold"
                  style={{
                    background: "var(--epe-teal)",
                    color: "#fff",
                    transition: "background 0.3s",
                    boxShadow: "0 3px 12px 0 rgba(0, 75, 80, 0.08)",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "var(--epe-lime)")}
                  onMouseOut={e => (e.currentTarget.style.background = "var(--epe-teal)")}
                >
                  اطلب صيانة فورية (GPS)
                </button>

                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold border-2 transition-colors duration-300 flex items-center justify-center"
                  style={{
                    borderColor: "var(--epe-teal)",
                    color: "var(--epe-teal)",
                    background: "transparent"
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#e8fdf6";
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
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