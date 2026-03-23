# 沐祁珠宝品牌改版实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成品牌改版（洛天翡翠 → 沐祁珠宝），调整服务定位为高端定制，并创建 Google Ads 必需的法律页面

**Architecture:** 采用全局搜索替换 + 精准文件修改策略，确保品牌一致性。改动仅涉及文本内容和服务定位，不改变技术架构。

**Tech Stack:** Astro 5.17.1, Markdown (Content Collections), Tailwind CSS

---

## 📋 文件结构概览

### 需要修改的文件（14 个）

**核心页面**（4 个）：
- `src/pages/index.astro` - 首页标题
- `src/pages/thank-you.astro` - 感谢页面标题
- `src/pages/404.astro` - 404 页面标题
- `src/pages/500.astro` - 500 页面标题

**组件文件**（4 个）：
- `src/components/Hero.astro` - 首屏品牌名称和标语
- `src/components/Contact.astro` - 联系方式商家名称
- `src/components/SEO.astro` - SEO 元数据和结构化数据
- `src/components/Footer.astro` - 页脚品牌名称

**内容配置**（3 个）：
- `src/content/settings/config.md` - 全局品牌设置
- `src/content/hero/config.md` - Hero 区域配置
- `src/content/about/config.md` - 关于我们配置

**法律页面**（3 个，已存在，需验证内容）：
- `src/pages/privacy.astro` - 隐私政策
- `src/pages/terms.astro` - 服务条款
- `src/pages/return-policy.astro` - 退换货政策

**其他**（1 个）：
- `src/pages/copyright.astro` - 版权声明

---

## 🎯 品牌映射规则

| 原内容 | 新内容 | 说明 |
|--------|--------|------|
| 洛天翡翠 | 沐祁珠宝 | 品牌名称 |
| 翡翠原石代購 | 缅甸翡翠定制专家 | 服务定位 |
| 專業翡翠原石買手 | 缅甸翡翠定制专家 | 副标题 |
| 曼德勒專業買手 | 15 年匠心传承 | 经验说明 |
| 代購 | 定制 | 业务模式 |

---

