# 开发指南

> 洛天翡翠网站 V3 - 完整开发文档

---

## 🎯 开发环境搭建

### 系统要求

| 工具 | 版本 | 说明 |
|------|------|------|
| **Node.js** | 18.x+ | 推荐使用 nvm 管理版本 |
| **npm** | 9.x+ | 或使用 pnpm |
| **Git** | 最新 | 版本控制 |
| **编辑器** | VS Code | 推荐 |

### 安装步骤

#### 1. 克隆仓库

```bash
git clone https://github.com/q17603008535-netizen/jade-website-v3.git
cd jade-website-v3
```

#### 2. 安装依赖

```bash
npm install
```

#### 3. 启动开发服务器

```bash
npm run dev -- --host
```

**访问地址**：http://localhost:4321/

`--host` 参数允许网络访问，方便多设备调试。

#### 4. 访问 CMS（可选）

**地址**：https://jade-website-v3.vercel.app/admin

使用 GitHub 账号登录即可编辑内容。

---

## 📁 项目架构

### 目录结构详解

```
jade-website-v3/
├── src/
│   ├── components/          # 组件目录（11 个组件）
│   │   ├── About.astro      # 关于我们组件
│   │   ├── Contact.astro    # 联系我们组件（含表单）
│   │   ├── FloatingContact.astro  # 浮动联系按钮
│   │   ├── Footer.astro     # 页脚组件
│   │   ├── Hero.astro       # 首页 Banner 组件
│   │   ├── LanguageSwitcher.astro  # 语言切换器
│   │   ├── Loading.astro    # 加载动画组件
│   │   ├── Navbar.astro     # 导航栏组件
│   │   ├── Products.astro   # 产品展示组件
│   │   ├── SEO.astro        # SEO 组件
│   │   ├── Skeleton.astro   # 骨架屏组件
│   │   ├── Testimonials.astro  # 客户评价组件
│   │   ├── Trust.astro      # 信任保证组件
│   │   ├── Video.astro      # YouTube 视频组件
│   │   └── WhyUs.astro      # 为什么选择我们组件
│   │
│   ├── content/             # Content Collections（9 个集合）
│   │   ├── about/           # 关于我们配置
│   │   │   └── config.md
│   │   ├── contact/         # 联系方式配置
│   │   │   ├── wechat.md
│   │   │   └── line.md
│   │   ├── hero/            # Banner 配置
│   │   │   └── config.md
│   │   ├── products/        # 产品管理
│   │   │   ├── product-001.md
│   │   │   └── 莫西沙.md
│   │   ├── products_config/ # 产品字段配置
│   │   │   └── config.md
│   │   ├── settings/        # 网站设置
│   │   │   └── config.md
│   │   ├── testimonials/    # 客户评价
│   │   │   └── testimonial-001.md
│   │   ├── trust/           # 信任保证配置
│   │   │   └── config.md
│   │   ├── why_us/          # 为什么选择我们配置
│   │   │   └── config.md
│   │   └── config.ts        # Zod schema 定义
│   │
│   ├── i18n/                # 国际化
│   │   ├── translations.ts  # 翻译文件（3 种语言）
│   │   └── index.ts         # i18n 工具函数
│   │
│   ├── layouts/             # 布局
│   │   └── Layout.astro     # 主布局（包含 SEO）
│   │
│   ├── pages/               # 页面
│   │   ├── index.astro      # 首页
│   │   ├── 404.astro        # 404 错误页面
│   │   └── 500.astro        # 500 错误页面
│   │
│   ├── scripts/             # 客户端脚本
│   │   └── init.ts          # 初始化脚本（语言检测）
│   │
│   ├── styles/              # 样式
│   │   └── global.css       # 全局样式
│   │
│   └── utils/               # 工具函数
│       ├── accessibility.ts # 无障碍访问工具
│       └── locale.ts        # 语言检测工具
│
├── public/
│   ├── admin/
│   │   └── config.yml       # CMS 配置
│   ├── images/              # 图片资源
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
│
├── astro.config.mjs         # Astro 配置
├── package.json             # 项目依赖
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # Vercel 配置
└── README.md                # 项目文档
```

