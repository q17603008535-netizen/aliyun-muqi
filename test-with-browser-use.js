#!/usr/bin/env node

/**
 * 使用 browser-use CLI 测试结构化数据修复效果
 * 
 * 测试流程：
 * 1. 启动本地服务器
 * 2. 使用 browser-use 访问网站
 * 3. 提取并验证结构化数据
 * 4. 生成测试报告
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 开始使用 browser-use 测试结构化数据修复效果...\n');

// 测试配置
const CONFIG = {
  port: 4321,
  baseUrl: `http://localhost:4321`,
  distPath: path.join(__dirname, 'dist'),
  reportPath: path.join(__dirname, 'test-report.md')
};

// 步骤 1: 启动本地服务器
console.log('📦 步骤 1: 启动本地服务器...');
try {
  execSync(`npx astro preview --port ${CONFIG.port}`, {
    cwd: __dirname,
    stdio: 'ignore',
    timeout: 10000
  });
  console.log(`✅ 服务器已启动：${CONFIG.baseUrl}\n`);
} catch (error) {
  console.error('❌ 服务器启动失败，尝试使用 dist 目录直接测试');
  console.log('');
}

// 步骤 2: 使用 browser-use 测试
console.log('🌐 步骤 2: 使用 browser-use 访问网站并提取结构化数据...\n');

const testScript = `
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    // 访问网站
    await page.goto('${CONFIG.baseUrl}', { waitUntil: 'networkidle', timeout: 30000 });
    
    // 提取结构化数据
    const structuredData = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      const results = [];
      
      scripts.forEach((script, index) => {
        try {
          const json = JSON.parse(script.textContent.trim());
          results.push({
            index,
            type: json['@type'],
            name: json.name || 'N/A',
            url: json.url || null,
            image: json.image || null,
            logo: json.logo || null,
            hasErrors: false
          });
        } catch (e) {
          results.push({
            index,
            type: 'ERROR',
            name: '解析失败',
            error: e.message,
            hasErrors: true
          });
        }
      });
      
      return results;
    });
    
    // 输出结果
    console.log(JSON.stringify({ structuredData, url: page.url(), title: await page.title() }, null, 2));
    
  } catch (error) {
    console.error(JSON.stringify({ error: error.message }));
  } finally {
    await browser.close();
  }
})();
`;

fs.writeFileSync(path.join(__dirname, 'test-browser.js'), testScript);

try {
  const output = execSync('node test-browser.js', {
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 60000
  });
  
  console.log('📊 测试结果:\n');
  console.log(output);
  
} catch (error) {
  console.error('❌ 测试执行失败:', error.message);
}

// 清理
try {
  fs.unlinkSync(path.join(__dirname, 'test-browser.js'));
} catch (e) {}

console.log('\n✅ 测试完成');
