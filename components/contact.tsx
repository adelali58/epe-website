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
    e.preventDefault(); // منع الصفحة من التحميل من جديد

    // التأكد إن العميل كاتب اسمه ورقمه
    if (!formData.name || !formData.phone) {
      alert("برجاء إدخال الاسم ورقم الهاتف على الأقل لنتمكن من التواصل معك.");
      return;
    }

    setLoading(true);

    // تجميع البيانات في رسالة واحدة مرتبة
    const fullMessage = `
طلب جديد من الموقع! ⚡

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
الخدمة المطلوبة: ${formData.serviceType}
تفاصيل الطلب: ${formData.details}
    `;

    try {
      // إرسال الإيميل بنفس مفاتيحك
      await emailjs.send(
        'service_f4r4djs',      // Service ID
        'template_lbpbwjd',     // Template ID
        { message: fullMessage }, // الرسالة المجمعة هتنزل مكان {{message}}
        'DtIldLHpRbg87Fqy7'     // Public Key
      );

      alert("تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت ⚡");
      // تفريغ الخانات بعد الإرسال
      setFormData({ name: "", phone: "", serviceType: "توريد وتركيب شاحن جديد", details: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("حدث خطأ أثناء الإرسال، برجاء المحاولة مرة أخرى أو التواصل عبر الواتساب.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-slate-950 text-slate-200 font-sans border-t border-slate-800" dir="rtl">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Gallery Section - سابقة الأعمال */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-black text-white mb-4">سابقة أعمالنا</h2>
            <p className="text-slate-400">نفخر بتنفيذ أحدث محطات الشحن وتركيبات المنازل والشركات بأعلى معايير الجودة.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <div className="p-4 bg-slate-900">
                <h3 className="font-bold text-white">تركيب شاحن منزلي Tesla</h3>
                <p className="text-sm text-slate-400 mt-1">القاهرة الجديدة</p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <span className="text-4xl">🏢</span>
              </div>
              <div className="p-4 bg-slate-900">
                <h3 className="font-bold text-white">محطة شحن شركة كبرى</h3>
                <p className="text-sm text-slate-400 mt-1">القرية الذكية</p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <span className="text-4xl">🔋</span>
              </div>
              <div className="p-4 bg-slate-900">
                <h3 className="font-bold text-white">صيانة دورية لمحطة DC</h3>
                <p className="text-sm text-slate-400 mt-1">الإسكندرية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - نموذج التواصل */}
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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201080380777" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
        title="تواصل معنا عبر واتساب"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/></svg>
      </a>

    </section>
  );
}