# 翡翠原石科普知识库 - 任务拆分清单

> **用途**: 方便在 Trae IDE 中进行多任务并行开发  
> **创建日期**: 2026-03-18  
> **版本**: v1.0

---

## 📋 任务分组（可并行执行）

### 🎯 子任务 A：基础架构组

**负责人**: @Agent-A  
**目标**: 完成 Content Collection 配置和组件开发  
**预计时间**: 1 小时

#### 任务列表

- [ ] **A1**: Content Collection Schema 配置
  - 文件：`src/content/config.ts`
  - 内容：添加 knowledge collection
  - 预计：15 分钟
  - 依赖：无
  - **审查点**: TypeScript 无报错

- [ ] **A2**: 创建示例 Markdown 文件（3 篇）
  - 目录：`src/content/knowledge/`
  - 文件：moxisha-intro.md, laokeng-guide.md, tip-001.md
  - 预计：20 分钟
  - 依赖：A1
  - **审查点**: Markdown 语法正确，frontmatter 完整

- [ ] **A3**: KnowledgeCard 组件
  - 文件：`src/components/knowledge/KnowledgeCard.astro`
  - 预计：25 分钟
  - 依赖：无
  - **审查点**: 组件可独立渲染，Props 传递正确

- [ ] **A4**: KnowledgeWindow 组件
  - 文件：`src/components/knowledge/KnowledgeWindow.astro`
  - 预计：20 分钟
  - 依赖：A3
  - **审查点**: 自动获取 3 篇精选文章

- [ ] **A5**: KnowledgeNav 组件
  - 文件：`src/components/knowledge/KnowledgeNav.astro`
  - 预计：15 分钟
  - 依赖：无
  - **审查点**: 导航功能正常

**完成标准**:
- ✅ 所有组件可独立运行
- ✅ TypeScript 无报错
- ✅ 提交 5 个 commit

---

### 🎯 子任务 B：页面开发组

**负责人**: @Agent-B  
**目标**: 完成总科普页和单篇详情页开发  
**预计时间**: 1 小时

#### 任务列表

- [ ] **B1**: 总科普页（文章列表）
  - 文件：`src/pages/knowledge/index.astro`
  - 预计：30 分钟
  - 依赖：A3, A4
  - **审查点**: 文章列表自动生成，排序正确

- [ ] **B2**: 单篇详情页（动态路由）
  - 文件：`src/pages/knowledge/[slug].astro`
  - 预计：40 分钟
  - 依赖：A5
  - **审查点**: 文章正确渲染，导航正常

- [ ] **B3**: 上一篇/下一篇导航
  - 集成在 B2 中
  - 预计：15 分钟
  - 依赖：B2
  - **审查点**: 导航链接正确

- [ ] **B4**: 页面 SEO 配置
  - 文件：B1, B2 的 Layout seo props
  - 预计：15 分钟
  - 依赖：B1, B2
  - **审查点**: 每个页面有独立 Title/Description

**完成标准**:
- ✅ 总科普页可访问（/knowledge/）
- ✅ 单篇详情页可访问（/knowledge/[slug]/）
- ✅ 导航功能正常
- ✅ 提交 4 个 commit

---

### 🎯 子任务 C：集成优化组

**负责人**: @Agent-C  
**目标**: 完成首页集成和优化  
**预计时间**: 45 分钟

#### 任务列表

- [ ] **C1**: 首页集成 KnowledgeWindow
  - 文件：`src/pages/index.astro`
  - 预计：20 分钟
  - 依赖：A4
  - **审查点**: 科普窗口正常显示（3 张卡片）

- [ ] **C2**: 导航栏添加科普入口
  - 文件：`src/components/Navbar.astro`
  - 预计：10 分钟
  - 依赖：无
  - **审查点**: 导航栏新增"科普知识"链接

- [ ] **C3**: 图片目录创建
  - 目录：`public/images/knowledge/`
  - 预计：5 分钟
  - 依赖：无
  - **审查点**: 目录结构清晰

