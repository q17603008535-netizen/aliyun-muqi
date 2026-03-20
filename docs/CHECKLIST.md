# 翡翠原石科普知识库 - 检查清单

> **用途**: 确保每个阶段的质量  
> **创建日期**: 2026-03-18  
> **版本**: v1.0

---

## 📋 阶段检查清单

### Phase 1: Content Collection 配置

#### A1: Schema 配置检查

- [ ] TypeScript 无报错
- [ ] Schema 字段完整（title, description, publishDate, category, tags, image, featured, order）
- [ ] category enum 值正确
- [ ] featured 默认值为 false
- [ ] order 默认值为 0
- [ ] collections 导出包含 knowledge

**验证命令**:
```bash
npx tsc --noEmit
```

**预期结果**: 无错误

---

#### A2: 示例文章检查

- [ ] 创建了 3 篇示例文章
- [ ] frontmatter 完整（所有必填字段）
- [ ] publishDate 格式正确（YYYY-MM-DD）
- [ ] category 值在 enum 范围内
- [ ] tags 是数组格式
- [ ] featured 至少有 3 篇为 true
- [ ] Markdown 语法正确
- [ ] 图片路径正确（/images/knowledge/xxx.jpg）

**验证命令**:
```bash
npm run dev
```

**预期结果**: 无报错，开发服务器正常启动

---

### Phase 2: 组件开发

#### A3: KnowledgeCard 组件检查

- [ ] Props 接口定义完整
- [ ] 所有 Props 有正确使用
- [ ] 图片懒加载（loading="lazy"）
- [ ] 卡片样式响应式
- [ ] 链接路径正确（/knowledge/${slug}/）
- [ ] 分类标签显示正确
- [ ] 日期格式化正确
- [ ] hover 效果正常

**验证方法**:
1. 创建测试页面
2. 访问测试页面
3. 检查卡片渲染

**预期结果**: 卡片正常显示，样式正确

---

#### A4: KnowledgeWindow 组件检查

- [ ] 正确导入 getCollection
- [ ] 筛选条件正确（featured === true）
- [ ] 排序逻辑正确（按 order + publishDate）
- [ ] 限制 3 篇（slice(0, 3)）
- [ ] KnowledgeCard Props 传递正确
- [ ] 标题栏布局正确
- [ ] "浏览全部"按钮链接正确
- [ ] 网格布局响应式（grid-cols-1 md:grid-cols-3）

**验证命令**:
```bash
npm run dev
```

**预期结果**: 组件正常渲染，显示 3 篇文章

---

#### A5: KnowledgeNav 组件检查

- [ ] Props 接口定义（currentPage, prevSlug, nextSlug）
- [ ] 返回按钮链接正确（/knowledge/）
- [ ] 上一篇/下一篇条件渲染
- [ ] 分享按钮事件绑定
- [ ] SVG 图标正确
- [ ] 样式正确

**验证方法**:
在详情页中测试导航

**预期结果**: 导航功能正常

---

### Phase 3: 页面开发

#### B1: 总科普页检查

- [ ] Layout 导入正确
- [ ] getCollection 使用正确
- [ ] 排序逻辑正确（日期倒序）
- [ ] SEO 配置完整（title, description, keywords）
- [ ] H1 标签包含核心关键词
- [ ] 文章列表渲染正确
- [ ] KnowledgeCard Props 传递正确
- [ ] 分类筛选按钮样式（如果实现）
- [ ] 响应式布局

**验证命令**:
```bash
npm run dev
```

**访问**: http://localhost:4321/knowledge/

**预期结果**: 
- 页面正常显示
- 所有文章列表
- 排序正确
- 响应式正常

---

#### B2: 单篇详情页检查

- [ ] 动态路由参数正确（[slug].astro）
- [ ] getEntry 使用正确
- [ ] 上一篇/下一篇逻辑正确
- [ ] SEO 配置完整
- [ ] KnowledgeNav Props 传递正确
- [ ] 文章内容渲染（article.set:html）
- [ ] 封面图片条件渲染
- [ ] 复制微信按钮事件绑定
- [ ] gtag 调用逻辑
- [ ] dataLayer 推送逻辑
- [ ] 错误处理（try-catch）

**验证命令**:
```bash
npm run dev
```

**访问**: http://localhost:4321/knowledge/moxisha-intro/

**预期结果**:
- 文章正常显示
- 导航功能正常
- 复制按钮可点击
- 控制台无报错

---

### Phase 4: 集成

#### C1: 首页集成检查

- [ ] KnowledgeWindow 导入正确
- [ ] 组件插入位置合理
- [ ] 与现有组件不冲突
- [ ] 样式一致

**验证方法**:
访问首页

**预期结果**:
- 科普窗口正常显示
- 3 张卡片完整
- 不影响其他组件

---

#### C2: 导航栏检查

- [ ] 科普知识链接添加
- [ ] 链接路径正确（/knowledge/）
- [ ] 样式与现有菜单一致
- [ ] 移动端菜单正常

**验证方法**:
刷新页面，检查导航栏

**预期结果**:
- 导航栏新增"科普知识"
- 点击跳转正确
- 响应式正常

---

#### C3: 图片目录检查

- [ ] 目录创建（public/images/knowledge/）
- [ ] 子目录结构清晰（按分类）
- [ ] 图片文件命名规范

**验证命令**:
```bash
ls -la public/images/knowledge/
```

**预期结果**: 目录结构清晰

