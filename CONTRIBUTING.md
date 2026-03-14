# 贡献指南

> 洛天翡翠网站 V3 - 贡献者指南

---

## 🤝 如何贡献

欢迎为洛天翡翠网站项目做出贡献！您可以通过以下方式参与：

### 代码贡献

- 修复 Bug
- 添加新功能
- 性能优化
- 代码重构
- 测试编写

### 内容贡献

- 编辑网站内容（通过 CMS）
- 添加新产品
- 更新文案
- 上传图片资源

### 其他贡献

- 文档改进
- Bug 报告
- 功能建议
- 用户体验反馈

---

## 📝 Git 规范

### Commit Message 格式

项目使用 **Conventional Commits** 规范：

```
<类型>: <描述>
```

#### 类型说明

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加产品搜索功能` |
| `fix` | 修复 Bug | `fix: 修复语言切换器显示问题` |
| `refactor` | 代码重构 | `refactor: 优化组件结构` |
| `perf` | 性能优化 | `perf: 优化图片加载速度` |
| `docs` | 文档更新 | `docs: 更新 README.md` |
| `style` | 代码格式 | `style: 格式化代码` |
| `test` | 测试 | `test: 添加组件测试` |
| `chore` | 构建/工具 | `chore: 更新依赖版本` |

#### 提交示例

```bash
# 新功能
git commit -m "feat: 添加产品筛选功能"

# Bug 修复
git commit -m "fix: 修复表单提交失败问题"

# 性能优化
git commit -m "perf: 优化首屏加载速度"

# 重构
git commit -m "refactor: 简化语言切换逻辑"
```

### 分支管理

#### 单分支流程

项目采用简单的单分支流程：

```
main 分支（生产分支）
  ↑
  | 直接 push
  |
开发者本地
```

#### 开发流程

1. **拉取最新代码**
   ```bash
   git pull origin main
   ```

2. **创建功能分支**（可选）
   ```bash
   git checkout -b feature/new-feature
   ```

3. **开发功能**
   - 编写代码
   - 本地测试

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: 添加新功能"
   ```

5. **推送到 GitHub**
   ```bash
   git push origin main
   # 或
   git push origin feature/new-feature
   ```

#### 分支命名（如使用）

- 功能分支：`feature/xxx`
- 修复分支：`fix/xxx`
- 优化分支：`perf/xxx`
- 重构分支：`refactor/xxx`

---

## 🎯 开发流程

### 新功能开发

#### 1. 确认需求

- 明确功能目标
- 评估工作量
- 确认技术方案

#### 2. 开发

```bash
# 拉取最新代码
git pull origin main

# 创建功能分支
git checkout -b feature/new-feature

# 开发功能
# ... 编写代码 ...

# 本地测试
npm run dev
```

#### 3. 自测

- 功能是否按预期工作
- 是否有 TypeScript 错误
- 是否影响其他功能
- 响应式设计是否正常

#### 4. 提交

```bash
# 添加文件
git add .

# 提交代码（使用 Conventional Commits）
git commit -m "feat: 添加新功能"

# 推送
git push origin feature/new-feature
```

#### 5. Code Review（如需要）

- 检查代码质量
- 确认功能正常
- 提出改进建议

#### 6. 合并

```bash
# 切换到 main 分支
git checkout main

# 合并功能分支
git merge feature/new-feature

# 推送到 GitHub
git push origin main
```

### Bug 修复

#### 1. 报告 Bug

- 描述 Bug 现象
- 提供复现步骤
- 提供期望行为
- 提供截图（如需要）

#### 2. 确认 Bug

- 尝试复现 Bug
- 确认影响范围
- 确定优先级

#### 3. 修复 Bug

```bash
# 拉取最新代码
git pull origin main

# 创建修复分支
git checkout -b fix/bug-description

# 修复 Bug
# ... 编写代码 ...

# 测试修复
npm run dev
```

#### 4. 提交修复

```bash
git add .
git commit -m "fix: 修复 xxx 问题"
git push origin fix/bug-description
```

#### 5. 验证

- 确认 Bug 已修复
- 确认无回归问题
- 更新文档（如需要）

---

## 📋 代码规范

### TypeScript 规范

#### 严格模式

项目使用 TypeScript strict mode：

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### 类型定义

```typescript
// ✅ 明确定义类型
interface Product {
  name: string;
  weight: string;
  price: string;
  description: string;
  image?: string;
  featured?: boolean;
}

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

#### Props 接口

```astro
---
// ✅ 定义 Props 接口
interface Props {
  title: string;
  description?: string;
  items?: Item[];
}

// ✅ 设置默认值
const { title, description = '', items = [] } = Astro.props;
---
```

### 组件规范

#### 组件结构

```astro
---
// 1. 导入依赖
import { getCollection } from 'astro:content';

// 2. 定义类型
interface Props {
  title?: string;
}

// 3. 设置默认值
const { title = '默认标题' } = Astro.props;

// 4. 获取数据
const data = await getCollection('xxx');
---

<!-- 5. 语义化 HTML -->
<section class="组件样式" aria-labelledby="组件 ID">
  <h2 id="组件 ID">{title}</h2>
  
  <!-- 内容 -->
</section>

<!-- 6. 客户端交互（如需要） -->
<script>
  // 客户端 JavaScript
