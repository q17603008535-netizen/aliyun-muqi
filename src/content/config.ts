import { defineCollection, z } from 'astro:content';

const settings = defineCollection({
  type: 'content',
  schema: z.object({
    logo: z.string().optional(),
    brand_name: z.string().default('沐祁珠寶'),
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
      { text: '曼德勒直採｜15年經驗' },
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
      { text: '一物一證｜只賺取20%定制费' },
    ]),
    subtitle_lines_mobile: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '本地匯率優勢' },
      { text: '一物一證' },
    ]),
    cta_text: z.string().default('立即咨詢'),
    badge_text: z.string().default('缅甸翡翠定制专家'),
    youtube_url: z.string().optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    experience_image: z.string().optional(),
    experience_text: z.string().default('15年+'),
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
      { icon: '商務', title: '定制费透明', description: '只賺取 20% 定制费，絕不額外收費' },
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
      { icon: '專業可靠', title: '專業可靠', description: '15年行業經驗。14年雕刻學徒眼光' },
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
    timestamp: z.string().optional(),
    customize_type: z.enum(['手鐲定制', '吊墜定制', '戒指定制', '耳環定制', '其他定制']).optional(),
    conversation: z.array(z.object({
      speaker: z.enum(['客戶', '洛天']).default('客戶'),
      text: z.string(),
    })).optional(),
    before_image: z.string().optional(),
    after_image: z.string().optional(),
  }),
});

const testimonials_config = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const free_gifts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('今日加微信，免費獲取'),
    subtitle: z.string().default('限量供應，錯過不再'),
    gifts: z.array(z.object({
      icon: z.enum(['鉴定', '设计', '手册', '优惠券', '原石', '证书']).default('鉴定'),
      title: z.string(),
      description: z.string(),
    })).default([
      { icon: '鉴定', title: '免費翡翠真假鑒定', description: '拍照發微信，專業幫您判斷真假' },
      { icon: '设计', title: '免費定制方案設計', description: '10年+經驗設計師為您量身定制' },
      { icon: '手册', title: '《10年+翡翠知識經驗手冊》', description: '精選翡翠鑒賞乾貨，助您避坑' },
      { icon: '优惠券', title: '首次定制專享優惠券', description: '限時領取，最高可減1000元' },
    ]),
    cta_text: z.string().default('立即領取'),
    enabled: z.boolean().default(true),
  }),
});

const pain_points = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('您是否有以下困擾？'),
    pain_items: z.array(z.object({
      icon: z.enum(['款式', '定制', '周期', '效果', '价格', '品质', '真假', '选择']).default('款式'),
      text: z.string(),
    })).default([
      { icon: '款式', text: '商場成品款式千篇一律，缺乏個性' },
      { icon: '定制', text: '想要獨一無二的翡翠，但不知如何定制' },
      { icon: '周期', text: '擔心定制周期長、溝通成本高' },
      { icon: '效果', text: '擔心定制效果與想象不符' },
      { icon: '价格', text: '不確定定制是否真的物有所值' },
    ]),
    solution_title: z.string().default('沐祁珠寶為您解決以上所有問題'),
    solution_description: z.string().default('10年+從業經驗，1000+成功案例'),
    enabled: z.boolean().default(true),
  }),
});

const price_comparison = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('同樣品質，為何價格相差如此之大？'),
    traditional_title: z.string().default('傳統商場'),
    traditional_price: z.string().default('¥30,000'),
    traditional_reasons: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '多層中間商加價' },
      { text: '店鋪租金成本' },
      { text: '品牌溢價' },
    ]),
    muqi_title: z.string().default('沐祁定制'),
    muqi_price: z.string().default('¥12,000-15,000'),
    muqi_reasons: z.array(z.object({
      text: z.string(),
    })).default([
      { text: '緬甸一手貨源' },
      { text: '線上直銷模式' },
      { text: '省去60%中間環節' },
    ]),
    conclusion: z.string().default('我們不打價格戰，但同等品質下，價格更合理'),
    enabled: z.boolean().default(true),
  }),
});

const urgency_settings = defineCollection({
  type: 'content',
  schema: z.object({
    enabled: z.boolean().default(true),
    messages: z.array(z.object({
      text: z.string(),
      position: z.enum(['hero', 'free_gifts', 'pain_points', 'all']).default('all'),
    })).default([
      { text: '本月僅剩3個定制名額', position: 'all' },
      { text: '限時優惠：首次定制立減1000元', position: 'free_gifts' },
      { text: '加微信即送《翡翠鑒賞手冊》，今日截止', position: 'hero' },
    ]),
    cta_text: z.string().default('立即咨詢'),
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

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum([
      '场口解析',
      '选购技巧',
      '避坑指南',
      '玉石文化'
    ]),
    tags: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
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
  testimonials_config,
  tracking_codes,
  knowledge,
  free_gifts,
  pain_points,
  price_comparison,
  urgency_settings,
};
