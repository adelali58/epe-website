"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-4 z-50 w-full px-4 sm:px-6 transition-all" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between rounded-2xl bg-slate-900/80 px-6 shadow-2xl backdrop-blur-md border border-white/10">
          
          {/* اللوجو النصي */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-black text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-blue-500 text-2xl">⚡</span> 
              <span className="tracking-tighter">EPE</span>
            </Link>
          </div>

          {/* روابط التنقل والزراير */}
          <ul className="flex items-center gap-6 text-sm font-bold">
            <li className="hidden md:block">
              <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                طلب صيانة
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
// تجربة التحديث