import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    weight: z.string(),
    price: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    background_image: z.string().optional(),
    title: z.string().default('專業翡翠原石買手｜曼德勒直採｜10年經驗'),
    subtitle: z.string().default('本地匯率優勢｜一物一證｜只賺取20%代購費'),
    cta_text: z.string().default('立即咨詢'),
  }),
});

const contact = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['微信', 'LINE', 'Email', '電話', '地址']).default('微信'),
    value: z.string().default(''),
    label: z.string().default('請添加'),
    icon: z.string().default(''),
    visible: z.boolean().default(true),
    order: z.number().default(1),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    content: z.string(),
    rating: z.number().min(1).max(5).default(5),
  }),
});

export const collections = {
  products,
  hero,
  contact,
  testimonials,
};
