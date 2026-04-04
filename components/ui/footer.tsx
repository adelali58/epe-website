import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
            <span className="text-blue-500">⚡</span> EPE
          </div>
          <div className="text-slate-400 text-sm font-medium">
            &copy; 2026 Experience Power Energy. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}