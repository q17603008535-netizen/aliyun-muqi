# 沐祁珠宝品牌改版与服务器迁移实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成品牌改版（洛天翡翠→沐祁珠宝）并从 Vercel 迁移到阿里云服务器

**Architecture:** 分两阶段执行：先在 Vercel 完成内容改版测试，再部署到阿里云服务器

**Tech Stack:** Astro 5.18.0, 宝塔 Linux 面板，Nginx, 阿里云轻量服务器（新加坡）

---

## 文件结构概览

### 需要修改的文件：
- `src/pages/index.astro` - 页面标题
- `src/components/Hero.astro` - 首屏标题和副标题
- `src/components/Footer.astro` - 页脚品牌名称
- `src/components/Contact.astro` - 联系方式商家名称
- `src/components/SEO.astro` - SEO 元数据
- `src/content/settings/config.md` - 品牌设置
- `src/content/hero/config.md` - Hero 区域配置
- `src/content/about/config.md` - 关于我们内容
- `src/content/contact/*.md` - 联系方式（添加企业邮箱）
- `package.json` - 项目名称

### 需要创建的文件：
- `src/pages/privacy.astro` - 隐私政策页面
- `src/pages/terms.astro` - 服务条款页面
- `src/pages/return-policy.astro` - 退换货政策页面

---

## 第一阶段：内容改版（Vercel 环境测试）

### Task 1: 品牌名称全局替换

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/Contact.astro`
- Modify: `src/components/SEO.astro`
- Modify: `src/content/settings/config.md`
- Modify: `src/content/hero/config.md`
- Modify: `src/content/about/config.md`

- [ ] **Step 1: 确认品牌信息**

品牌名称映射：
```
中文：洛天翡翠 → 沐祁珠宝
英文：Jade → Muqi Jewelry
域名：ltmdfc.top → muqijewelry.com (或 muqijewelry.shop)
```

- [ ] **Step 2: 修改 src/pages/index.astro**

修改位置：页面 `<title>` 标签

原内容：
```astro
<title>洛天翡翠 - 翡翠原石代購｜曼德勒專業買手</title>
```

新内容：
```astro
<title>沐祁珠宝 - 缅甸翡翠定制专家｜15年匠心传承</title>
```

- [ ] **Step 3: 修改 src/components/Hero.astro**

修改主标题和副标题：

原内容：
```astro
<h1>洛天翡翠</h1>
<p>專業翡翠原石代購服務</p>
```

新内容：
```astro
<h1>沐祁珠宝</h1>
<p>缅甸翡翠定制专家 | 15 年匠心传承</p>
```

修改按钮文字：
```astro
<button>预约定制咨询</button>
```

- [ ] **Step 4: 修改 src/components/Footer.astro**

修改品牌名称：
```astro
<h3>沐祁珠宝</h3>
<p>專業翡翠珠寶定制，位於緬甸曼德勒。<br/>15 年行業經驗，提供一對一定制服務。</p>
```

- [ ] **Step 5: 修改 src/components/Contact.astro**

修改商家名称卡片：
```astro
<p class="text-2xl font-bold text-primary mb-0.5">沐祁珠宝</p>
<p class="text-xs text-gray-600">缅甸翡翠定制专家</p>
```

- [ ] **Step 6: 修改 src/components/SEO.astro**

修改 siteUrl（暂时保持 ltmdfc.top，迁移时再改）：
```astro
const siteUrl = "https://ltmdfc.top"; // 迁移时改为 https://muqijewelry.com
```

修改默认标题和描述：
```astro
title: "沐祁珠宝 - 缅甸翡翠定制专家",
description: "15 年缅甸翡翠从业经验，提供一对一定制服务，从原石到成品全程透明。"
```

- [ ] **Step 7: 修改 src/content/settings/config.md**

修改品牌名称：
```markdown
---
brand_name: 沐祁珠宝
---
```

- [ ] **Step 8: 修改 src/content/hero/config.md**

修改标题和副标题：
```markdown
---
title_lines:
  - text: 沐祁珠宝
