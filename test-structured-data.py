#!/usr/bin/env python3
"""
使用 Playwright 测试结构化数据修复效果
"""

import json
import sys
from playwright.sync_api import sync_playwright

def test_structured_data():
    print('🔍 开始测试结构化数据修复效果...\n')
    
    with sync_playwright() as p:
        # 启动浏览器
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        try:
            # 访问本地构建的网站
            print('📄 步骤 1: 访问本地网站...')
            page.goto(f'file:///Volumes/Container/AI_Projects/AI%20WEB/jade-website-v3/dist/index.html', 
                     wait_until='networkidle', timeout=30000)
            print(f'✅ 页面加载成功: {page.title()}\n')
            
            # 截取截图
            print('📸 步骤 2: 截取页面截图...')
            page.screenshot(path='/tmp/jade-website-test.png', full_page=True)
            print('✅ 截图已保存至：/tmp/jade-website-test.png\n')
            
            # 提取结构化数据
            print('🔍 步骤 3: 提取并验证结构化数据...\n')
            
            structured_data = page.evaluate('''() => {
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
            }''')
            
            print(f'📊 共发现 {len(structured_data)} 个结构化数据块:\n')
            
            has_errors = False
            has_invalid_urls = False
            
            for item in structured_data:
                print(f'[{item["index"] + 1}] 类型：{item["type"]}')
                
                if item['hasErrors']:
                    print(f'   ❌ 错误：{item.get("error", "未知错误")}')
                    has_errors = True
                else:
                    print(f'   名称：{item["name"]}')
                    
                    # 检查 URL
                    if item.get('url'):
                        url = item['url']
                        if 'vercel.app' in url or url == 'siteUrl' or '${' in url:
                            print(f'   ❌ URL 错误：{url}')
                            has_invalid_urls = True
                        elif url.startswith('https://www.ltmdfc.top'):
                            print(f'   ✅ URL 正确：{url}')
                        else:
                            print(f'   ⚠️  URL 非预期：{url}')
                    
                    # 检查 image
                    if item.get('image'):
                        image = item['image']
                        if 'vercel.app' in image or '${' in image:
                            print(f'   ❌ 图片 URL 错误：{image}')
                            has_invalid_urls = True
                        elif image.startswith('https://www.ltmdfc.top') or image.startswith('http'):
                            print(f'   ✅ 图片 URL 正确：{image}')
                    
                    # 检查 logo
                    if item.get('logo'):
                        logo = item['logo']
                        if 'vercel.app' in logo or '${' in logo:
                            print(f'   ❌ Logo URL 错误：{logo}')
                            has_invalid_urls = True
                        elif logo.startswith('https://www.ltmdfc.top'):
                            print(f'   ✅ Logo URL 正确：{logo}')
                    
                    print('')
            
            # 检查 Meta 标签
            print('🔍 步骤 4: 检查 Meta 标签...\n')
            
            meta_tags = page.evaluate('''() => {
                const metas = document.querySelectorAll('meta[property="og:url"], meta[property="og:image"]');
                return Array.from(metas).map(meta => ({
                    property: meta.getAttribute('property'),
                    content: meta.getAttribute('content')
                }));
            }''')
            
            for meta in meta_tags:
                print(f'[{meta["property"]}] {meta["content"]}')
                if 'vercel.app' in meta['content']:
                    print('   ❌ 包含错误的域名\n')
                    has_invalid_urls = True
                else:
                    print('   ✅ URL 格式正确\n')
            
            # 生成报告
            print('=' * 60)
            print('📋 测试总结')
            print('=' * 60)
            
            report_lines = [
                '# 结构化数据测试报告',
                '',
                f'## 测试结果：{"✅ 通过" if not (has_errors or has_invalid_urls) else "❌ 失败"}',
                '',
                f'- 结构化数据块数量：{len(structured_data)}',
                f'- JSON 解析错误：{"是" if has_errors else "否"}',
                f'- 无效 URL: {"是" if has_invalid_urls else "否"}',
                '',
                '## 详细结果',
                ''
            ]
            
            for item in structured_data:
                report_lines.append(f'### {item["type"]}')
                if item['hasErrors']:
                    report_lines.append(f'- ❌ 错误：{item.get("error")}')
                else:
                    report_lines.append(f'- 名称：{item["name"]}')
                    if item.get('url'):
                        status = '✅' if item['url'].startswith('https://www.ltmdfc.top') else '⚠️'
                        report_lines.append(f'- URL: {status} {item["url"]}')
                    if item.get('image'):
                        status = '✅' if item['image'].startswith('https://www.ltmdfc.top') else '⚠️'
                        report_lines.append(f'- 图片：{status} {item["image"]}')
                    if item.get('logo'):
                        status = '✅' if item['logo'].startswith('https://www.ltmdfc.top') else '⚠️'
                        report_lines.append(f'- Logo: {status} {item["logo"]}')
                report_lines.append('')
            
            report_lines.append('## 结论')
            report_lines.append('')
            if has_errors or has_invalid_urls:
                report_lines.append('❌ 测试失败 - 仍存在结构化数据问题')
                report_lines.append('需要进一步修复')
            else:
                report_lines.append('✅ 测试通过 - 所有结构化数据格式正确且 URL 有效！')
                report_lines.append('✅ 修复成功 - 可以通过 Google Search Console 验证')
            
            report_content = '\n'.join(report_lines)
            
            with open('/tmp/jade-website-test-report.md', 'w', encoding='utf-8') as f:
                f.write(report_content)
            
            print(f'\n📄 完整报告已保存至：/tmp/jade-website-test-report.md')
            print('\n' + report_content)
            
        except Exception as e:
            print(f'❌ 测试失败：{e}')
            import traceback
            traceback.print_exc()
        finally:
            browser.close()
            print('\n🔒 浏览器已关闭')

if __name__ == '__main__':
    test_structured_data()
