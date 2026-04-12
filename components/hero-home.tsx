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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc]">
      
      {/* شبكة الصور الخلفية (EV Collage Background) */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2 opacity-[0.08]">
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800')" }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800')" }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620218175919-f3009bc7318d?q=80&w=800')" }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594535182308-8ffef9bb9034?q=80&w=800')" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-32">
        <div className="text-center">
          
          <div className="mb-10">
            {/* اللمسة الفضية الميتاليك 3D */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-b from-[#f8fafc] via-[#94a3b8] to-[#475569] bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                Experience Power
              </span>
            </h1>
            
            {/* ENERGY بلون التيل المعتمد */}
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.6em] text-[#004b50] uppercase">
              Energy
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed font-medium">
              حلول هندسية متكاملة لشحن السيارات الكهربائية.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* زرار الصيانة بلون البراند */}
              <button
                onClick={handleEmergencyMaintenance}
                className="w-full sm:w-auto px-12 py-4 bg-[#0