"use client";

import React from "react";
import Image from "next/image";

// You may add the following car image to your `public` folder as "/car-charging.png"
// Use an SVG or PNG consistent with your brand colors and copyright
const carImageUrl = "/car-charging.png"; // Make sure this exists in /public

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

  // Energy wave SVG pattern background - subtle, professional
  const WaveBackground = () => (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{
        zIndex: 0,
        opacity: 0.13,
        minHeight: 480,
        minWidth: "100%",
      }}
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 650 Q 400 600 800 670 T 1600 670"
        stroke="#004b50"
        strokeWidth="36"
        strokeLinecap="round"
        opacity="0.17"
        fill="none"
      />
      <path
        d="M0 780 Q 500 850 1200 790 T 1600 850"
        stroke="#a3e635"
        strokeWidth="17"
        strokeLinecap="round"
        opacity="0.16"
        fill="none"
      />
      <path
        d="M0 220 Q 600 140 1200 250 T 1600 210"
        stroke="#004b50"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.13"
        fill="none"
      />
      <path
        d="M0 400 Q 750 400 1600 420"
        stroke="#a3e635"
        strokeWidth="13"
        strokeLinecap="round"
        opacity="0.14"
        fill="none"
      />
    </svg>
  );

  return (
    <section
      className="relative"
      style={{
        background: "var(--epe-light)",
        overflow: "hidden",
        minHeight: "640px",
      }}
    >
      {/* Decorative energy wave background */}
      <WaveBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16 flex flex-col items-center">
            {/* Car charging image behind "Experience" */}
            <div className="relative flex flex-col items-center w-full">
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-14 opacity-90 pointer-events-none select-none"
                style={{
                  zIndex: 1,
                  width: 235,
                  height: 115,
                  filter:
                    "drop-shadow(0 3px 32px rgba(0, 75, 80, 0.10)) blur(0.5px)",
                  pointerEvents: "none",
                  mixBlendMode: "multiply",
                }}
                aria-hidden="true"
              >
                <Image
                  src={carImageUrl}
                  alt="شحن سيارة كهربائية"
                  width={235}
                  height={115}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    opacity: 0.9,
                    filter: "contrast(1.4) saturate(1.32)",
                  }}
                  priority
                  draggable={false}
                />
              </div>
              {/* Heading */}
              <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4">
                <span
                  className="inline-block"
                  style={{
                    color: "var(--epe-teal)",
                    background: "none",
                  }}
                >
                  Experience Power
                </span>
                <br />
                <span
                  className="font-light tracking-[0.3em] opacity-90"
                  style={{ color: "var(--epe-teal)" }}
                >
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
                {/* Main button (Facebook-like, teal with white text, hover lime) */}
                <button
                  onClick={handleEmergencyMaintenance}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold shadow-md mb-4 sm:mb-0"
                  style={{
                    background: "var(--epe-teal)",
                    color: "#fff",
                    transition: "background 0.21s",
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
                  className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold border-2 transition-colors duration-200 flex items-center justify-center"
                  style={{
                    borderColor: "var(--epe-teal)",
                    color: "var(--epe-teal)",
                    background: "transparent",
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#e8fdf6";
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
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