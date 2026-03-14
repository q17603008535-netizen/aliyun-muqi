import { defineCollection, z } from 'astro:content';

const settings = defineCollection({
  type: 'content',
  schema: z.object({
    logo: z.string().optional(),
    brand_name: z.string().default('翡翠代購'),
    instagram: z.string().url().optional(),
    youtube: z.string().url().optional(),
    facebook: z.string().url().optional(),
  }),
});

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

const products_config = defineCollection({
  type: 'content',
  schema: z.object({
    name_label: z.string().default('產品名稱'),
    name_visible: z.boolean().default(true),
    weight_label: z.string().default('重量'),
    weight_visible: z.boolean().default(true),
    price_label: z.string().default('價格'),
    price_visible: z.boolean().default(true),
    description_label: z.string().default('描述'),
    description_visible: z.boolean().default(true),
  }),
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    background_image: z.string().optional(),
    mobile_background_image: z.string().optional(),
    title_lines: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '專業翡翠原石買手' },
      { text: '曼德勒直採｜10年經驗' },
    ]),
    title_lines_mobile: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '專業翡翠原石買手' },
      { text: '曼德勒直採' },
    ]),
    subtitle_lines: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '本地匯率優勢' },
      { text: '一物一證｜只賺取20%代購費' },
    ]),
    subtitle_lines_mobile: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '本地匯率優勢' },
      { text: '一物一證' },
    ]),
    cta_text: z.string().default('立即咨詢'),
    badge_text: z.string().default('曼德勒翡翠原石專業代購'),
    youtube_url: z.string().optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    experience_image: z.string().optional(),
    experience_text: z.string().default('10年+'),
    title: z.string().default('專業翡翠原石買手'),
    description: z.string().default('有自己獨特的買原石邏輯，保證客戶買到的原石都能做貨'),
    feature_1_title: z.string().default('14年雕刻學徒出身'),
    feature_1_description: z.string().default('2014年開始做雕刻學徒，潛心5年，2019年開始轉做直播，後來開始自己買石頭'),
    feature_1_icon: z.string().default('盾牌'),
    feature_2_title: z.string().default('忠實客戶'),
    feature_2_description: z.string().default('跟隨3年以上的客戶 5人以上，口碑良好'),
    feature_2_icon: z.string().default('人群'),
    feature_3_title: z.string().default('經營理念'),
    feature_3_description: z.string().default('不割韭菜，真實做生意'),
    feature_3_icon: z.string().default('勾選'),
  }),
});

const trust = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('信任保證'),
    items: z.array(z.object({
      icon: z.string().default('盾牌'),
      title: z.string(),
      description: z.string(),
    })).default([
      { icon: '盾牌', title: '一物一證', description: '每件翡翠原石均附帶專業鑒定證書，保證天然A貨，品質有保障' },
      { icon: '貨幣', title: '本地匯率', description: '緬甸本地匯率，比國際匯率低近 50%，價格更優惠' },
      { icon: '循環', title: '7天鑑賞期', description: '提供7天無條件退換貨服務，讓您有充足時間考慮' },
      { icon: '商務', title: '代購費透明', description: '只賺取 20% 代購費，絕不額外收費' },
      { icon: '商務', title: '瑞麗公司', description: '瑞麗設有分公司，正規經營，誠信可靠' },
      { icon: '切割', title: '加工廠合作', description: '與專業加工廠合作，提供切割、雕刻等一站式服務' },
    ]),
  }),
});

const why_us = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('為什麼選擇我們'),
    items: z.array(z.object({
      icon: z.string().default('價格優勢'),
      title: z.string(),
      description: z.string(),
    })).default([
      { icon: '價格優勢', title: '價格優勢', description: '收貨量大，品質高、價格低。本地匯率比國際低50%' },
      { icon: '品質保證', title: '品質保證', description: '一物一證，天然A貨。瑞麗公司正規經營' },
      { icon: '專業可靠', title: '專業可靠', description: '10年行業經驗。14年雕刻學徒眼光' },
      { icon: '客戶口碑', title: '客戶口碑', description: '5位以上客戶跟隨3年以上。不割韭菜，真實做生意' },
    ]),
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

const tracking_codes = defineCollection({
  type: 'content',
  schema: z.object({
    head_scripts: z.string().optional(),
    body_scripts: z.string().optional(),
    foot_scripts: z.string().optional(),
  }),
});

export const collections = {
  settings,
  products,
  products_config,
  hero,
  about,
  trust,
  why_us,
  contact,
  testimonials,
  tracking_codes,
};
