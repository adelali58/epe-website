"use client";
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; 
import { urlFor } from '@/sanity/lib/image';  

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. الاستعلام: تم إضافة الحقول الجديدة (projectName و workImages) بجانب القديمة
    const query = `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      projectName,
      description,
      category,
      mainImage,
      workImages
    }`;

    client.fetch(query).then((data) => {
      setProjects(data);
      setLoading(false);
    }).catch(err => {
      console.error("مشكلة في جلب البيانات من سانتي:", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-24 text-center text-white">جاري تحميل أحدث حلولنا...</div>;

  return (
    <section id="portfolio" className="relative py-24 bg-[#050505]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            حلولنا <span className="text-blue-500">الذكية</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            نقدم باقة متكاملة من حلول شحن السيارات الكهربائية وأنظمة الحماية بأعلى المواصفات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project: any) => {
            // 2. الـ Fallback للصور: لو مفيش صورة قديمة، هياخد أول صورة من الألبوم الجديد
            const coverImage = project.mainImage || (project.workImages && project.workImages.length > 0 ? project.workImages[0] : null);
            
            return (
              <div 
                key={project._id}
                className="group relative flex flex-col items-center gap-4 p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/40 transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-full h-48 rounded-2xl bg-slate-950 border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-xl overflow-hidden mb-2">
                  {coverImage ? (
                    <img 
                      src={urlFor(coverImage).url()} 
                      alt={project.projectName || project.title || "صورة المشروع"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">⚡</div>
                  )}

                  {/* 3. شريط صغير بيظهر لو المشروع ده فيه أكتر من صورة (نظام الألبوم) */}
                  {project.workImages && project.workImages.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white border border-white/10 shadow-sm">
                      +{project.workImages.length} صور
                    </div>
                  )}
                </div>
                
                <div className="relative z-10 w-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-bold mb-3 border border-slate-700">
                    {project.category || "حلول طاقة"}
                  </span>
                  
                  {/* 4. الـ Fallback للعنوان: هيقرأ الجديد، لو ملقاش هيقرأ القديم */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.projectName || project.title || "بدون عنوان"}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {project.description || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}