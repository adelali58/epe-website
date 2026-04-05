"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* القسم الأول: عن الشركة */}
          <div className="space-y-4">
            <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
              <span className="text-blue-500 text-3xl">⚡</span> 
              EXPERIENCE POWER ENERGY
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              الرواد في حلول شحن السيارات الكهربائية وأنظمة الطاقة المتكاملة. نجمع بين الخبرة الهندسية وأحدث التقنيات العالمية.
            </p>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">روابط سريعة</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">الرئيسية</Link></li>
              <li><Link href="#services" className="hover:text-blue-500 transition-colors">خدماتنا</Link></li>
              <li><Link href="#gallery" className="hover:text-blue-500 transition-colors">سابقة الأعمال</Link></li>
              <li><Link href="#contact" className="hover:text-blue-500 transition-colors">طلب صيانة فورية</Link></li>
            </ul>
          </div>

          {/* القسم الثالث: تواصل معنا */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">بيانات الاتصال</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                <span dir="ltr">010 8038 0777</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                <span dir="ltr">experience62577@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📍</span>
                <span>القاهرة--روكسى</span>
              </li>
            </ul>
          </div>

        </div>

        {/* سطر الحقوق السفلي */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="text-slate-500 text-xs font-medium tracking-wide uppercase">
            &copy; 2026 Experience Power Energy. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-slate-500 text-xs">
             <span className="hover:text-white cursor-pointer transition-colors">شروط الخدمة</span>
             <span className="hover:text-white cursor-pointer transition-colors">سياسة الخصوصية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}