---

#### C4: 图片优化检查

- [ ] astro.config.mjs 配置正确
- [ ] Sharp 服务启用
- [ ] 图片格式转换（WebP）

**验证命令**:
```bash
npm run build
```

**预期结果**: 构建成功，图片优化生效

---

### Phase 5: 测试

#### D1: Lighthouse 测试检查

**测试页面**:
- [ ] 首页
- [ ] 总科普页
- [ ] 单篇详情页

**目标分数**:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

**关键指标**:
- [ ] FCP < 1.5s
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

**验证工具**: Chrome DevTools > Lighthouse

**预期结果**: 所有指标达标

---

#### D2: 转化追踪检查

- [ ] gtag 函数存在判断
- [ ] conversion 事件格式正确
- [ ] send_to 参数格式（AW-ID/LABEL）
- [ ] dataLayer 初始化
- [ ] event 名称（copy_wechat）
- [ ] timestamp 格式（ISO 8601）
- [ ] source 路径正确
- [ ] article 标题传递
- [ ] 错误处理（catch）

**验证工具**:
- Google Tag Assistant
- 浏览器控制台

**预期结果**:
- 复制按钮触发事件
- Google Tag Assistant 检测到事件
- 控制台无报错

---

#### D3: 功能验收检查

**首页测试**:
- [ ] 科普窗口显示正常
- [ ] 3 张卡片完整
- [ ] 点击卡片跳转正确
- [ ] "浏览全部"按钮跳转正确
- [ ] 响应式正常

**总科普页测试**:
- [ ] 页面访问正常
- [ ] 文章列表显示
- [ ] 排序正确
- [ ] 点击文章跳转正确
- [ ] 导航栏入口正常

**单篇详情页测试**:
- [ ] 页面访问正常
- [ ] 文章内容渲染
- [ ] 图片显示正常
- [ ] 导航功能正常
- [ ] 复制按钮正常
- [ ] 转化追踪触发

**导航栏测试**:
- [ ] 所有菜单项正常
- [ ] 科普知识链接正常
- [ ] 响应式正常

**现有功能回归测试**:
- [ ] 首页 Banner 正常
- [ ] 产品展示正常
- [ ] 联系表单正常
- [ ] 语言切换正常
- [ ] 浮动联系按钮正常
- [ ] 页脚正常

---

## 📊 质量检查清单

### 代码质量

- [ ] TypeScript 无报错
- [ ] 无 ESLint 警告
- [ ] 代码格式化（Prettier）
- [ ] 组件 Props 类型定义完整
- [ ] 无 console.log（生产代码）
- [ ] 错误处理完整

### 性能优化

- [ ] 图片懒加载
- [ ] Critical CSS 内联
- [ ] 非关键资源异步加载
- [ ] 无冗余代码
- [ ] 组件按需加载

### SEO 优化

- [ ] 每个页面独立 Title
- [ ] 每个页面独立 Description
- [ ] H1-H3 关键词布局合理
- [ ] 结构化数据（Schema.org）
- [ ] Open Graph 标签
- [ ] sitemap 更新

### 无障碍访问

- [ ] ARIA 标签完整
- [ ] 图片 alt 属性
- [ ] 键盘导航支持
- [ ] 颜色对比度达标

---

## 🚀 部署检查清单

### 部署前检查

- [ ] 所有功能测试通过
- [ ] Lighthouse 分数达标
- [ ] 转化追踪测试通过
- [ ] 现有功能回归测试通过
- [ ] Git 提交完整
- [ ] 无本地未提交更改

### 部署流程

- [ ] 本地构建（npm run build）
- [ ] 构建成功无报错
- [ ] Git 推送（git push origin main）
- [ ] Vercel 自动部署触发
- [ ] 部署成功
- [ ] 生产环境访问正常

### 部署后验证

- [ ] 首页访问正常
- [ ] 科普页面访问正常
- [ ] 所有功能正常
- [ ] 转化追踪正常
- [ ] 性能指标正常

### 回滚准备

- [ ] Git 回滚命令准备
- [ ] Vercel 控制台回滚路径熟悉
- [ ] 回滚决策流程明确

---

## 📝 文档检查清单

### 开发文档

- [ ] ARCHITECTURE.md 更新
- [ ] DEVELOPMENT.md 更新
- [ ] README.md 更新
- [ ] 使用文档创建

### 用户文档

- [ ] 如何添加新文章
- [ ] 如何编辑文章
- [ ] 如何上传图片
- [ ] 如何设置精选文章
- [ ] 常见问题解答

### 培训材料

- [ ] 示例文章完整
- [ ] 操作步骤清晰
- [ ] 截图/录屏完整

---

## ✅ 最终验收清单

### 功能完整性

- [ ] 所有 Phase 完成
- [ ] 所有任务完成
- [ ] 所有检查点通过

### 质量保证

- [ ] 代码质量达标
- [ ] 性能指标达标
- [ ] SEO 优化达标
- [ ] 无障碍访问达标

### 业务目标

- [ ] SEO 内容增加
- [ ] 关键词布局优化
- [ ] 转化追踪精准
- [ ] 广告效果可提升

### 风险控制

- [ ] 现有功能不崩溃
- [ ] 回滚方案准备
- [ ] 监控指标设置

---

**检查清单版本**: v1.0  
**最后更新**: 2026-03-18  
**适用阶段**: 开发、测试、部署  
**审查人**: @所有 Agent
