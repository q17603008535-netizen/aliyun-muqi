# 翡翠原石科普知识库实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在现有网站中增加科普知识库功能，提升 SEO 和广告效果，同时保证现有功能不崩溃

**Architecture:** 基于 Astro Content Collections 的静态站点生成架构，包含首页科普窗口、总科普页、单篇详情页三个核心页面

**Tech Stack:** Astro 4.x + Tailwind CSS + TypeScript + Content Collections

---

## 📋 任务总览

| Phase | 任务 | 优先级 | 预计时间 | 依赖 |
|-------|------|--------|----------|------|
| **Phase 1** | Content Collection 配置 | P0 | 15 分钟 | 无 |
| **Phase 2** | 科普页面组件开发 | P0 | 40 分钟 | Phase 1 |
| **Phase 3** | 总科普页开发 | P0 | 25 分钟 | Phase 2 |
| **Phase 4** | 单篇详情页开发 | P0 | 30 分钟 | Phase 2 |
| **Phase 5** | 首页集成 | P0 | 20 分钟 | Phase 2 |
| **Phase 6** | 图片管理 | P1 | 15 分钟 | 无 |
| **Phase 7** | SEO 优化 | P1 | 15 分钟 | Phase 3-4 |
| **Phase 8** | 转化追踪集成 | P1 | 20 分钟 | Phase 4 |
| **Phase 9** | 性能测试 | P1 | 20 分钟 | Phase 5-8 |
| **Phase 10** | 文档培训 | P2 | 15 分钟 | Phase 9 |

---

## Phase 1: Content Collection 配置

### Task 1.1: 创建 Content Collection Schema

**Files:**
- Create: `src/content/config.ts` (修改)
- Test: 无

- [ ] **Step 1: 打开现有配置文件**

打开文件：`src/content/config.ts`

- [ ] **Step 2: 添加 knowledge collection**

在现有 collections 后面添加：

```typescript
const knowledgeCollection = defineCollection({
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
  // ... 现有 collections
  'knowledge': knowledgeCollection,
};
```

- [ ] **Step 3: 验证 TypeScript 无报错**

运行命令：
```bash
npx tsc --noEmit
```
Expected: 无错误

- [ ] **Step 4: 提交**

```bash
git add src/content/config.ts
git commit -m "feat: add knowledge content collection"
```

---

### Task 1.2: 创建示例 Markdown 文件

**Files:**
- Create: `src/content/knowledge/moxisha-intro.md`
- Create: `src/content/knowledge/laokeng-guide.md`
- Create: `src/content/knowledge/tip-001.md`

- [ ] **Step 1: 创建目录**

```bash
mkdir -p src/content/knowledge
```

- [ ] **Step 2: 创建第一篇示例文章**

创建文件：`src/content/knowledge/moxisha-intro.md`

```markdown
---
title: "莫西沙场口全解析"
description: "莫西沙是缅甸翡翠最著名的场口之一，以出产高色高种翡翠闻名"
publishDate: 2026-03-18
category: "场口解析"
tags: ["莫西沙", "翡翠原石", "场口"]
image: "/images/knowledge/moxisha-sample.jpg"
featured: true
order: 1
---

## 莫西沙场口的地理位置

莫西沙场口位于缅甸克钦邦，是世界上最著名的翡翠原石产地之一。

## 莫西沙翡翠的特点

- 种水好
- 颜色正
- 透明度高

![莫西沙原石样本](/images/knowledge/moxisha-sample.jpg)
```

- [ ] **Step 3: 创建第二篇示例文章**

创建文件：`src/content/knowledge/laokeng-guide.md`

```markdown
---
title: "老坑翡翠选购指南"
description: "老坑翡翠是高品质翡翠的代名词，本文分享老坑翡翠的选购技巧"
publishDate: 2026-03-18
category: "选购技巧"
tags: ["老坑", "翡翠选购", "技巧"]
image: "/images/knowledge/laokeng-sample.jpg"
featured: true
order: 2
---

## 什么是老坑翡翠

老坑翡翠指的是开采历史悠久的矿坑出产的翡翠。

## 老坑翡翠的特征

- 质地细腻
- 透明度高
- 颜色纯正
```