</script>
```

#### 组件命名

- 使用 PascalCase：`Navbar.astro`、`Hero.astro`
- 语义化命名：反映组件功能
- 避免缩写：使用完整单词

#### 事件处理

```astro
<script>
  // ✅ 添加事件监听器
  const button = document.querySelector('button');
  button?.addEventListener('click', () => {
    // 处理逻辑
  });
  
  // ✅ 使用事件委托
  document.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).matches('.btn')) {
      // 处理按钮点击
    }
  });
</script>
```

### CSS 规范

#### Tailwind CSS 使用

```astro
<!-- ✅ 使用 Tailwind 类 -->
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
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 内容 -->
</div>
```

#### 颜色使用

```astro
<!-- ✅ 使用设计系统颜色 -->
<div class="bg-primary text-white">
  主色背景
</div>

<div class="bg-stone-50 text-gray-900">
  中性色背景
</div>
```

---

## 🧪 测试指南

### 手动测试清单

#### 功能测试

- [ ] 导航栏功能正常
- [ ] 表单可以提交
- [ ] 语言切换正常
- [ ] 产品展示正常
- [ ] 联系模态框正常
- [ ] 社交媒体链接正常

#### 响应式测试

- [ ] 桌面端（1920px）显示正常
- [ ] 平板端（768px）显示正常
- [ ] 移动端（375px）显示正常

#### 浏览器兼容性测试

- [ ] Chrome（最新）
- [ ] Firefox（最新）
- [ ] Safari（最新）
- [ ] Edge（最新）

#### 无障碍访问测试

- [ ] 键盘导航正常
- [ ] 屏幕阅读器可读
- [ ] 焦点可见
- [ ] ARIA 标签正确

### 性能测试

#### Lighthouse 测试

1. 打开 Chrome DevTools
2. 进入 Lighthouse 标签
3. 运行测试
4. 检查分数（目标：95+）

**指标要求**：
- 性能：95+
- SEO：95+
- 无障碍：95+
- 最佳实践：95+

---

## 🔍 Code Review 清单

### 代码质量

- [ ] 代码符合规范
- [ ] 类型定义完整
- [ ] 无 TypeScript 错误
- [ ] 无 console.log（调试用）
- [ ] 代码格式正确

### 功能完整性

- [ ] 功能按需求实现
- [ ] 边界条件处理
- [ ] 错误处理完善
- [ ] 默认值设置合理

### 性能优化

- [ ] 图片优化（懒加载、格式）
- [ ] 代码分割合理
- [ ] 无性能瓶颈
- [ ] 缓存策略正确

### 无障碍访问

- [ ] ARIA 标签完整
- [ ] 键盘导航支持
- [ ] 焦点管理正确
- [ ] 屏幕阅读器优化

### 文档

- [ ] 代码注释清晰
- [ ] 文档已更新
- [ ] CHANGELOG 已更新

---

## 📦 发布流程

### 版本号规范

使用语义化版本号：`MAJOR.MINOR.PATCH`

- **MAJOR**（主版本号）：不兼容的 API 变更
- **MINOR**（次版本号）：向后兼容的功能性新增
- **PATCH**（修订号）：向后兼容的问题修正

### 发布检查清单

发布前检查：

- [ ] 所有测试通过
- [ ] 文档已更新
- [ ] CHANGELOG 已更新
- [ ] 版本号已更新
- [ ] Git 标签已创建

### 发布步骤

```bash
# 1. 更新版本号
# 编辑 package.json

# 2. 提交变更
git add .
git commit -m "chore: 发布 v3.0.0"

# 3. 创建 Git 标签
git tag v3.0.0

# 4. 推送代码和标签
git push origin main
git push origin v3.0.0

# 5. Vercel 自动部署
# 等待自动构建完成

# 6. 验证部署
# 访问网站检查功能
```

---

## 🐛 Bug 报告

### Bug 报告模板

```markdown
### Bug 描述
简要描述 Bug 现象

### 复现步骤
1. 打开页面
2. 点击按钮
3. 出现错误

### 期望行为
应该发生什么

### 实际行为
实际发生了什么

### 截图
（如需要）

### 环境信息
- 操作系统：macOS / Windows / Linux
- 浏览器：Chrome 120 / Firefox 121
- 设备：桌面端 / 移动端

### 其他信息
任何其他相关信息
```

### 提交 Bug

1. 访问 GitHub Issues
2. 点击 **New Issue**
3. 选择 **Bug Report**
4. 填写模板
5. 提交

---

## 💡 功能建议

### 功能建议模板

```markdown
### 功能描述
简要描述建议的功能

### 使用场景
为什么需要这个功能

### 实现方案
如何实现这个功能（可选）

### 其他信息
任何其他相关信息
```

### 提交建议

1. 访问 GitHub Issues
2. 点击 **New Issue**
3. 选择 **Feature Request**
4. 填写模板
5. 提交

---

## 📞 联系方式

### 项目维护者

- **姓名**：郭志鹏
- **邮箱**：q17603008535@gmail.com
- **GitHub**：https://github.com/q17603008535-netizen

### 项目仓库

- **GitHub**：https://github.com/q17603008535-netizen/jade-website-v3
- **Issues**：https://github.com/q17603008535-netizen/jade-website-v3/issues

---

**最后更新**：2026-03-14  
**文档版本**：v1.0
