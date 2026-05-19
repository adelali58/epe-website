"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "توريد وتركيب شاحن جديد",
    details: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("برجاء إدخال الاسم ورقم الهاتف على الأقل لنتمكن من التواصل معك.");
      return;
    }

    setLoading(true);

    const fullMessage = `
طلب جديد من الموقع! ⚡

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
الخدمة المطلوبة: ${formData.serviceType}
تفاصيل الطلب: ${formData.details}
    `;

    try {
      // 1. النظام القديم: الإرسال إلى الإيميل عبر EmailJS
      await emailjs.send(
        'service_f4r4djs',
        'template_lbpbwjd',
        { message: fullMessage },
        'DtlldLHpRbg87Fqy7'
      );

// التعديل الجديد: إرسال نسخة من البيانات إلى Google Sheets
const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxQjDPzxsrMBxJnselVV8U5KRt1NTAKZ0VivWpTasfbPvOLXsAuqVyryso3F1YvDPWQ/exec';
      
console.log("جاري إرسال البيانات لجوجل...", formData); // سطر للمراقبة

await fetch(googleScriptURL, {
  method: 'POST',
  mode: 'no-cors', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    phone: formData.phone,
    location: formData.serviceType + " | " + formData.details 
  })
});

console.log("تم الإرسال لجوجل بنجاح!"); // سطر للمراقبة

      // بعد نجاح الإرسال للجهتين
      alert("تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت ⚡");
      setFormData({ name: "", phone: "", serviceType: "توريد وتركيب شاحن جديد", details: "" });
      
    } catch (error) {
      console.error("Error sending data:", error);
      alert("حدث خطأ أثناء الإرسال، برجاء المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-slate-950 text-slate-200 font-sans border-t border-slate-800" dir="rtl">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">تواصل معنا الآن</h2>
            <p className="text-slate-400">سواء كنت تحتاج لتسعير، استشارة هندسية، أو طلب صيانة.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">الاسم بالكامل</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                  placeholder="اسمك الكريم" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">رقم الهاتف</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                  placeholder="01X XXXX XXXX" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">نوع الخدمة المطلوبة</label>
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option>توريد وتركيب شاحن جديد</option>
                <option>طلب صيانة أو إصلاح</option>
                <option>عقد صيانة دورية</option>
                <option>استفسار عام</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">تفاصيل الطلب</label>
              <textarea 
                rows={4} 
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="اكتب تفاصيل طلبك هنا..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] disabled:opacity-50"
            >
              {loading ? "جاري الإرسال..." : "إرسال الطلب"}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}