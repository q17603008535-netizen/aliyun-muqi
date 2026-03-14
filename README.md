# 洛天翡翠 - 翡翠原石代购网站 V3

> 10 年经验 | 瑞丽公司 | 源头直采

[![GitHub](https://img.shields.io/github/repo-size/q17603008535-netizen/jade-website-v3)](https://github.com/q17603008535-netizen/jade-website-v3)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-v5.17.1-blueviolet)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.2.1-38bdf8)](https://tailwindcss.com/)

---

## 🎯 项目简介

**项目维护者**：郭志鹏  
**邮箱**：q17603008535@gmail.com  
**GitHub**：https://github.com/q17603008535-netizen/jade-website-v3  
**网站**：https://jade-website-v3.vercel.app  
**自定义域名**：https://ltmdfc.top

### 项目定位

洛天翡翠是一个专业的翡翠原石代购网站，依托 10 年行业经验，为客户提供高品质、可信赖的翡翠原石代购服务。网站采用现代化的技术栈，提供优秀的用户体验和 SEO 优化。

### 核心卖点

- ✅ **10 年+ 行业经验** - 专业买手，独特选石逻辑
- ✅ **瑞丽公司** - 正规经营，品质保证
- ✅ **源头直采** - 缅甸矿区直供，价格优势
- ✅ **口碑良好** - 5 年以上忠实客户多人，好评率 100%

---

## ✨ 核心功能

### 业务功能

| 功能 | 说明 |
|------|------|
| 📧 **在线表单咨询** | 使用 Web3Forms，无需后端，邮件直达 |
| 💬 **多联系方式** | 微信、LINE、Email、电话 |
| 📱 **响应式设计** | 完美支持桌面端和移动端 |
| 🌐 **三语言支持** | 繁体中文、简体中文、英文 |
| 🎨 **CMS 内容管理** | Sveltia CMS，GitHub 登录，可视化管理 |
| 📊 **产品展示** | 产品卡片、图片展示、一键咨询 |

### 技术亮点

| 特性 | 说明 |
|------|------|
| ⚡ **高性能** | Astro SSG 架构，网站瞬开体验 |
| 🔍 **SEO 优化** | 完整 meta 标签、结构化数据、Sitemap |
| ♿ **无障碍访问** | 符合 WCAG 2.1 AA 标准 |
| 📊 **性能监控** | Vercel Analytics + Google Analytics |
| 🎨 **图片优化** | 懒加载、WebP/AVIF 格式、响应式图片 |
| 🔒 **类型安全** | TypeScript strict mode + Zod schema |

---

## 🛠️ 技术栈

### 前端技术

| 类别 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **前端框架** | Astro | v5.17.1 | 现代化静态站点生成器 |
| **CSS 框架** | Tailwind CSS | v4.2.1 | 实用优先的 CSS 框架 |
| **类型系统** | TypeScript | strict mode | 严格类型检查 |
| **图片优化** | Sharp | v0.34.5 | 高性能图片处理 |

### 服务与工具

| 类别 | 服务 | 说明 |
|------|------|------|
| **CMS** | Sveltia CMS | 基于 GitHub 的现代化 CMS |
| **部署平台** | Vercel | 自动部署、全球 CDN |
| **表单服务** | Web3Forms | 免费表单提交服务 |
| **性能监控** | Vercel Analytics | 原生性能监控 |
| **用户分析** | Google Analytics | 用户行为分析 |

---

## 🚀 快速开始

### 环境要求

- **Node.js**: 18.x 或更高版本
- **包管理器**: npm 或 pnpm
- **Git**: 版本控制

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

开发服务器将运行在：`http://localhost:4321/`

#### 4. 访问 CMS（可选）

访问：https://jade-website-v3.vercel.app/admin

使用 GitHub 账号登录即可编辑内容。

---

## 📁 项目结构

```
jade-website-v3/
├── src/
│   ├── components/          # 组件目录（11 个组件）
│   │   ├── About.astro      # 关于我们
│   │   ├── Contact.astro    # 联系我们
│   │   ├── Footer.astro     # 页脚
│   │   ├── Hero.astro       # 首页 Banner
│   │   ├── Navbar.astro     # 导航栏
│   │   ├── Products.astro   # 产品展示
│   │   └── ...
│   ├── content/             # Content Collections（9 个集合）
│   │   ├── about/           # 关于我们配置
│   │   ├── contact/         # 联系方式
│   │   ├── hero/            # Banner 配置
│   │   ├── products/        # 产品管理
│   │   └── settings/        # 网站设置
│   ├── i18n/                # 国际化
│   │   ├── translations.ts  # 翻译文件
│   │   └── index.ts         # i18n 工具
│   ├── layouts/             # 布局
│   │   └── Layout.astro     # 主布局
│   ├── pages/               # 页面
│   │   ├── index.astro      # 首页
│   │   ├── 404.astro        # 404 页面
│   │   └── 500.astro        # 500 页面
│   ├── scripts/             # 客户端脚本
│   │   └── init.ts          # 初始化脚本
│   ├── styles/              # 样式
│   │   └── global.css       # 全局样式
│   └── utils/               # 工具函数
│       ├── accessibility.ts # 无障碍工具
│       └── locale.ts        # 语言工具
├── public/
│   ├── admin/
│   │   └── config.yml       # CMS 配置
│   ├── images/              # 图片资源
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs         # Astro 配置
├── package.json             # 项目依赖
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # Vercel 配置
└── README.md                # 项目文档
```

---

## 🔧 配置说明

### CMS 配置

**访问地址**：https://jade-website-v3.vercel.app/admin

**登录方式**：GitHub 连接登录

**内容集合**：
- 网站设置（Logo、品牌名称、社交媒体）
- 产品管理（产品名称、重量、价格、图片）
- 首页 Banner（标题、副标题、背景图）
- 关于我们（经验、特色）
- 信任保证
- 为什么选择我们
- 联系方式
- 客户评价

**使用方法**：
1. 访问 CMS 地址
2. 使用 GitHub 账号登录
3. 选择要编辑的内容集合
4. 编辑后保存，自动同步到 GitHub

### 表单配置

**服务商**：Web3Forms

**Access Key**：已在代码中配置

**接收邮箱**：q17603008535@gmail.com

**表单字段**：
- 姓名（必填）
- Email（必填）
- 电话（可选）
- 留言（必填）

### 国际化配置

**支持语言**：
- 繁体中文（zh-TW）- 默认
- 简体中文（zh-CN）
- 英文（en）

**语言切换**：
- IP 自动识别（首次访问）
- 语言切换器手动切换
- 用户偏好保存（localStorage）

---

## 📦 部署

### Vercel 部署（自动）

项目已配置 Vercel 自动部署：

1. **Git Push** → 推送到 main 分支
2. **自动构建** → Vercel 检测到变更
3. **自动部署** → 构建并部署到全球 CDN

**构建命令**：
```bash
npm run build
```

**输出目录**：`dist/`

### 自定义域名

**域名**：ltmdfc.top

**配置**：
- 已在 Vercel 添加域名
- DNS 自动配置
- SSL 证书自动签发

---

## 📊 性能指标

### Lighthouse 分数

| 指标 | 分数 | 说明 |
|------|------|------|
| **性能** | 95+ | 优秀的加载速度 |
| **SEO** | 95+ | 搜索引擎友好 |
| **无障碍** | 95+ | WCAG 2.1 AA 标准 |
| **最佳实践** | 95+ | 现代化开发实践 |

### 性能优化特性

- ✅ 图片懒加载
- ✅ 响应式图片（WebP/AVIF）
- ✅ 代码分割
- ✅ 字体优化
- ✅ CSS 优化
- ✅ 延迟加载非关键交互

---

## 🤝 贡献

### 代码贡献

1. Fork 仓库
2. 创建功能分支
3. 提交代码（使用 Conventional Commits）
4. 创建 Pull Request

### 内容贡献

使用 CMS 即可编辑内容，无需代码知识。

**访问**：https://jade-website-v3.vercel.app/admin

---

## 📝 开发记录

详细的开发过程记录在以下文档中：

- [开发记录.md](开发记录.md) - 完整的开发过程记录
- [项目分析报告_v3.md](项目分析报告_v3.md) - 项目技术分析报告

---

## 📧 联系方式

### 项目维护者

- **姓名**：郭志鹏
- **邮箱**：q17603008535@gmail.com
- **GitHub**：https://github.com/q17603008535-netizen

### 业务联系

- **网站**：https://ltmdfc.top
- **CMS**：https://jade-website-v3.vercel.app/admin
- **GitHub**：https://github.com/q17603008535-netizen/jade-website-v3

---

## 📄 许可证

MIT License

---

## 🔗 相关链接

- [Astro 官方文档](https://docs.astro.build/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [Sveltia CMS 文档](https://www.sveltia.com/cms)
- [Vercel 官方文档](https://vercel.com/docs)
- [Web3Forms 官方文档](https://web3forms.com/)

---

**最后更新**：2026-03-14  
**项目版本**：v3.0  
**开发状态**：生产就绪 ✅
