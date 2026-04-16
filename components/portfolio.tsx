"use client";
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; 
import { urlFor } from '@/sanity/lib/image';  

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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

  const openLightbox = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; 
  };

  const nextImage = (e: any, imagesLength: number) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: any, imagesLength: number) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  };

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
            // فلترة الصور للتأكد إنها بتحتوي على ملف حقيقي
            const validWorkImages = project.workImages ? project.workImages.filter((img: any) => img && img.asset) : [];
            const coverImage = (project.mainImage && project.mainImage.asset) ? project.mainImage : (validWorkImages.length > 0 ? validWorkImages[0] : null);
            
            return (
              <div 
                key={project._id}
                onClick={() => openLightbox(project)}
                className="group relative flex flex-col items-center gap-4 p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/40 transition-all duration-500 overflow-hidden text-center cursor-pointer"
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

                  {validWorkImages.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white border border-white/10 shadow-sm">
                      +{validWorkImages.length} صور
                    </div>
                  )}
                </div>
                
                <div className="relative z-10 w-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-bold mb-3 border border-slate-700">
                    {project.category || "حلول طاقة"}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.projectName || project.title || "بدون عنوان"}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2">
                    {project.description || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* شاشة الألبوم المنبثقة */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl font-light transition-colors z-50"
          >
            &times;
          </button>

          {(() => {
            // تجميع الصور السليمة فقط لعرضها في الألبوم
            const validWorkImages = selectedProject.workImages ? selectedProject.workImages.filter((img: any) => img && img.asset) : [];
            const allImages = [
              ...(selectedProject.mainImage && selectedProject.mainImage.asset ? [selectedProject.mainImage] : []),
              ...validWorkImages
            ];

            return (
              <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                
                {allImages.length > 0 ? (
                  <img 
                    src={urlFor(allImages[currentImageIndex]).url()} 
                    alt="صورة مكبرة"
                    className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <div className="text-white text-2xl">لا توجد صور صالحة للعرض</div>
                )}

                <h3 className="text-white text-xl font-bold mt-6 text-center">
                  {selectedProject.projectName || selectedProject.title}
                </h3>
                <p className="text-slate-400 mt-2 text-center max-w-2xl">
                  {selectedProject.description}
                </p>

                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => prevImage(e, allImages.length)}
                      className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={(e) => nextImage(e, allImages.length)}
                      className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>

                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm tracking-widest">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>
            );
          })()}
        </div>
      )}

    </section>
  );
}