subtitle_lines:
  - text: 缅甸翡翠定制专家
  - text: 15 年匠心传承
cta_text: 预约定制咨询
---
```

- [ ] **Step 9: 修改 src/content/about/config.md**

修改标题和描述：
```markdown
---
title: 缅甸翡翠定制专家
description: 15 年缅甸翡翠从业经验，提供从选料到设计的一站式定制服务
---
```

- [ ] **Step 10: 提交代码**

```bash
git add -A
git commit -m "feat: 品牌改版 - 洛天翡翠更名为沐祁珠宝"
git push
```

- [ ] **Step 11: Vercel 验证**

访问 https://ltmdfc.top 验证：
- ✅ 首页标题显示"沐祁珠宝"
- ✅ Hero 区域显示新标语
- ✅ 页脚品牌名称更新
- ✅ 联系方式商家名称更新

---

### Task 2: 服务定位调整

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/components/About.astro`
- Modify: `src/components/WhyUs.astro`

- [ ] **Step 1: 修改 Hero 区域副标题**

新内容：
```astro
<p>缅甸矿区直供 | 一对一专属定制 | 国际物流保障</p>
```

- [ ] **Step 2: 修改 About 区域**

突出"定制服务"：
```astro
<h2>从原石到成品，一站式定制服务</h2>
<p>15 年缅甸翡翠从业经验，专业设计师团队，为您打造独一无二的翡翠珠宝</p>
```

- [ ] **Step 3: 修改 WhyUs 区域**

服务优势改为：
1. 缅甸矿区直供货源
2. 专业珠宝设计团队
3. 一对一定制服务
4. 全程透明可追溯
5. 国际物流保障

- [ ] **Step 4: 提交代码**

```bash
git add -A
git commit -m "feat: 服务定位调整为定制化服务"
git push
```

---

### Task 3: 创建必要法律页面（Google Ads 要求）

**Files:**
- Create: `src/pages/privacy.astro`
- Create: `src/pages/terms.astro`
- Create: `src/pages/return-policy.astro`

- [ ] **Step 1: 创建隐私政策页面**

创建 `src/pages/privacy.astro`：
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="隐私政策 | 沐祁珠宝">
  <main class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8">隐私政策</h1>
      
      <div class="prose prose-lg">
        <h2>1. 信息收集</h2>
        <p>沐祁珠宝（以下简称"我们"）尊重您的隐私权。本隐私政策说明我们如何收集、使用和保护您的个人信息。</p>
        
        <h2>2. 信息使用</h2>
        <p>我们收集的信息仅用于：</p>
        <ul>
          <li>处理您的订单和咨询</li>
          <li>提供客户服务</li>
          <li>发送相关产品信息（需您同意）</li>
        </ul>
        
        <h2>3. 信息保护</h2>
        <p>我们采取严格的安全措施保护您的个人信息，防止未经授权的访问、使用或泄露。</p>
        
        <h2>4. 信息分享</h2>
        <p>我们不会向第三方出售、出租或泄露您的个人信息，除非：</p>
        <ul>
          <li>获得您的明确同意</li>
          <li>法律法规要求</li>
          <li>完成交易所必需（如物流公司）</li>
        </ul>
        
        <h2>5. 您的权利</h2>
        <p>您有权：</p>
        <ul>
          <li>访问您的个人信息</li>
          <li>更正不准确的信息</li>
          <li>要求删除您的信息</li>
          <li>撤回同意</li>
        </ul>
        
        <h2>6. 联系我们</h2>
        <p>如有任何隐私相关问题，请联系我们：</p>
        <p>邮箱：info@muqijewelry.com<br/>
        电话：+95 XXX XXX XXXX</p>
        
        <p class="text-sm text-gray-600 mt-8">最后更新日期：2026 年 3 月 22 日</p>
      </div>
    </div>
  </main>
