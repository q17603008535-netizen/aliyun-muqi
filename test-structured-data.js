// 测试结构化数据修复效果
const { chromium } = require('playwright');

(async () => {
  console.log('🔍 开始测试结构化数据修复效果...\n');
  
  // 启动浏览器
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // 设置控制台监听
  page.on('console', msg => {
    console.log(`[页面日志] ${msg.type()}: ${msg.text()}`);
  });
  
  try {
    // 1. 访问本地构建的网站
    console.log('📄 步骤 1: 访问本地网站...');
    await page.goto('file:///Volumes/Container/AI_Projects/AI%20WEB/jade-website-v3/dist/index.html', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    console.log('✅ 页面加载成功\n');
    
    // 2. 截取完整页面截图
    console.log('📸 步骤 2: 截取页面截图...');
    await page.screenshot({ 
      path: '/tmp/jade-website-full.png',
      fullPage: true 
    });
    console.log('✅ 截图已保存至：/tmp/jade-website-full.png\n');
    
    // 3. 提取所有结构化数据
    console.log('🔍 步骤 3: 提取并验证结构化数据...\n');
    
    const structuredData = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      const results = [];
      
      scripts.forEach((script, index) => {
        try {
          const json = JSON.parse(script.textContent.trim());
          results.push({
            index,
            type: json['@type'],
            name: json.name || json['@type'],
            data: json
          });
        } catch (e) {
          results.push({
            index,
            type: 'ERROR',
            name: '解析失败',
            error: e.message,
            rawContent: script.textContent.substring(0, 200)
          });
        }
      });
      
      return results;
    });
    
    // 4. 验证每个结构化数据
    console.log(`📊 共发现 ${structuredData.length} 个结构化数据块:\n`);
    
    let hasErrors = false;
    let hasInvalidUrls = false;
    
    structuredData.forEach(item => {
      console.log(`[${item.index + 1}] 类型：${item.type}`);
      
      if (item.type === 'ERROR') {
        console.log(`   ❌ 错误：${item.error}`);
        console.log(`   内容：${item.rawContent}...\n`);
        hasErrors = true;
      } else {
        console.log(`   名称：${item.name}`);
        
        // 检查 URL 字段
        if (item.data.url) {
          const url = item.data.url;
          if (url.includes('vercel.app') || url === 'siteUrl' || url.includes('${')) {
            console.log(`   ❌ URL 错误：${url}`);
            hasInvalidUrls = true;
          } else if (url.startsWith('https://www.ltmdfc.top')) {
            console.log(`   ✅ URL 正确：${url}`);
          } else {
            console.log(`   ⚠️  URL 非预期：${url}`);
          }
        }
        
        // 检查 image 字段
        if (item.data.image) {
          const image = item.data.image;
          if (image.includes('vercel.app') || image.includes('${')) {
            console.log(`   ❌ 图片 URL 错误：${image}`);
            hasInvalidUrls = true;
          } else if (image.startsWith('https://www.ltmdfc.top') || image.startsWith('http')) {
            console.log(`   ✅ 图片 URL 正确：${image}`);
          }
        }
        
        // 检查 logo 字段
        if (item.data.logo) {
          const logo = item.data.logo;
          if (logo.includes('vercel.app') || logo.includes('${')) {
            console.log(`   ❌ Logo URL 错误：${logo}`);
            hasInvalidUrls = true;
          } else if (logo.startsWith('https://www.ltmdfc.top')) {
            console.log(`   ✅ Logo URL 正确：${logo}`);
          }
        }
        
        console.log('');
      }
    });
    
    // 5. 检查 meta 标签
    console.log('🔍 步骤 4: 检查 Meta 标签...\n');
    
    const metaTags = await page.evaluate(() => {
      const metas = document.querySelectorAll('meta[property="og:url"], meta[property="og:image"]');
      return Array.from(metas).map(meta => ({
        property: meta.getAttribute('property'),
        content: meta.getAttribute('content')
      }));
    });
    
    metaTags.forEach(meta => {
      console.log(`[${meta.property}] ${meta.content}`);
      if (meta.content.includes('vercel.app')) {
        console.log(`   ❌ 包含错误的域名\n`);
        hasInvalidUrls = true;
      } else {
        console.log(`   ✅ URL 格式正确\n`);
      }
    });
    
    // 6. 总结
    console.log('='.repeat(60));
    console.log('📋 测试总结');
    console.log('='.repeat(60));
    
    if (hasErrors) {
      console.log('❌ 发现 JSON 解析错误 - 结构化数据格式不正确');
    } else if (hasInvalidUrls) {
      console.log('❌ 发现无效的 URL - 仍包含 vercel.app 或模板变量');
    } else {
      console.log('✅ 所有结构化数据格式正确且 URL 有效！');
      console.log('✅ 修复成功 - 可以通过 Google Search Console 验证');
    }
    
    console.log('');
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
    console.log('🔒 浏览器已关闭');
  }
})();
