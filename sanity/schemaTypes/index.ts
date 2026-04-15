import { type SchemaTypeDefinition } from 'sanity'

const gallery: SchemaTypeDefinition = {
  name: 'gallery',
  title: 'معرض الشغل (Work Gallery)',
  type: 'document',
  fields: [
    // الحقول القديمة عشان الداتا متروحش
    {
      name: 'title',
      title: 'العنوان (Title)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'الوصف (Description)',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'الصورة الرئيسية (Main Image)',
      type: 'image',
    },
    // الحقل الجديد بتاع الألبوم اللي ضفناه
    {
      name: 'workImages',
      title: 'صور الشغل (ألبوم) Work Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      }
    }
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery],
}