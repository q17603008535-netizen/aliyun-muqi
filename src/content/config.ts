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

const contact = defineCollection({
  type: 'content',
  schema: z.object({
    wechat: z.string().default(''),
    line: z.string().default(''),
    email: z.string().default(''),
    phone: z.string().default(''),
    company_name: z.string().default(''),
    address: z.string().default(''),
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

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    slogan: z.string().default(''),
    subtitle: z.string().default(''),
    cta_text: z.string().default(''),
    cta_link: z.string().default(''),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default(''),
    experience: z.string().default(''),
    background: z.string().default(''),
    philosophy: z.string().default(''),
  }),
});

export const collections = {
  products,
  contact,
  testimonials,
  hero,
  about,
};
