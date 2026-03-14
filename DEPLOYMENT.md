# 部署指南

> 洛天翡翠网站 V3 - 完整部署文档

---

## 📋 部署前检查清单

在部署前，请确保完成以下检查：

### ✅ 代码检查

- [ ] 所有功能开发完成
- [ ] 代码已提交到 Git
- [ ] 无 TypeScript 错误
- [ ] 本地构建成功

### ✅ 配置检查

- [ ] CMS 配置正确
- [ ] 表单服务配置（Web3Forms）
- [ ] 域名配置（Vercel）
- [ ] 环境变量配置

### ✅ 内容检查

- [ ] 所有页面内容完整
- [ ] 图片资源上传完成
- [ ] SEO 元标签配置
- [ ] 社交媒体链接配置

---

## 🚀 Vercel 部署（自动）

### 自动部署流程

项目已配置 Vercel 自动部署，无需手动操作：

```
Git Push → Vercel 检测 → 自动构建 → 自动部署 → 全球 CDN
```

### 部署步骤

#### 1. 推送到 GitHub

```bash
# 提交代码
git add .
git commit -m "feat: 添加新功能"

# 推送到 main 分支
git push origin main
```

#### 2. Vercel 自动构建

Vercel 检测到 GitHub 仓库更新后，自动开始构建：

- 安装依赖：`npm install`
- 执行构建：`npm run build`
- 输出目录：`dist/`

#### 3. 查看部署状态

访问 Vercel 控制台：
https://vercel.com/q17603008535-netizen/jade-website-v3

#### 4. 验证部署

部署完成后，访问网站验证功能：
- 生产地址：https://jade-website-v3.vercel.app
- 自定义域名：https://ltmdfc.top

---

## 🔧 环境变量配置

### Web3Forms 配置

**Access Key**：已在代码中配置

```html
<!-- src/components/Contact.astro -->
<input type="hidden" name="access_key" value="4cedbff2-2131-4500-bfc1-7fc950517f48" />
```

**接收邮箱**：q17603008535@gmail.com

**配置步骤**（如需要修改）：
1. 访问 https://web3forms.com/
2. 登录账号
3. 进入表单设置
4. 修改接收邮箱

### Google Analytics 配置

**配置位置**：已在代码中集成

**查看数据**：
1. 访问 Google Analytics
2. 选择项目
3. 查看实时数据和用户行为

### Vercel Analytics 配置

**配置位置**：`vercel.json`

**查看数据**：
1. 访问 Vercel 控制台
2. 进入 Analytics 标签
3. 查看性能指标

---

## 🌐 自定义域名

### 域名信息

- **域名**：ltmdfc.top
- **平台**：Vercel
- **状态**：已配置

### DNS 配置

Vercel 自动配置 DNS，无需手动设置：

**CNAME 记录**：
```
类型：CNAME
主机：www
值：cname.vercel-dns.com
```

**A 记录**：
```
类型：A
主机：@
值：76.76.21.21
```

### SSL 证书

Vercel 自动签发和续期 SSL 证书：

- **证书类型**：Let's Encrypt
- **自动续期**：是
- **有效期**：90 天

### 验证域名

1. 访问 Vercel 控制台
2. 进入 Settings → Domains
3. 确认域名状态为 **Active**

---

## 📊 性能监控

### Vercel Analytics

#### 自动监控指标

- **访问量**：页面浏览数、独立访客
- **性能**：FCP、LCP、CLS、FID
- **地区**：访客地理位置
- **设备**：桌面端/移动端

#### 查看数据

1. 访问 Vercel 控制台
2. 选择项目
3. 进入 Analytics 标签

### Google Analytics

#### 监控指标

- **用户行为**：停留时间、跳出率
- **流量来源**：搜索引擎、直接访问、引荐
- **转化追踪**：表单提交、点击事件

#### 查看数据

访问：https://analytics.google.com/

### 性能优化建议

根据监控数据优化：

1. **LCP 过高**（>2.5s）
   - 优化首屏图片
   - 使用图片懒加载
   - 优化服务器响应时间

2. **CLS 过高**（>0.1）
   - 为图片设置固定尺寸
   - 避免动态插入内容
   - 使用骨架屏

3. **FID 过高**（>100ms）
   - 减少客户端 JavaScript
   - 使用 Web Worker
   - 优化事件监听器

---

## 🔄 CI/CD 流程

### 自动部署触发条件

| 事件 | 操作 | 结果 |
|------|------|------|
| Push to main | 推送到 main 分支 | 生产部署 |
| Pull Request | 创建 PR | 预览部署 |
| Release | 创建 Release | 生产部署 |

### 预览部署

创建 Pull Request 时，Vercel 自动创建预览环境：

1. 创建功能分支：`git checkout -b feature/new-feature`
2. 提交代码：`git commit -m "feat: 新功能"`
3. 创建 Pull Request
4. Vercel 自动生成预览链接
5. 验证功能后合并

### 生产部署

推送到 main 分支后：

1. Vercel 检测变更
2. 自动构建
3. 自动部署到生产环境
4. 更新 CDN 缓存
5. 发送部署通知

---

## 🐛 常见问题

### 部署失败

#### 症状

Vercel 构建失败，显示错误信息

#### 排查步骤

