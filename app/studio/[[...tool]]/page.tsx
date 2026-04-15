import { client } from '@/sanity/lib/client' // تأكد من مسار الـ client
import { urlFor } from '@/sanity/lib/image' // تأكد من مسار دالة urlFor
import Image from 'next/image'

// 1. الاستعلام اللي بيجيب الداتا من Sanity
const query = `*[_type == "gallery"]{
  _id,
  projectName,
  workImages
}`;

export default async function WorkGallery() {
  // 2. جلب الداتا
  const projects = await client.fetch(query);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
        معرض أعمالنا - Experience Power Energy
      </h1>

      {/* 3. اللوب (Loop) اللي بيلف على المشاريع */}
      {projects.map((project: any) => (
        <div key={project._id} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
            {project.projectName}
          </h2>

          {/* 4. اللوب الداخلي اللي بيلف على ألبوم الصور جوه كل مشروع */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.workImages && project.workImages.map((image: any, index: number) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md border border-gray-100">
                <img
                  src={urlFor(image).width(800).url()} // هنا بنستخدم الدالة عشان نولد الرابط
                  alt={`${project.projectName} - صورة ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}