</Layout>
```

- [ ] **Step 2: 创建服务条款页面**

创建 `src/pages/terms.astro`：
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="服务条款 | 沐祁珠宝">
  <main class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8">服务条款</h1>
      
      <div class="prose prose-lg">
        <h2>1. 服务说明</h2>
        <p>沐祁珠宝提供翡翠珠宝定制服务，包括原石选购、设计、加工等一站式服务。</p>
        
        <h2>2. 定制流程</h2>
        <ol>
          <li>咨询沟通：了解您的需求</li>
          <li>方案设计：设计师提供定制方案</li>
          <li>确认订单：确认设计方案和价格</li>
          <li>支付定金：支付订单金额的 50% 作为定金</li>
          <li>制作加工：开始定制制作</li>
          <li>验收交付：确认成品并支付尾款</li>
        </ol>
        
        <h2>3. 价格说明</h2>
        <p>定制产品价格根据所选翡翠原石、设计复杂度、加工工艺等因素确定。</p>
        
        <h2>4. 交付时间</h2>
        <p>定制产品通常需要 15-30 个工作日，具体时间根据产品复杂程度确定。</p>
        
        <h2>5. 质量保证</h2>
        <p>我们保证所有产品均为天然 A 货翡翠，提供权威鉴定证书。</p>
        
        <h2>6. 免责声明</h2>
        <p>翡翠为天然宝石，可能存在天然纹理、色泽差异，这不属于质量问题。</p>
        
        <p class="text-sm text-gray-600 mt-8">最后更新日期：2026 年 3 月 22 日</p>
      </div>
    </div>
  </main>
</Layout>
```

- [ ] **Step 3: 创建退换货政策页面**

创建 `src/pages/return-policy.astro`：
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="退换货政策 | 沐祁珠宝">
  <main class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8">退换货政策</h1>
      
      <div class="prose prose-lg">
        <h2>1. 定制产品</h2>
        <p>定制产品（根据客户要求特别设计制作）不支持无理由退换货。</p>
        
        <h2>2. 质量问题</h2>
        <p>如产品存在质量问题（非天然特征），我们提供：</p>
        <ul>
          <li>7 天内无条件退换货</li>
          <li>免费维修或重新制作</li>
          <li>全额退款</li>
        </ul>
        
        <h2>3. 天然特征</h2>
        <p>以下情况不属于质量问题，不支持退换货：</p>
        <ul>
          <li>翡翠天然纹理、棉絮、石纹</li>
          <li>天然色泽差异</li>
          <li>图片与实物的轻微色差（因拍摄光线导致）</li>
        </ul>
        
        <h2>4. 退换货流程</h2>
        <ol>
          <li>联系客服说明情况</li>
          <li>提供产品照片或视频</li>
          <li>客服确认是否符合退换货条件</li>
          <li>寄回产品（我们承担运费）</li>
          <li>收到退货后 3-5 个工作日处理退款</li>
        </ol>
        
        <h2>5. 联系方式</h2>
        <p>如有退换货需求，请联系我们：</p>
        <p>微信：ltfc10<br/>
        LINE：ltfc505<br/>
        邮箱：info@muqijewelry.com</p>
        
        <p class="text-sm text-gray-600 mt-8">最后更新日期：2026 年 3 月 22 日</p>
      </div>
    </div>
  </main>