- [ ] **C4**: 图片优化配置
  - 文件：`astro.config.mjs`
  - 预计：10 分钟
  - 依赖：无
  - **审查点**: 图片自动转换为 WebP

**完成标准**:
- ✅ 首页科普窗口正常显示
- ✅ 导航栏有科普入口
- ✅ 图片优化生效
- ✅ 提交 3 个 commit

---

### 🎯 子任务 D：测试验证组

**负责人**: @Agent-D  
**目标**: 完成性能测试和转化追踪  
**预计时间**: 45 分钟

#### 任务列表

- [ ] **D1**: Lighthouse 性能测试
  - 工具：Chrome DevTools
  - 页面：首页、总科普页、单篇详情页
  - 预计：20 分钟
  - 依赖：B1, B2, C1
  - **审查点**: Lighthouse 分数 > 90

- [ ] **D2**: 转化追踪集成
  - 文件：`src/pages/knowledge/[slug].astro`
  - 内容：gtag + dataLayer
  - 预计：20 分钟
  - 依赖：B2
  - **审查点**: 复制按钮触发转化事件

- [ ] **D3**: 功能验收测试
  - 检查清单：见下方
  - 预计：15 分钟
  - 依赖：所有开发任务
  - **审查点**: 所有功能正常

**完成标准**:
- ✅ Lighthouse 分数达标
- ✅ 转化追踪正常
- ✅ 功能验收通过
- ✅ 提交测试报告

---

## 📊 任务依赖关系图

```
A1 (Content Schema)
└─ A2 (示例文章)
   
A3 (KnowledgeCard)
└─ A4 (KnowledgeWindow)
   └─ C1 (首页集成)
   
A5 (KnowledgeNav)
└─ B2 (详情页)
   └─ D2 (转化追踪)

B1 (总科普页) ← A3, A4
└─ D1 (性能测试)

B2 (详情页) ← A5
└─ D1 (性能测试)

C2 (导航栏) ← 独立
└─ D3 (功能验收)
```

---

## ✅ 并行开发策略

### 第一轮并行（基础架构）

**同时执行**:
- Agent-A: A1, A2（Content Collection 配置）
- Agent-B: 阅读现有代码，了解项目结构
- Agent-C: 阅读现有代码，了解项目结构
- Agent-D: 准备测试清单

### 第二轮并行（组件开发）

**同时执行**:
- Agent-A: A3, A4, A5（组件开发）
- Agent-B: 等待 A3, A4 完成后开始 B1
- Agent-C: 等待 A4 完成后开始 C1
- Agent-D: 准备性能测试工具

### 第三轮并行（页面开发）

**同时执行**:
- Agent-A: 完成剩余组件
- Agent-B: B1, B2（页面开发）
- Agent-C: C1, C2（集成）
- Agent-D: 等待 B1, B2 完成后开始 D1

### 第四轮并行（测试优化）

**同时执行**:
- Agent-A: 修复组件 bug
- Agent-B: 修复页面 bug
- Agent-C: C3, C4（图片优化）
- Agent-D: D1, D2, D3（测试验证）

---

## 📝 功能验收清单

### 首页测试

- [ ] 科普窗口正常显示（3 张卡片）
- [ ] 每张卡片包含：封面图、标题、描述、分类、日期
- [ ] 点击卡片 → 跳转到对应详情页
- [ ] "浏览全部"按钮 → 跳转到总科普页
- [ ] 页面布局响应式正常

### 总科普页测试

- [ ] 访问 `/knowledge/` 正常显示
- [ ] 所有文章列表显示
- [ ] 文章按日期倒序排序
- [ ] 分类筛选功能正常（如果实现）
- [ ] 点击文章 → 跳转到详情页
- [ ] 导航栏"科普知识"链接正常

### 单篇详情页测试

- [ ] 访问 `/knowledge/[slug]/` 正常显示
- [ ] 文章标题、描述、内容正确渲染
- [ ] 封面图片正常显示
- [ ] "返回总科普页"按钮正常
- [ ] 上一篇/下一篇导航正常
- [ ] 分享按钮正常
- [ ] 复制微信按钮正常
- [ ] 转化追踪事件触发