### 组件系统

#### 组件分类

**布局组件**：
- `Layout.astro` - 主布局，包含 HTML 结构、SEO、导航
- `Navbar.astro` - 顶部导航栏
- `Footer.astro` - 页脚

**内容组件**：
- `Hero.astro` - 首页 Banner
- `About.astro` - 关于我们
- `Products.astro` - 产品展示
- `Trust.astro` - 信任保证
- `WhyUs.astro` - 为什么选择我们
- `Testimonials.astro` - 客户评价
- `Contact.astro` - 联系我们
- `Video.astro` - YouTube 视频

**功能组件**：
- `LanguageSwitcher.astro` - 语言切换器
- `FloatingContact.astro` - 浮动联系按钮
- `Loading.astro` - 加载动画
- `Skeleton.astro` - 骨架屏
- `SEO.astro` - SEO 元标签

#### 组件开发规范

```astro
---
// 1. 定义 Props 接口
interface Props {
  title?: string;
  description?: string;
}

// 2. 设置默认值
const { title = '默认标题', description = '' } = Astro.props;
---

<!-- 3. 使用语义化 HTML -->
<section class="组件样式" aria-labelledby="组件 ID">
  <h2 id="组件 ID">{title}</h2>
  <p>{description}</p>
</section>

<!-- 4. 客户端交互（如需要） -->
<script>
  // 客户端 JavaScript
</script>
```

---

## 🎨 样式指南

### Tailwind CSS 使用

#### 命名约定

使用 Tailwind 的实用类，避免自定义 CSS：

```astro
<!-- ✅ 好的做法 -->
<div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
  <h3 class="text-xl font-semibold text-gray-900">标题</h3>
</div>

<!-- ❌ 避免自定义 CSS -->
<style>
  .custom-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
</style>
```

#### 响应式设计

```astro
<!-- 移动端优先 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 内容 -->
</div>
```

**断点**：
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### 设计系统

#### 颜色 Palette

**主色**：
```astro
bg-primary      // #1a5f4a（翡翠绿）
text-primary    // #1a5f4a
border-primary  // #1a5f4a
```

**中性色**：
```astro
bg-stone-50     // 浅色背景
bg-stone-100    // 次级背景
text-gray-900   // 主要文字
text-gray-600   // 次要文字
```

#### 字体系统

**字体家族**：
- 主要字体：`Noto Sans TC`（繁体中文）
- 备用字体：系统字体

**字号**：
- 标题：`text-3xl`、`text-4xl`
- 副标题：`text-xl`、`text-2xl`
- 正文：`text-base`
- 小字：`text-sm`、`text-xs`

#### 间距规范

使用 Tailwind 的间距系统：
- `p-4` - 1rem (16px)
- `p-6` - 1.5rem (24px)
- `p-8` - 2rem (32px)
- `gap-4` - 1rem (16px)
- `gap-8` - 2rem (32px)

---

## 🌐 国际化（i18n）

### 语言切换机制

#### 优先级逻辑

```
URL 语言前缀 > 用户选择 > IP 检测 > 默认语言（zh-TW）
```

#### IP 自动识别

使用 `ipapi.co` 服务检测用户位置：

```typescript
// src/utils/locale.ts
async function detectLocaleFromIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    // 国家代码到语言映射
    const localeMap = {
      'CN': 'zh-CN',
      'TW': 'zh-TW',
      'HK': 'zh-TW',
      'SG': 'zh-CN',
      'US': 'en',
      'GB': 'en',
      'CA': 'en',
      'AU': 'en',
    };
    
    return localeMap[countryCode] || 'en';
  } catch (error) {
    return 'zh-TW'; // 默认
  }
}
```