</Layout>
```

- [ ] **Step 4: 在 Footer 添加法律页面链接**

修改 `src/components/Footer.astro`，在"政策与条款"部分添加链接：
```astro
<li><a href="/privacy" class="hover:text-white transition-colors">隐私政策</a></li>
<li><a href="/terms" class="hover:text-white transition-colors">服务条款</a></li>
<li><a href="/return-policy" class="hover:text-white transition-colors">退换货政策</a></li>
```

- [ ] **Step 5: 提交代码**

```bash
git add -A
git commit -m "feat: 创建隐私政策、服务条款、退换货政策页面"
git push
```

---

### Task 4: 全面测试

- [ ] **Step 1: 测试所有页面**

访问以下页面确认显示正常：
- ✅ 首页：https://ltmdfc.top
- ✅ 隐私政策：https://ltmdfc.top/privacy
- ✅ 服务条款：https://ltmdfc.top/terms
- ✅ 退换货政策：https://ltmdfc.top/return-policy

- [ ] **Step 2: 测试功能**

- ✅ 表单提交功能
- ✅ 一键复制功能（微信、LINE）
- ✅ 感谢页面跳转
- ✅ GTM 追踪代码
- ✅ Google Ads 转化追踪
- ✅ 移动端适配

- [ ] **Step 3: 测试 SEO**

检查以下元素：
- ✅ Title 标签包含"沐祁珠宝"
- ✅ Meta Description 完整
- ✅ H1 标签唯一
- ✅ 图片 Alt 标签完整

- [ ] **Step 4: 性能测试**

使用 PageSpeed Insights 测试：
- 目标：移动端 > 80 分
- 目标：桌面端 > 90 分

---

## 第二阶段：服务器迁移

### Task 5: 购买阿里云产品

- [ ] **Step 1: 购买域名**

在阿里云购买：
- 域名：muqijewelry.shop（¥28/首年）或 muqijewelry.com（¥78/首年）
- 开启域名隐私保护（免费）
- 开启自动续费（建议）

- [ ] **Step 2: 购买服务器**

在阿里云购买轻量应用服务器：
- 配置：2核4G 50GB（¥78/月）
- 镜像：宝塔 Linux 面板
- 地域：新加坡
- 时长：1个月（灵活）

- [ ] **Step 3: 记录服务器信息**

收到短信/邮件后记录：
- 服务器 IP 地址
- 登录账号：root
- 初始密码

---

### Task 6: 配置宝塔面板

- [ ] **Step 1: 登录宝塔面板**

访问：`http://服务器 IP:8888`
输入账号密码登录

- [ ] **Step 2: 安装推荐软件**

首次登录会提示安装：
- Nginx（推荐版本）
- PHP（可选，静态网站不需要）
- MySQL（可选，静态网站不需要）

- [ ] **Step 3: 创建网站**

在宝塔面板：
1. 点击"网站" → "添加站点"
2. 域名：`muqijewelry.shop`（或 `muqijewelry.com`）
3. 根目录：`/www/wwwroot/muqijewelry.shop`
4. 数据库：不需要（静态网站）
5. PHP 版本：纯静态（不需要）
6. 点击"提交"

- [ ] **Step 4: 申请 SSL 证书**

在网站设置中：
1. 点击"SSL" → "Let's Encrypt"
2. 确认域名
3. 输入邮箱
4. 点击"申请"
5. 申请成功后开启"强制 HTTPS"

---

### Task 7: 部署网站

- [ ] **Step 1: 本地构建项目**

```bash
npm run build
```

生成 `dist` 文件夹

- [ ] **Step 2: 上传到服务器**

方式一：使用宝塔面板文件上传
1. 在宝塔面板点击"文件"
2. 进入 `/www/wwwroot/muqijewelry.shop`
3. 删除默认文件
4. 上传 `dist` 文件夹所有内容

方式二：使用 SCP 命令
```bash
scp -r dist/* root@服务器 IP:/www/wwwroot/muqijewelry.shop/
```

- [ ] **Step 3: 配置 Nginx**

在宝塔面板网站设置中，修改"配置文件"：
```nginx
server {
    listen 80;
    server_name muqijewelry.shop www.muqijewelry.shop;
    return 301 https://muqijewelry.shop$request_uri;
}

server {
    listen 443 ssl http2;
    server_name muqijewelry.shop www.muqijewelry.shop;
    
    ssl_certificate /etc/letsencrypt/live/muqijewelry.shop/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/muqijewelry.shop/privkey.pem;
    
    root /www/wwwroot/muqijewelry.shop;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_types text/css application/javascript application/json;
    gzip_min_length 1000;
}
```

- [ ] **Step 4: 测试访问**