### 导航栏测试

- [ ] 所有菜单项正常显示
- [ ] "科普知识"链接跳转到 `/knowledge/`
- [ ] 响应式菜单正常（移动端）

### 现有功能回归测试

- [ ] 首页 Banner 正常
- [ ] 产品展示正常
- [ ] 联系我们表单正常
- [ ] 语言切换正常
- [ ] 浮动联系按钮正常
- [ ] 页脚正常

---

## 🎯 性能验收清单

### Lighthouse 测试

**测试页面**:
- 首页：http://localhost:4321/
- 总科普页：http://localhost:4321/knowledge/
- 单篇详情页：http://localhost:4321/knowledge/moxisha-intro/

**目标分数**:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**关键指标**:
- FCP (First Contentful Paint): < 1.5s
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1

### 图片优化测试

- [ ] 所有图片懒加载
- [ ] 图片自动转换为 WebP
- [ ] 图片尺寸适配不同屏幕

### 加载速度测试

- [ ] 首屏加载 < 3 秒
- [ ] 总页面加载 < 5 秒
- [ ] 网络请求数合理

---

## 📈 SEO 验收清单

### Meta 标签

- [ ] 首页：Title, Description, Keywords
- [ ] 总科普页：Title, Description, Keywords
- [ ] 单篇详情页：每篇独立的 Title, Description

### 结构化数据

- [ ] Schema.org Article 标记
- [ ] Open Graph 标签（社交媒体分享）
- [ ] Twitter Card 标签

### 关键词布局

- [ ] H1 包含核心关键词
- [ ] H2-H3 包含长尾关键词
- [ ] 内容密度合理（800-1500 字/篇）

---

## 🚀 部署验收清单

### Vercel 部署

- [ ] 本地构建成功（npm run build）
- [ ] Git 推送成功
- [ ] Vercel 自动部署成功
- [ ] 生产环境访问正常

### 回滚测试

- [ ] Git 回滚测试通过
- [ ] Vercel 控制台回滚测试通过

---

## 📊 任务进度追踪

### 任务状态图

```
Phase 1: Content Collection
├─ A1 [ ] 未开始
└─ A2 [ ] 未开始

Phase 2: 组件开发
├─ A3 [ ] 未开始
├─ A4 [ ] 未开始
└─ A5 [ ] 未开始

Phase 3: 页面开发
├─ B1 [ ] 未开始
├─ B2 [ ] 未开始
├─ B3 [ ] 未开始
└─ B4 [ ] 未开始

Phase 4: 集成
├─ C1 [ ] 未开始
├─ C2 [ ] 未开始
├─ C3 [ ] 未开始
└─ C4 [ ] 未开始

Phase 5: 测试
├─ D1 [ ] 未开始
├─ D2 [ ] 未开始
└─ D3 [ ] 未开始
```

---

## 💡 使用说明

### 在 Trae 中分配任务

1. **创建多个聊天窗口**
   - 窗口 1: Agent-A（基础架构）
   - 窗口 2: Agent-B（页面开发）
   - 窗口 3: Agent-C（集成优化）
   - 窗口 4: Agent-D（测试验证）

2. **分配任务**
   - 复制对应子任务的任务列表
   - 粘贴到对应聊天窗口
   - 指定 Agent 执行

3. **进度同步**
   - 每个 Agent 完成任务后提交
   - 主窗口汇总进度
   - 解决依赖冲突

### 任务审查

**审查流程**:
1. Agent 完成任务 → 提交
2. 主窗口审查 → 验证功能
3. 审查通过 → 合并到主分支
4. 审查不通过 → 返回修改

**审查点**:
- 代码质量
- 功能完整性
- 性能达标
- 现有功能不崩溃

---

**文档版本**: v1.0  
**最后更新**: 2026-03-18  
**审查状态**: 待审查  
**审查人**: @用户