### 添加新语言

#### 1. 在翻译文件中添加

```typescript
// src/i18n/translations.ts
export const translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.about': '關於我們',
    // ...
  },
  'zh-CN': {
    'nav.home': '首页',
    'nav.about': '关于我们',
    // ...
  },
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    // ...
  },
  'ja': {  // 新增日语
    'nav.home': 'ホーム',
    'nav.about': '私たちに関しては',
    // ...
  }
};
```

#### 2. 更新语言切换器

```astro
<!-- src/components/LanguageSwitcher.astro -->
<select>
  <option value="zh-TW">繁體中文</option>
  <option value="zh-CN">简体中文</option>
  <option value="en">English</option>
  <option value="ja">日本語</option>  <!-- 新增 -->
</select>
```

#### 3. 更新初始化脚本

```typescript
// src/scripts/init.ts
const supportedLocales = ['zh-TW', 'zh-CN', 'en', 'ja'];  // 新增 'ja'
```

---

## 📝 CMS 使用指南（重点）

### 登录 CMS

1. **访问**：https://jade-website-v3.vercel.app/admin
2. **登录**：使用 GitHub 账号连接
3. **授权**：授权访问 `q17603008535-netizen/jade-website-v3` 仓库

### 内容管理流程

#### 产品管理

1. 进入 **产品管理** 集合
2. 点击 **新建产品** 或编辑现有产品
3. 填写信息：
   - 产品名称
   - 重量
   - 价格
   - 描述
   - 产品图片（点击上传）
   - 显示首页（勾选则显示在首页）
4. 保存 → 自动提交到 GitHub

#### 页面配置

**网站设置**：
- Logo 图标（建议 100x100 方形 PNG）
- 品牌名称
- 社交媒体链接（TikTok、YouTube、Facebook）

**首页 Banner**：
- 电脑端背景图片（16:9）
- 手机端背景图片（3:4）
- 主标题（支持多行）
- 副标题（支持多行）
- CTA 按钮文字
- YouTube 视频链接

**关于我们**：
- 经验图片
- 经验文字
- 标题
- 描述
- 3 个特色（图标、标题、描述）

### 媒体资源管理

#### 图片上传

1. 在 CMS 中点击图片字段
2. 选择文件或拖拽上传
3. 图片自动保存到 `public/images/`
4. 路径格式：`/images/文件名.png`

#### 图片规范

- **Logo**：100x100px，方形，PNG 格式
- **Banner**：1920x1080px（桌面），1080x1440px（移动）
- **产品图片**：800x600px 或更高
- **关于我们**：400x400px

### 常见问题

#### CMS 同步问题

**问题**：CMS 后台显示内容为空，但本地有文件

**原因**：CMS 读取 GitHub 仓库，不是本地文件

**解决方案**：
1. 确保本地文件已 push 到 GitHub
2. 检查 Git 状态：`git status`
3. 提交并推送：`git add . && git commit -m "xxx" && git push`
4. 刷新 CMS 页面

#### 图片无法显示

**问题**：图片上传后无法显示

**原因**：图片路径不正确

**解决方案**：
- CMS 上传的图片路径：`/images/文件名.png`
- 确保 `public/admin/config.yml` 配置正确：
  ```yaml
  media_folder: public/images
  public_folder: /images
  ```

---

## 🔧 开发工具

### VS Code 扩展推荐

#### 必装扩展

- **Astro** - Astro 语法高亮和智能提示
- **Tailwind CSS IntelliSense** - Tailwind 智能提示
- **TypeScript** - TypeScript 支持

#### 推荐扩展

- **Prettier** - 代码格式化
- **ESLint** - 代码检查
- **GitLens** - Git 增强

### 调试工具

#### Chrome DevTools

**性能分析**：
1. 打开 DevTools
2. 进入 Performance 标签
3. 录制页面加载
4. 分析性能瓶颈