访问：
- https://muqijewelry.shop
- https://www.muqijewelry.shop

确认网站正常显示

---

### Task 8: 配置域名解析

- [ ] **Step 1: 在阿里云配置 DNS**

登录阿里云域名控制台：
1. 找到域名
2. 点击"解析设置"
3. 添加 A 记录：
   - 主机记录：`@`
   - 记录值：`服务器 IP`
   - TTL：600
4. 添加 A 记录：
   - 主机记录：`www`
   - 记录值：`服务器 IP`
   - TTL：600

- [ ] **Step 2: 等待 DNS 生效**

等待 1-2 小时，使用以下命令检查：
```bash
ping muqijewelry.shop
```

应显示服务器 IP

---

### Task 9: 最终测试

- [ ] **Step 1: 功能测试**

- ✅ 所有页面正常访问
- ✅ HTTPS 强制跳转
- ✅ 表单提交成功
- ✅ 感谢页面跳转
- ✅ 一键复制功能
- ✅ GTM 追踪代码
- ✅ Google Ads 转化追踪

- [ ] **Step 2: 性能测试**

PageSpeed Insights：
- 移动端：> 80 分
- 桌面端：> 90 分

- [ ] **Step 3: SEO 检查**

- ✅ Title 标签正确
- ✅ Meta Description 完整
- ✅ H1 标签唯一
- ✅ 网站地图提交到 Google Search Console

---

## 第三阶段：Google Ads 提交

### Task 10: 稳定运行 7 天

- [ ] **Step 1: 监控网站**

每天检查：
- 访问日志
- 错误日志
- 服务器资源使用率

- [ ] **Step 2: 确保无错误**

- 无 404 错误
- 无 500 错误
- 表单提交正常
- 追踪代码正常

---

### Task 11: 提交 Google Ads 审核

- [ ] **Step 1: 准备材料**

确保以下页面可访问：
- ✅ 关于我们
- ✅ 联系方式
- ✅ 隐私政策
- ✅ 服务条款
- ✅ 退换货政策

- [ ] **Step 2: 创建/更新 Google Ads 账户**

商家信息：
- 名称：沐祁珠宝
- 网站：https://muqijewelry.shop
- 地址：工作室地址
- 电话：企业电话
- 邮箱：info@muqijewelry.shop

- [ ] **Step 3: 提交审核**

- 创建新的广告系列
- 填写商家验证信息
- 提交网站审核

- [ ] **Step 4: 等待审核结果**

通常 3-5 个工作日

---

## 完成标准

- [ ] 品牌改版完成（沐祁珠宝）
- [ ] 网站部署到阿里云服务器
- [ ] 域名绑定并配置 HTTPS
- [ ] 稳定运行 7 天无错误
- [ ] Google Ads 审核通过

---

## 风险与应对

### 风险 1：域名被注册
**应对**：准备备选域名（muqijade.shop, muqi-jade.shop）

### 风险 2：服务器配置问题
**应对**：使用宝塔面板，图形化操作，降低难度

### 风险 3：Google Ads 再次拒绝
**应对**：
- 确保网站运行至少 7 天
- 补充完整企业信息
- 使用企业邮箱
- 考虑企业认证

### 风险 4：流量超过预期
**应对**：随时升级服务器配置（阿里云支持无缝升级）

---

## 成本预估

| 项目 | 费用 | 周期 |
|------|------|------|
| 域名 .shop | ¥28 | 首年 |
| 服务器 2核4G | ¥936 | 12 个月 |
| **首年总计** | **¥964** | **约 $135** |

---

## 时间线

| 阶段 | 天数 | 核心任务 |
|------|-----|---------|
| 第一阶段 | 1-3 天 | 内容改版，Vercel 测试 |
| 第二阶段 | 4-7 天 | 阿里云购买、部署 |
| 第三阶段 | 8-14 天 | 稳定运行 7 天 |
| 第四阶段 | 15 天起 | Google Ads 提交 |

**总计**：约 15-20 天

---