- [ ] **Step 4: 创建第三篇示例文章**

创建文件：`src/content/knowledge/tip-001.md`

```markdown
---
title: "翡翠原石避坑指南 - 新手必读"
description: "新手选购翡翠原石容易踩的坑，本文帮你避开常见陷阱"
publishDate: 2026-03-18
category: "避坑指南"
tags: ["避坑", "新手", "选购技巧"]
image: "/images/knowledge/tip-sample.jpg"
featured: true
order: 3
---

## 常见陷阱

1. 以次充好
2. 虚假场口
3. 价格虚高

## 如何避免

- 选择可靠商家
- 学习基础知识
- 不要贪便宜
```

- [ ] **Step 5: 验证 Markdown 语法**

运行命令：
```bash
npm run dev
```
Expected: 无报错

- [ ] **Step 6: 提交**

```bash
git add src/content/knowledge/
git commit -m "feat: add example knowledge articles"
```

---

## Phase 2: 科普页面组件开发

### Task 2.1: 创建 KnowledgeCard 组件

**Files:**
- Create: `src/components/knowledge/KnowledgeCard.astro`

- [ ] **Step 1: 创建目录**

```bash
mkdir -p src/components/knowledge
```

- [ ] **Step 2: 创建卡片组件**

创建文件：`src/components/knowledge/KnowledgeCard.astro`

```astro
---
interface Props {
  title: string;
  description: string;
  slug: string;
  image?: string;
  category?: string;
  publishDate?: Date;
}

const { title, description, slug, image, category, publishDate } = Astro.props;
---

<article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
  {image && (
    <div class="aspect-video bg-gray-100 relative overflow-hidden">
      <img
        src={image}
        alt={title}
        class="object-cover w-full h-full"
        loading="lazy"
      />
      {category && (
        <span class="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
          {category}
        </span>
      )}
    </div>
  )}
  
  <div class="p-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
      {title}
    </h3>
    
    <p class="text-gray-600 text-sm mb-3 line-clamp-2">
      {description}
    </p>
    
    {publishDate && (
      <p class="text-xs text-gray-500 mb-3">
        {new Date(publishDate).toLocaleDateString('zh-TW', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    )}
    
    <a
      href={`/knowledge/${slug}/`}
      class="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition text-sm font-medium"
    >
      阅读 →
    </a>
  </div>
</article>
```

- [ ] **Step 3: 验证组件可独立渲染**

创建测试文件：`src/pages/test-card.astro`

```astro
---
import KnowledgeCard from '../components/knowledge/KnowledgeCard.astro';
---

<html>
  <body class="p-8">
    <KnowledgeCard
      title="测试文章"
      description="这是一篇测试文章"
      slug="test-article"
      image="/images/knowledge/moxisha-sample.jpg"
      category="场口解析"
      publishDate={new Date()}
    />
  </body>
</html>
```

访问：http://localhost:4321/test-card

- [ ] **Step 4: 删除测试文件**

```bash
rm src/pages/test-card.astro
```

- [ ] **Step 5: 提交**

```bash
git add src/components/knowledge/KnowledgeCard.astro
git commit -m "feat: add KnowledgeCard component"
```

---

### Task 2.2: 创建 KnowledgeWindow 组件

**Files:**
- Create: `src/components/knowledge/KnowledgeWindow.astro`

- [ ] **Step 1: 创建科普窗口组件**

创建文件：`src/components/knowledge/KnowledgeWindow.astro`