**无障碍检查**：
1. 打开 DevTools
2. 进入 Lighthouse 标签
3. 运行 Accessibility 测试

#### Astro DevTools

安装 Astro DevTools 扩展，查看：
- 组件树
- Props 数据
- 性能指标

---

## 🐛 调试技巧

### 常见问题排查

#### 1. 图片加载问题

**症状**：图片无法显示

**排查步骤**：
1. 检查图片路径是否正确
2. 确认图片在 `public/images/` 目录
3. 检查浏览器控制台错误
4. 清除缓存重新加载

**解决方案**：
```astro
<!-- ✅ 正确 -->
<img src="/images/product.jpg" alt="产品" />

<!-- ❌ 错误 -->
<img src="../images/product.jpg" alt="产品" />
```

#### 2. CMS 同步问题

**症状**：CMS 后台显示内容为空

**排查步骤**：
1. 检查 GitHub 仓库是否有文件
2. 检查 Git 推送状态
3. 检查 CMS 配置

**解决方案**：
```bash
# 查看 Git 状态
git status

# 推送代码
git push origin main

# 检查远程仓库
git remote -v
```

#### 3. 表单提交问题

**症状**：表单无法提交

**排查步骤**：
1. 检查 Web3Forms Access Key
2. 查看浏览器控制台错误
3. 检查网络连接

**解决方案**：
- 确认 Access Key 正确：`4cedbff2-2131-4500-bfc1-7fc950517f48`
- 检查表单 action 地址
- 测试网络连接

#### 4. 语言切换问题

**症状**：语言切换无效

**排查步骤**：
1. 检查 localStorage 中的语言设置
2. 检查 URL 是否有语言前缀
3. 查看浏览器控制台错误

**解决方案**：
```javascript
// 清除语言设置
localStorage.removeItem('preferred_locale');

// 刷新页面
location.reload();
```

---

## 📦 构建命令

### 开发

```bash
# 启动开发服务器
npm run dev

# 启动开发服务器（允许网络访问）
npm run dev -- --host
```

### 构建

```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview
```

### 其他命令

```bash
# Astro 命令
npm run astro -- help

# 检查类型
npx tsc --noEmit
```

---

## 📊 代码质量

### TypeScript 配置

项目使用 strict mode：

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### 代码规范

#### Props 定义

```astro
---
interface Props {
  title: string;
  description?: string;
  items?: Item[];
}

const { title, description = '', items = [] } = Astro.props;
---
```

#### 类型安全

```typescript
// ✅ 使用 Zod schema 验证
const productSchema = z.object({
  name: z.string(),
  weight: z.string(),
  price: z.string(),
  description: z.string(),
  image: z.string().optional(),
  featured: z.boolean().default(false),
});
```

---

## 🎯 开发最佳实践

### 组件开发

1. **单一职责**：每个组件只做一件事
2. **Props 接口**：明确定义 Props 类型
3. **默认值**：为可选 Props 提供默认值
4. **语义化 HTML**：使用正确的 HTML 标签
5. **无障碍访问**：添加 ARIA 标签

### 样式开发

1. **移动端优先**：先写移动端样式
2. **响应式**：使用断点适配不同屏幕
3. **Tailwind 优先**：尽量使用 Tailwind 类
4. **避免硬编码**：使用设计系统的值

### 性能优化

1. **图片懒加载**：非首屏图片使用 `loading="lazy"`
2. **代码分割**：Astro 自动处理
3. **减少客户端 JS**：尽量使用服务端渲染
4. **缓存优化**：使用 `vercel.json` 配置缓存

---

## 📝 下一步

完成开发后：

1. **自测**：确保所有功能正常
2. **提交代码**：`git add . && git commit -m "feat: xxx"`
3. **推送到 GitHub**：`git push origin main`
4. **Vercel 自动部署**：等待自动构建完成
5. **验证部署**：访问网站检查功能

---

**最后更新**：2026-03-14  
**文档版本**：v1.0
