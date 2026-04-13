import { type SchemaTypeDefinition } from 'sanity'

const gallery: SchemaTypeDefinition = {
  name: 'gallery',
  title: 'Work Gallery (معرض الشغل)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Name (اسم العملية/المشروع)',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Work Image (صورة الشغل)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description (وصف سريع)',
      type: 'text',
    },
  ],
}

// السطر ده هو اللي هيحل المشكلة ويخلي config يشوف الداتا صح
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery],
}