1. **查看构建日志**
   ```bash
   # 访问 Vercel 控制台
   # 进入 Deployments → 查看失败部署的日志
   ```

2. **常见错误**
   - 依赖安装失败 → 检查 `package.json`
   - TypeScript 错误 → 运行 `npx tsc --noEmit`
   - 构建错误 → 本地运行 `npm run build`

3. **解决方案**
   ```bash
   # 本地测试构建
   npm install
   npm run build
   
   # 修复错误后重新推送
   git add .
   git commit -m "fix: 修复构建错误"
   git push
   ```

### CMS 无法访问

#### 症状

访问 CMS 地址显示 404 或空白

#### 排查步骤

1. **检查部署状态**
   - 访问 Vercel 控制台
   - 确认最新部署成功

2. **检查 CMS 配置**
   - 确认 `public/admin/config.yml` 存在
   - 确认配置正确

3. **清除缓存**
   - 清除浏览器缓存
   - 使用无痕模式访问

#### 解决方案

```bash
# 检查文件是否存在
ls public/admin/config.yml

# 重新推送
git push origin main
```

### 表单无法提交

#### 症状

表单提交后无响应或显示错误

#### 排查步骤

1. **检查 Access Key**
   - 确认 Access Key 正确
   - 检查 Web3Forms 账号状态

2. **查看浏览器控制台**
   - 打开 DevTools
   - 查看错误信息

3. **测试网络连接**
   - 确认网络正常
   - 检查防火墙设置

#### 解决方案

- 重新获取 Access Key
- 更新代码并重新部署
- 联系 Web3Forms 支持

### 图片无法显示

#### 症状

图片显示 404 或加载失败

#### 排查步骤

1. **检查图片路径**
   ```bash
   # 确认图片在正确目录
   ls public/images/
   ```

2. **检查 HTML 引用**
   ```astro
   <!-- ✅ 正确 -->
   <img src="/images/product.jpg" />
   
   <!-- ❌ 错误 -->
   <img src="../images/product.jpg" />
   ```

3. **清除 CDN 缓存**
   - 访问 Vercel 控制台
   - 进入 Settings → Caching
   - 清除缓存

---

## 💰 成本管理

### Vercel 免费额度

**Hobby 计划**（免费）：
- ✅ 无限生产部署
- ✅ 100GB 带宽/月
- ✅ 100GB 构建时长/月
- ✅ 自动 SSL 证书
- ✅ 全球 CDN

**当前使用**：
- 带宽：约 10-20GB/月（预估）
- 构建：约 10-20 次/月
- 状态：✅ 在免费额度内

### 优化建议

1. **图片优化**
   - 使用 WebP/AVIF 格式
   - 压缩图片大小
   - 使用懒加载

2. **构建优化**
   - 避免频繁推送
   - 使用预览部署测试
   - 合并小改动

3. **CDN 优化**
   - 配置缓存策略
   - 使用 `vercel.json` 优化
   - 减少大文件传输

---

## 📦 部署后验证

### 功能验证清单

#### 核心功能

- [ ] 首页正常显示
- [ ] 导航栏功能正常
- [ ] 产品展示正常
- [ ] 表单可以提交
- [ ] 联系方式显示正确

#### 响应式设计

- [ ] 桌面端显示正常
- [ ] 移动端显示正常
- [ ] 平板显示正常

#### 性能验证

- [ ] 页面加载速度快
- [ ] 图片加载正常
- [ ] 动画流畅

#### SEO 验证

- [ ] meta 标签正确
- [ ] 结构化数据正确
- [ ] Sitemap 生成

### 工具验证

#### Lighthouse

1. 打开 Chrome DevTools
2. 进入 Lighthouse 标签
3. 运行测试
4. 检查分数（目标：95+）

#### Google Search Console

1. 提交 Sitemap
2. 检查索引状态
3. 查看搜索表现

---

## 🔒 安全建议

### 最佳实践

1. **保护 Access Key**
   - 不要公开 Access Key
   - 使用环境变量（如需要）
   - 定期更换

2. **GitHub 安全**
   - 启用双因素认证
   - 使用 SSH 密钥
   - 定期审查授权

3. **依赖更新**
   - 定期更新依赖
   - 使用 `npm audit`
   - 修复安全漏洞

### 监控

- 监控异常访问
- 监控表单提交频率
- 监控性能指标

---

## 📝 部署记录

### 部署历史

| 日期 | 版本 | 说明 | 状态 |
|------|------|------|------|
| 2026-03-14 | v3.0 | 生产就绪版本 | ✅ 成功 |

### 回滚流程

如需回滚到之前的版本：

1. 访问 Vercel 控制台
2. 进入 Deployments
3. 找到要回滚的版本
4. 点击 **Redeploy**

---

## 📞 技术支持

### 遇到问题？

1. **查看文档**
   - README.md
   - DEVELOPMENT.md
   - 本文档

2. **查看日志**
   - Vercel 控制台
   - 浏览器控制台
   - GitHub Actions

3. **联系方式**
   - 邮箱：q17603008535@gmail.com
   - GitHub：https://github.com/q17603008535-netizen/jade-website-v3

---

**最后更新**：2026-03-14  
**文档版本**：v1.0  
**部署状态**：生产就绪 ✅
