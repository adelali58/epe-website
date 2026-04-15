import imageUrlBuilder from '@sanity/image-url'
import { client } from './client' // مسار ملف الـ client بتاعك

const builder = imageUrlBuilder(client)

// الدالة دي هي اللي هنستخدمها عشان نظهر أي صورة
export function urlFor(source: any) {
  return builder.image(source)
}