## Task 1: 修改核心页面标题

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/thank-you.astro`
- Modify: `src/pages/404.astro`
- Modify: `src/pages/500.astro`
- Modify: `src/pages/_knowledge/index.astro`
- Modify: `src/pages/_knowledge/[slug].astro`

### Step 1: 修改首页标题

**修改文件**: `src/pages/index.astro`

**原内容** (Line 49):
```astro
<Layout title="洛天翡翠 - 翡翠原石代購｜曼德勒專業買手">
```

**新内容**:
```astro
<Layout title="沐祁珠宝 - 缅甸翡翠定制专家｜15 年匠心传承">
```

---

### Step 2: 修改感谢页面标题

**修改文件**: `src/pages/thank-you.astro`

**原内容** (Line 17):
```astro
<Layout title="感謝您的咨詢 - 洛天翡翠" description="感謝您聯繫我們，我們將盡快回覆您的咨詢">
```

**新内容**:
```astro
<Layout title="感謝您的咨詢 - 沐祁珠宝" description="感謝您聯繫我們，我們將盡快回覆您的咨詢">
```

---

### Step 3: 修改 404 页面标题

**修改文件**: `src/pages/404.astro`

**原内容** (Line 22):
```astro
<Layout title="404 - 页面未找到 | 洛天翡翠" description="您访问的页面不存在，请返回首页查看我们的翡翠原石产品。">
```

**新内容**:
```astro
<Layout title="404 - 页面未找到 | 沐祁珠宝" description="您访问的页面不存在，请返回首页查看我们的翡翠定制服务。">
```

---

### Step 4: 修改 500 页面标题

**修改文件**: `src/pages/500.astro`

**原内容** (Line 22):
```astro
<Layout title="500 - 服务器错误 | 洛天翡翠" description="服务器遇到错误，请稍后重试或联系我们的客服获取帮助。">
```

**新内容**:
```astro
<Layout title="500 - 服务器错误 | 沐祁珠宝" description="服务器遇到错误，请稍后重试或联系我们的客服获取帮助。">
```

---

### Step 5: 修改知识库首页标题

**修改文件**: `src/pages/_knowledge/index.astro`

**原内容** (Line 15):
```astro
title: '翡翠原石科普知识 - 场口解析与选购指南 | 洛天翡翠',
```

**新内容**:
```astro
title: '翡翠原石科普知识 - 场口解析与选购指南 | 沐祁珠宝',
```

---

### Step 6: 修改知识库文章页标题

**修改文件**: `src/pages/_knowledge/[slug].astro`

**原内容** (Line 22):
```astro
title: `${article.data.title} | 洛天翡翠`,
```

**新内容**:
```astro
title: `${article.data.title} | 沐祁珠宝`,
```

---

## Task 2: 修改 Hero 组件品牌名称和标语

**Files:**
- Modify: `src/components/Hero.astro`

### Step 1: 修改 Hero 品牌名称（桌面端）

**修改文件**: `src/components/Hero.astro`

**原内容** (Line 90):
```astro
<span class="block text-secondary mb-2">洛天翡翠</span>
```

**新内容**:
```astro
<span class="block text-secondary mb-2">沐祁珠宝</span>
```

---

### Step 2: 修改 Hero 品牌名称（移动端）

**修改文件**: `src/components/Hero.astro`

**原内容** (Line 95):
```astro
<span class="block text-secondary mb-2">洛天翡翠</span>
```

**新内容**:
```astro
<span class="block text-secondary mb-2">沐祁珠宝</span>
```

---

## Task 3: 修改 Contact 组件商家名称

**Files:**
- Modify: `src/components/Contact.astro`

### Step 1: 修改商家名称卡片

**修改文件**: `src/components/Contact.astro`

**原内容** (Line 94):
```astro
<p class="text-2xl font-bold text-primary mb-0.5">洛天翡翠</p>
```

**新内容**:
```astro
<p class="text-2xl font-bold text-primary mb-0.5">沐祁珠宝</p>
```

**原内容** (Line 95):
```astro
<p class="text-xs text-gray-600">曼德勒翡翠原石專業代購</p>
```

**新内容**:
```astro
<p class="text-xs text-gray-600">缅甸翡翠定制专家</p>
```

---

## Task 4: 修改 SEO 组件元数据

**Files:**
- Modify: `src/components/SEO.astro`

### Step 1: 修改 author 元数据

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 19):
```astro
author = '洛天翡翠'
```

**新内容**:
```astro
author = '沐祁珠宝'
```

---

### Step 2: 修改 Open Graph site_name

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 39):
```astro
<meta property="og:site_name" content="洛天翡翠 - 翡翠原石代購" />
```

**新内容**:
```astro
<meta property="og:site_name" content="沐祁珠宝 - 缅甸翡翠定制专家" />
```

---

### Step 3: 修改结构化数据 - LocalBusiness name

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 60):
```javascript
"name": "洛天翡翠",
```

**新内容**:
```javascript
"name": "沐祁珠宝",
```

---

### Step 4: 修改结构化数据 - Organization name

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 77):
```javascript
"name": "洛天翡翠",
```

**新内容**:
```javascript
"name": "沐祁珠宝",
```

---

### Step 5: 修改结构化数据 - Product brand (Line 110)

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 110):
```javascript
"name": "洛天翡翠"
```

**新内容**:
```javascript
"name": "沐祁珠宝"
```

---

### Step 6: 修改结构化数据 - Product seller (Line 120)

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 120):
```javascript
"name": "洛天翡翠"
```

**新内容**:
```javascript
"name": "沐祁珠宝"
```

---

### Step 7: 修改结构化数据 - WebSite name

**修改文件**: `src/components/SEO.astro`

**原内容** (Line 130):
```javascript
"name": "洛天翡翠 - 翡翠原石代購",
```

**新内容**:
```javascript
"name": "沐祁珠宝 - 缅甸翡翠定制专家",
```

---

## Task 5: 修改内容配置文件

**Files:**
- Modify: `src/content/settings/config.md`
- Modify: `src/content/hero/config.md`
- Modify: `src/content/about/config.md`

### Step 1: 修改全局品牌设置

**修改文件**: `src/content/settings/config.md`

**原内容** (Line 3):
```markdown
brand_name: 洛天翡翠
```

**新内容**:
```markdown
brand_name: 沐祁珠宝
```

---

### Step 2: 查看并修改 Hero 配置

**修改文件**: `src/content/hero/config.md`

首先读取文件查看完整内容，然后根据需要调整标题和副标题，将"代购"改为"定制"。

---

### Step 3: 修改 About 配置标题

**修改文件**: `src/content/about/config.md`

**原内容** (Line 4):
```markdown
title: 洛天翡翠
```

**新内容**:
```markdown
title: 沐祁珠宝
```

---

## Task 6: 修改版权声明页面

**Files:**
- Modify: `src/pages/copyright.astro`

### Step 1: 修改网站名称

**修改文件**: `src/pages/copyright.astro`

**原内容** (Line 14):
```astro
<li><strong>網站名稱</strong>：洛天翡翠</li>
```

**新内容**:
```astro
<li><strong>網站名稱</strong>：沐祁珠宝</li>
```

---

### Step 2: 修改版权声明

**修改文件**: `src/pages/copyright.astro`

**原内容** (Line 25):
```astro
<p class="text-gray-700 mb-4">© 2026 洛天翡翠。版權所有。</p>
```

**新内容**:
```astro
<p class="text-gray-700 mb-4">© 2026 沐祁珠宝。版權所有。</p>
```

---

### Step 3: 修改最终解释权

**修改文件**: `src/pages/copyright.astro`

**原内容** (Line 235):
```astro
<li>本聲明最終解釋權歸洛天翡翠所有</li>
```

**新内容**:
```astro
<li>本聲明最終解釋權歸沐祁珠宝所有</li>
```

---

## Task 7: 验证法律页面内容

**Files:**
- Read: `src/pages/privacy.astro`
- Read: `src/pages/terms.astro`
- Read: `src/pages/return-policy.astro`

### Step 1: 检查隐私政策页面

读取 `src/pages/privacy.astro`，确认：
- ✅ 页面存在
- ✅ 内容完整（信息收集、使用、保护、分享、用户权利、联系方式）
- ✅ 如果有"洛天翡翠"，替换为"沐祁珠宝"
- ✅ 联系邮箱正确（pharo2982@gmail.com，后续可改为企业邮箱）

---

### Step 2: 检查服务条款页面

读取 `src/pages/terms.astro`，确认：
- ✅ 页面存在
- ✅ 内容完整（服务说明、定制流程、价格、交付、质量保证、免责）
- ✅ 如果有"洛天翡翠"或"代购"，替换为"沐祁珠宝"和"定制"
- ✅ 服务定位符合"定制化"而非"代购"

---

### Step 3: 检查退换货政策页面

读取 `src/pages/return-policy.astro`，确认：
- ✅ 页面存在
- ✅ 内容完整（定制产品、质量问题、天然特征、流程、联系方式）
- ✅ 如果有"洛天翡翠"，替换为"沐祁珠宝"
- ✅ 政策合理（定制产品不支持无理由退货是合理的）

---

## Task 8: 本地测试

**Testing:**
- Run: `npm run dev`
- Manual: 浏览器访问 http://localhost:4321

### Step 1: 测试首页

访问 http://localhost:4321，检查：
- ✅ 页面标题显示"沐祁珠宝"
- ✅ Hero 区域品牌名称显示"沐祁珠宝"
- ✅ 无"洛天翡翠"残留

---

### Step 2: 测试联系页面

滚动到联系区域，检查：
- ✅ 商家名称卡片显示"沐祁珠宝"
- ✅ 副标题显示"缅甸翡翠定制专家"

---

### Step 3: 测试法律页面

依次访问：
- http://localhost:4321/privacy
- http://localhost:4321/terms
- http://localhost:4321/return-policy

检查：
- ✅ 页面正常显示
- ✅ 品牌名称正确
- ✅ 内容合理

---

### Step 4: 测试 404/500 页面

访问不存在的页面触发 404，检查标题是否正确。

---

## Task 9: 提交前审查（用户审查点）

**审查清单**:

### 品牌一致性检查
- [ ] 全局搜索"洛天翡翠"，确认无遗漏
- [ ] 全局搜索"代購"，确认改为"定制"
- [ ] 检查所有页面标题
- [ ] 检查所有 SEO 元数据

### 功能完整性检查
- [ ] 表单提交正常
- [ ] 一键复制功能正常（微信、LINE）
- [ ] 感谢页面跳转正常
- [ ] 所有链接有效

### 视觉检查
- [ ] 桌面端显示正常
- [ ] 移动端显示正常
- [ ] 无错别字
- [ ] 排版整齐

---

## Task 10: 构建测试

### Step 1: 构建生产版本

```bash
npm run build
```

**预期输出**:
```
Building to: dist/
✓ Completed in XXXms.
```

**检查**: 无构建错误，无警告

---

### Step 2: 预览生产版本

```bash
npm run preview
```

访问预览地址，再次检查所有页面。

---

## 完成标准

- [ ] 所有"洛天翡翠"替换为"沐祁珠宝"（14 处文件）
- [ ] 服务定位从"代购"改为"定制专家"
- [ ] 所有页面标题更新
- [ ] SEO 元数据完整更新
- [ ] 法律页面存在且内容完整
- [ ] 本地测试通过
- [ ] 构建成功无错误
- [ ] 用户审查通过

---

## 注意事项

### 不要修改的内容
- ❌ 域名引用（ltmdfc.top 保持不变，迁移时再改）
- ❌ 联系方式（微信、LINE、邮箱保持不变）
- ❌ 工作室地址（保持不变）
- ❌ 任何功能代码（只改文本）

### 需要注意的细节
- ✅ 繁体中文字符正确（珠寶、緬甸）
- ✅ 标点符号统一（中文用全角，英文用半角）
- ✅ 品牌名称前后一致（都用"沐祁珠宝"，不用"沐祁珠寶"）

---

## 执行后续步骤

完成本次改版后，下一步计划：

1. **Vercel 部署测试**（自动）
   - 提交代码到 GitHub
   - Vercel 自动部署
   - 访问 https://ltmdfc.top 测试

2. **购买阿里云产品**
   - 域名：muqijewelry.com 或 .shop
   - 服务器：2核4G 新加坡

3. **配置分支策略**
   - 创建 develop 分支
   - 配置子域名测试环境

4. **部署到阿里云**
   - 配置宝塔面板
   - 配置自动部署
   - 上线生产环境

---
