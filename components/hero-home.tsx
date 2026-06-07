"use client";

import React, { useCallback, useEffect, useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQjDPzxsrMBxJnselVV8U5KRt1NTAKZ0VivWpTasfbPvOLXsAuqVyryso3F1YvDPWQ/exec";
const WHATSAPP_PHONE = "201080380777";

type Lang = "en" | "ar";

type Coords = { lat: number; lng: number } | null;

export default function HeroHome() {
  const [lang, setLang] = useState<Lang>("en");
  const [gpsLoading, setGpsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [locationRetryLoading, setLocationRetryLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const content = {
    en: {
      title1: "Experience:Life",
      title2: "ENERGY",
      desc1: "Providing engineering luxury standards in EV charging solutions.",
      desc2: "Supply, installation, and maintenance with the highest levels of safety and European technology.",
      btnMaintenance: "Urgent Maintenance (GPS)",
      btnExplore: "Explore Our Services",
      langToggle: "عربي",
      dir: "ltr" as const,
      modalTitle: "Urgent maintenance request",
      modalSubtitle: "Fill in your details — we will contact you immediately.",
      labelName: "Full name",
      labelPhone: "Mobile number",
      placeholderName: "e.g. Ahmed Mohamed",
      placeholderPhone: "01X XXXX XXXX",
      locationOk: "Your location was detected successfully",
      locationFail: "Location is required for urgent maintenance",
      locationInstructions:
        "Please allow location access in your browser. On mobile: Settings → Site permissions → Location → Allow.",
      btnEnableLocation: "Enable location now",
      locationRetrying: "Detecting location…",
      errorLocationRequired: "You must enable location before sending the request",
      viewMap: "View on map",
      btnSubmit: "Send request via WhatsApp",
      btnCancel: "Cancel",
      btnClose: "Close",
      gpsLoading: "Detecting your location…",
      gpsHint: "Please allow location access when prompted",
      errorName: "Please enter your name",
      errorPhone: "Please enter a valid phone number (at least 10 digits)",
      submitting: "Sending…",
      whatsappMsg:
        "Urgent Maintenance Request 🚨\nName: {name}\nPhone: {phone}\nLocation: {location}",
    },
    ar: {
      title1: "Experience:Life",
      title2: "ENERGY",
      desc1: "نقدم لك معايير الفخامة الهندسية في حلول شحن السيارات الكهربائية.",
      desc2: "توريد وتركيب وصيانة بأعلى مستويات الأمان والتكنولوجيا الأوروبية.",
      btnMaintenance: "اطلب صيانة فورية (GPS)",
      btnExplore: "استكشف خدماتنا",
      langToggle: "English",
      dir: "rtl" as const,
      modalTitle: "طلب صيانة فورية",
      modalSubtitle: "أدخل بياناتك وسنتواصل معك فوراً",
      labelName: "الاسم بالكامل",
      labelPhone: "رقم الموبايل",
      placeholderName: "مثال: أحمد محمد",
      placeholderPhone: "01X XXXX XXXX",
      locationOk: "تم تحديد موقعك بنجاح",
      locationFail: "يجب تفعيل الموقع لإرسال طلب الصيانة الفورية",
      locationInstructions:
        "يرجى السماح بالوصول للموقع من المتصفح. على الموبايل: الإعدادات → أذونات الموقع → السماح لهذا الموقع.",
      btnEnableLocation: "تفعيل الموقع الآن",
      locationRetrying: "جاري تحديد الموقع…",
      errorLocationRequired: "يجب تفعيل الموقع قبل إرسال الطلب",
      viewMap: "عرض على الخريطة",
      btnSubmit: "إرسال الطلب عبر واتساب",
      btnCancel: "إلغاء",
      btnClose: "إغلاق",
      gpsLoading: "جاري تحديد موقعك…",
      gpsHint: "يرجى السماح بالوصول للموقع عند ظهور الطلب",
      errorName: "برجاء إدخال اسمك",
      errorPhone: "برجاء إدخال رقم موبايل صحيح (10 أرقام على الأقل)",
      submitting: "جاري الإرسال…",
      whatsappMsg:
        "طلب صيانة فورية 🚨\nالاسم: {name}\nالرقم: {phone}\nموقع العميل: {location}",
    },
  };

  const t = content[lang];

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const closeModal = useCallback(() => {
    if (submitting) return;
    setModalOpen(false);
    setClientName("");
    setClientPhone("");
    setFormError("");
    setCoords(null);
  }, [submitting]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, closeModal]);

  const requestLocation = (highAccuracy = false): Promise<Coords> => {
    return new Promise((resolve) => {
      if (typeof navigator === "undefined" || !navigator.geolocation) {
        resolve(null);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        () => resolve(null),
        {
          timeout: highAccuracy ? 20000 : 12000,
          maximumAge: 0,
          enableHighAccuracy: highAccuracy,
        }
      );
    });
  };

  const retryLocation = async () => {
    setLocationRetryLoading(true);
    setFormError("");
    let result = await requestLocation(true);
    if (!result) {
      result = await requestLocation(false);
    }
    setLocationRetryLoading(false);
    if (result) {
      setCoords(result);
    } else {
      setFormError(t.errorLocationRequired);
    }
  };

  const handleEmergencyMaintenance = async () => {
    setGpsLoading(true);
    setCoords(null);

    const result = await requestLocation();
    setGpsLoading(false);
    setCoords(result);
    setModalOpen(true);
  };

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const name = clientName.trim();
    const phone = clientPhone.trim();

    if (!name) {
      setFormError(t.errorName);
      return;
    }
    if (!isValidPhone(phone)) {
      setFormError(t.errorPhone);
      return;
    }
    if (!coords) {
      setFormError(t.errorLocationRequired);
      return;
    }

    setSubmitting(true);

    const locationText = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;

    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location: "🚨 صيانة فورية (GPS) | " + locationText,
        }),
      });
    } catch {
      /* no-cors: continue to WhatsApp */
    }

    const rawMessage = t.whatsappMsg
      .replace("{name}", name)
      .replace("{phone}", phone)
      .replace("{location}", locationText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(rawMessage)}`;

    window.location.href = whatsappUrl;
  };

  const mapUrl =
    coords != null
      ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}`
      : null;

  return (
    <section className="bg-slate-50 min-h-screen pb-20" dir={t.dir}>
      <div
        className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/car-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-6 right-4 md:top-10 md:right-10 z-50">
          <button
            type="button"
            onClick={toggleLang}
            className="bg-white/90 backdrop-blur-sm text-[#004b50] hover:bg-[#004b50] hover:text-white px-4 md:px-5 py-2 rounded-full font-bold shadow-lg transition-all duration-300 border-2 border-transparent hover:border-white text-sm md:text-base"
          >
            {t.langToggle}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-16 sm:-mt-24 md:-mt-32">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 md:p-16 text-center border-4 border-white/80">
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                {t.title1}
              </span>
            </h1>
            <h2 className="text-[#004b50] text-xl sm:text-3xl md:text-4xl tracking-[0.4em] font-light mt-2 drop-shadow-sm">
              {t.title2}
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
            {t.desc1}
            <br className="hidden sm:block" />
            {t.desc2}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={handleEmergencyMaintenance}
              disabled={gpsLoading}
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full font-black bg-[#004b50] text-white hover:bg-[#00363a] hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base disabled:opacity-70 disabled:scale-100 disabled:cursor-wait"
            >
              {gpsLoading ? t.gpsLoading : t.btnMaintenance}
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full font-bold bg-white text-[#004b50] border-2 border-[#004b50] hover:bg-[#004b50] hover:text-white transition-all duration-300 shadow-sm text-sm sm:text-base"
            >
              {t.btnExplore}
            </a>
          </div>
        </div>
      </div>

      {/* GPS loading overlay */}
      {gpsLoading && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          role="status"
          aria-live="polite"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div
              className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-[#004b50]/20 border-t-[#004b50] animate-spin"
              aria-hidden
            />
            <p className="text-lg font-bold text-[#004b50]">{t.gpsLoading}</p>
            <p className="text-sm text-slate-500 mt-2">{t.gpsHint}</p>
          </div>
        </div>
      )}

      {/* Maintenance request modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label={t.btnClose}
            onClick={closeModal}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="maintenance-modal-title"
            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#004b50] px-6 py-5 rounded-t-3xl sm:rounded-t-3xl text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    id="maintenance-modal-title"
                    className="text-xl font-black"
                  >
                    {t.modalTitle}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">{t.modalSubtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xl leading-none disabled:opacity-50"
                  aria-label={t.btnClose}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {!coords ? (
                <>
                  <div className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-4 text-sm text-red-900">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0" aria-hidden>
                        📍
                      </span>
                      <div>
                        <p className="font-black text-base">{t.locationFail}</p>
                        <p className="mt-2 text-red-800/90 leading-relaxed">
                          {t.locationInstructions}
                        </p>
                      </div>
                    </div>
                  </div>

                  {formError && (
                    <p
                      className="text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2"
                      role="alert"
                    >
                      {formError}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={retryLocation}
                    disabled={locationRetryLoading}
                    className="w-full py-4 rounded-xl font-black text-white bg-[#004b50] hover:bg-[#00363a] shadow-lg transition-colors disabled:opacity-60 disabled:cursor-wait text-base"
                  >
                    {locationRetryLoading ? t.locationRetrying : t.btnEnableLocation}
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={locationRetryLoading}
                    className="w-full py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-50"
                  >
                    {t.btnCancel}
                  </button>
                </>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm bg-emerald-50 text-emerald-900 border border-emerald-200">
                    <span className="text-lg shrink-0" aria-hidden>
                      📍
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold">{t.locationOk}</p>
                      {mapUrl && (
                        <a
                          href={mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-1 text-[#004b50] font-bold underline underline-offset-2"
                        >
                          {t.viewMap}
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="maint-name"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      {t.labelName}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <input
                      id="maint-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      enterKeyHint="next"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={t.placeholderName}
                      disabled={submitting}
                      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#004b50] focus:outline-none focus:ring-2 focus:ring-[#004b50]/20 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="maint-phone"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      {t.labelPhone}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <input
                      id="maint-phone"
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      enterKeyHint="done"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder={t.placeholderPhone}
                      disabled={submitting}
                      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#004b50] focus:outline-none focus:ring-2 focus:ring-[#004b50]/20 disabled:opacity-60"
                      dir="ltr"
                    />
                  </div>

                  {formError && (
                    <p
                      className="text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2"
                      role="alert"
                    >
                      {formError}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-black text-white bg-[#004b50] hover:bg-[#00363a] shadow-lg transition-colors disabled:opacity-60 disabled:cursor-wait text-base"
                    >
                      {submitting ? t.submitting : t.btnSubmit}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={submitting}
                      className="w-full py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-50"
                    >
                      {t.btnCancel}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