```astro
---
import { getCollection } from 'astro:content';
import KnowledgeCard from './KnowledgeCard.astro';

// 获取 3 篇精选文章
const featuredArticles = await getCollection('knowledge', ({ data }) => {
  return data.featured === true;
});

// 按 order 排序，取前 3 篇
featuredArticles.sort((a, b) => {
  if (a.data.order !== b.data.order) {
    return a.data.order - b.data.order;
  }
  return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
});

const displayArticles = featuredArticles.slice(0, 3);
---

<section class="bg-stone-50 py-12">
  <div class="container mx-auto px-4">
    <!-- 标题栏 -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">
          翡翠原石科普知识
        </h2>
        <p class="text-gray-600">
          了解缅甸翡翠原石选购技巧
        </p>
      </div>
      
      <a
        href="/knowledge/"
        class="inline-flex items-center text-primary font-medium hover:underline"
      >
        浏览全部
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <!-- 文章卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayArticles.map((article) => (
        <KnowledgeCard
          title={article.data.title}
          description={article.data.description}
          slug={article.id}
          image={article.data.image}
          category={article.data.category}
          publishDate={article.data.publishDate}
        />
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: 验证组件**

运行命令：
```bash
npm run dev
```

Expected: 无报错

- [ ] **Step 3: 提交**

```bash
git add src/components/knowledge/KnowledgeWindow.astro
git commit -m "feat: add KnowledgeWindow component"
```

---

### Task 2.3: 创建 KnowledgeNav 组件

**Files:**
- Create: `src/components/knowledge/KnowledgeNav.astro`

- [ ] **Step 1: 创建导航组件**

创建文件：`src/components/knowledge/KnowledgeNav.astro`

```astro
---
interface Props {
  currentPage?: 'list' | 'detail';
  prevSlug?: string;
  nextSlug?: string;
}

const { currentPage = 'list', prevSlug, nextSlug } = Astro.props;
---

<nav class="flex items-center justify-between py-4 border-b border-gray-200 mb-6">
  <!-- 返回总科普页 -->
  <a
    href="/knowledge/"
    class="inline-flex items-center text-primary hover:underline"
  >
    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    返回总科普页
  </a>
  
  <!-- 上一篇/下一篇 -->
  {currentPage === 'detail' && (
    <div class="flex gap-4">
      {prevSlug && (
        <a
          href={`/knowledge/${prevSlug}/`}
          class="text-gray-600 hover:text-primary"
        >
          ← 上一篇
        </a>
      )}
      
      {nextSlug && (
        <a
          href={`/knowledge/${nextSlug}/`}
          class="text-gray-600 hover:text-primary"
        >
          下一篇 →
        </a>
      )}
    </div>
  )}
  
  <!-- 分享按钮 -->
  <button
    onclick="navigator.share({ title: document.title, url: window.location.href })"
    class="text-gray-600 hover:text-primary"
  >
    分享
  </button>
</nav>
```

- [ ] **Step 2: 提交**

```bash
git add src/components/knowledge/KnowledgeNav.astro
git commit -m "feat: add KnowledgeNav component"
```

---

## Phase 3: 总科普页开发

### Task 3.1: 创建总科普页

**Files:**
- Create: `src/pages/knowledge/index.astro`

- [ ] **Step 1: 创建目录**

```bash
mkdir -p src/pages/knowledge
```

- [ ] **Step 2: 创建总科普页**

创建文件：`src/pages/knowledge/index.astro`

```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import KnowledgeCard from '../../components/knowledge/KnowledgeCard.astro';

const allArticles = await getCollection('knowledge');

// 按日期倒序排序
allArticles.sort((a, b) => {
  return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
});

// SEO
const seo = {
  title: '翡翠原石科普知识 - 场口解析与选购指南 | 洛天翡翠',
  description: '专业缅甸翡翠原石科普，包含莫西沙、老坑等场口解析，选购技巧和避坑指南。缅甸直供，品质保证。',
  keywords: '翡翠原石，缅甸翡翠，场口解析，选购技巧，莫西沙，老坑',
};
---

