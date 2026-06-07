"use client";

import { useCallback, useEffect, useState } from "react";

const SITE_URL = "https://epe-website.vercel.app/";

function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /FBAN|FBAV|FBIOS|FB_IAB|FB4A|Messenger|Instagram|InstagramApp|Line\/|Twitter/i.test(
    ua
  );
}

function isAndroid(): boolean {
  return typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
}

function isIOS(): boolean {
  return (
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent)
  );
}

function buildExternalOpenUrl(currentUrl: string): string {
  if (isAndroid()) {
    const path = currentUrl.replace(/^https?:\/\//, "");
    return `intent://${path}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(currentUrl)};end`;
  }
  if (isIOS()) {
    return currentUrl.replace(/^https:\/\//, "googlechromes://");
  }
  return currentUrl;
}

export default function InAppBrowserGuard() {
  const [blocked, setBlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState(SITE_URL);

  const openInExternalBrowser = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.href : SITE_URL;
    window.location.href = buildExternalOpenUrl(url);
  }, []);

  const copyLink = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : SITE_URL;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("انسخ الرابط:", url);
    }
  }, []);

  useEffect(() => {
    if (!isInAppBrowser()) return;
    setPageUrl(window.location.href.split("#")[0]);
    setBlocked(true);

    if (isAndroid()) {
      const timer = window.setTimeout(() => {
        openInExternalBrowser();
      }, 400);
      return () => window.clearTimeout(timer);
    }
  }, [openInExternalBrowser]);

  if (!blocked) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#004b50] p-4"
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="in-app-browser-title"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl text-center">
        <div
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004b50]/10 text-3xl"
          aria-hidden
        >
          🌐
        </div>

        <h2
          id="in-app-browser-title"
          className="text-xl sm:text-2xl font-black text-[#004b50] mb-2"
        >
          افتح الموقع في المتصفح
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          للحصول على أفضل تجربة — خاصة طلب الصيانة الفورية وتحديد الموقع — يرجى
          فتح الموقع في Chrome أو Safari بدلاً من متصفح فيسبوك الداخلي.
        </p>

        <button
          type="button"
          onClick={openInExternalBrowser}
          className="w-full py-4 rounded-xl font-black text-white bg-[#004b50] hover:bg-[#00363a] shadow-lg transition-colors text-base mb-3"
        >
          {isAndroid() ? "فتح في Chrome الآن" : "فتح في المتصفح الخارجي"}
        </button>

        <button
          type="button"
          onClick={copyLink}
          className="w-full py-3 rounded-xl font-bold text-[#004b50] bg-slate-100 hover:bg-slate-200 transition-colors text-sm mb-5"
        >
          {copied ? "تم نسخ الرابط ✓" : "نسخ رابط الموقع"}
        </button>

        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-right text-sm text-amber-950">
          <p className="font-bold mb-2">إذا لم يفتح تلقائياً:</p>
          {isIOS() ? (
            <ol className="list-decimal list-inside space-y-1 leading-relaxed">
              <li>اضغط على ⋯ (ثلاث نقاط) أعلى الشاشة في فيسبوك</li>
              <li>اختر «فتح في Safari» أو «Open in Browser»</li>
            </ol>
          ) : isAndroid() ? (
            <ol className="list-decimal list-inside space-y-1 leading-relaxed">
              <li>اضغط على ⋮ (ثلاث نقاط) أعلى الشاشة</li>
              <li>اختر «فتح في Chrome» أو «Open in external browser»</li>
            </ol>
          ) : (
            <p>افتح الرابط من Chrome أو Safari أو Edge.</p>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-400 break-all" dir="ltr">
          {pageUrl}
        </p>
      </div>
    </div>
  );
}