<Layout seo={seo}>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        翡翠原石科普知识
      </h1>
      <p class="text-xl text-gray-600">
        场口解析、选购技巧、避坑指南
      </p>
    </div>
    
    <!-- 分类筛选（可选） -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button class="px-4 py-2 bg-primary text-white rounded">
        全部
      </button>
      <button class="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100">
        场口解析
      </button>
      <button class="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100">
        选购技巧
      </button>
      <button class="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100">
        避坑指南
      </button>
    </div>
    
    <!-- 文章列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allArticles.map((article) => (
        <KnowledgeCard
          title={article.data.title}
          description={article.data.description}
          slug={article.id}
          image={article.data.image}
          category={article.data.category}
          publishDate={article.data.publishDate}
        />
      ))}
    </div>
  </div>
</Layout>
```

- [ ] **Step 3: 验证页面**

运行命令：
```bash
npm run dev
```

访问：http://localhost:4321/knowledge/

Expected: 页面正常显示，包含所有文章列表

- [ ] **Step 4: 提交**

```bash
git add src/pages/knowledge/index.astro
git commit -m "feat: add knowledge list page"
```

---

## Phase 4: 单篇详情页开发

### Task 4.1: 创建动态路由页面

**Files:**
- Create: `src/pages/knowledge/[slug].astro`

- [ ] **Step 1: 创建动态路由页面**

创建文件：`src/pages/knowledge/[slug].astro`

```astro
---
import { getCollection, getEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import KnowledgeNav from '../../components/knowledge/KnowledgeNav.astro';

// 获取当前文章
const { slug } = Astro.params;
const article = await getEntry('knowledge', slug!);

// 获取所有文章用于上一篇/下一篇导航
const allArticles = await getCollection('knowledge');
allArticles.sort((a, b) => {
  return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
});

const currentIndex = allArticles.findIndex(a => a.id === slug);
const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

// SEO
const seo = {
  title: `${article.data.title} | 洛天翡翠`,
  description: article.data.description,
  keywords: article.data.tags.join(', '),
};
---

<Layout seo={seo}>
  <article class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- 导航 -->
    <KnowledgeNav
      currentPage="detail"
      prevSlug={prevArticle?.id}
      nextSlug={nextArticle?.id}
    />
    
    <!-- 文章标题 -->
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {article.data.title}
      </h1>
      
      <div class="flex items-center gap-4 text-sm text-gray-600">
        <span>{article.data.category}</span>
        <span>•</span>
        <time>
          {new Date(article.data.publishDate).toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        {article.data.tags.length > 0 && (
          <>
            <span>•</span>
            <div class="flex gap-2">
              {article.data.tags.map(tag => (
                <span class="bg-gray-100 px-2 py-1 rounded">#{tag}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
    
    <!-- 封面图片 -->
    {article.data.image && (
      <div class="mb-8 rounded-lg overflow-hidden">
        <img
          src={article.data.image}
          alt={article.data.title}
          class="w-full h-auto"
          loading="lazy"
        />
      </div>
    )}
    
    <!-- 文章内容 -->
    <div class="prose prose-lg max-w-none">
      <article set:html={article.render().content} />
    </div>
    
    <!-- 复制微信按钮（带转化追踪） -->
    <div class="mt-12 text-center">
      <button
        id="copy-wechat-btn"
        class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-medium"
      >
        复制微信
      </button>
      <p class="text-sm text-gray-600 mt-2">
        复制后添加微信，获取更多专业咨询
      </p>
    </div>
  </article>
  
  <!-- 转化追踪脚本 -->
  <script>
    document.getElementById('copy-wechat-btn')?.addEventListener('click', async () => {
      const wechatId = '你的微信号'; // TODO: 从配置获取
      
      try {
        await navigator.clipboard.writeText(wechatId);
        
        // gtag 追踪
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' // TODO: 替换为实际 ID
          });
        }
        
        // dataLayer 推送
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: 'copy_wechat',
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
          article: '{article.data.title}'
        });
        
        alert('微信号已复制，请在微信中搜索添加！');
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
  </script>
</Layout>
```

- [ ] **Step 2: 验证页面**

访问：http://localhost:4321/knowledge/moxisha-intro/

Expected: 文章正常显示，包含导航、内容、复制按钮

- [ ] **Step 3: 提交**

```bash
git add src/pages/knowledge/[slug].astro
git commit -m "feat: add knowledge article detail page"
```

---

## Phase 5: 首页集成

### Task 5.1: 修改首页

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: 打开首页文件**

打开文件：`src/pages/index.astro`

- [ ] **Step 2: 导入 KnowledgeWindow 组件**

在文件顶部添加：

```astro
import KnowledgeWindow from '../components/knowledge/KnowledgeWindow.astro';
```

- [ ] **Step 3: 在合适位置插入组件**

找到合适的位置（建议在 Products 组件后面），添加：

```astro
<!-- 科普窗口 -->
<KnowledgeWindow />
```

- [ ] **Step 4: 验证首页**

访问：http://localhost:4321/

Expected: 首页正常显示，包含科普窗口（3 张卡片）

- [ ] **Step 5: 提交**

```bash
git add src/pages/index.astro
git commit -m "feat: add knowledge window to homepage"
```

---

### Task 5.2: 修改导航栏

**Files:**
- Modify: `src/components/Navbar.astro`

- [ ] **Step 1: 打开导航栏文件**

打开文件：`src/components/Navbar.astro`

- [ ] **Step 2: 添加科普知识菜单项**

找到导航菜单，添加：

```html
<a
  href="/knowledge/"
  class="nav-link"
>
  科普知识
</a>
```

- [ ] **Step 3: 验证导航栏**

刷新页面，检查导航栏

Expected: 导航栏显示"科普知识"链接

- [ ] **Step 4: 提交**

```bash
git add src/components/Navbar.astro
git commit -m "feat: add knowledge link to navbar"
```

---

## Phase 6-10: 后续任务

（由于篇幅限制，后续任务简要列出）

### Phase 6: 图片管理

- [ ] 创建图片目录：`public/images/knowledge/`
- [ ] 配置图片优化
- [ ] 创建图片使用示例

### Phase 7: SEO 优化

- [ ] 配置每个页面的 meta 标签
- [ ] 添加结构化数据（Schema.org）
- [ ] 提交 sitemap 到 Google Search Console

### Phase 8: 转化追踪集成

- [ ] 获取 Google Ads 转化 ID
- [ ] 修改复制按钮组件
- [ ] 测试验证

### Phase 9: 性能测试

- [ ] Lighthouse 测试
- [ ] 图片懒加载优化
- [ ] Vercel 部署测试

### Phase 10: 文档培训

- [ ] 创建使用文档
- [ ] 现场演示
- [ ] 验收测试

---

## 🎯 执行顺序

**推荐执行顺序**:

1. **Phase 1** → 基础配置（必须）
2. **Phase 2** → 组件开发（必须）
3. **Phase 3** → 总科普页（必须）
4. **Phase 4** → 单篇详情页（必须）
5. **Phase 5** → 首页集成（必须）
6. **Phase 6-10** → 优化和测试（可选分阶段）

**并行开发建议**:

- **子任务 A**: Phase 1 + Phase 2（基础架构）
- **子任务 B**: Phase 3 + Phase 4（页面开发）
- **子任务 C**: Phase 5 + Phase 6（集成和优化）

---

## ✅ 验收标准

### 功能验收

- [ ] 首页科普窗口显示正常（3 张卡片）
- [ ] 每张卡片点击跳转正确
- [ ] "浏览全部"按钮跳转正确
- [ ] 总科普页显示所有文章
- [ ] 单篇详情页渲染正常
- [ ] 导航栏所有入口正常工作
- [ ] **现有功能（产品、联系表单等）正常工作**

### 性能验收

- [ ] Lighthouse 分数 > 90
- [ ] 首屏加载 < 3 秒
- [ ] 所有图片懒加载
- [ ] Vercel 部署成功

### SEO 验收

- [ ] 每个页面有独立 Title/Description
- [ ] 结构化数据验证通过
- [ ] Google Search Console 收录正常

---

**计划版本**: v1.0  
**创建日期**: 2026-03-18  
**状态**: 待审查  
**审查人**: @用户
