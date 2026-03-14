#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""修复图片路径中的中文文件名"""

import os

BASE_DIR = '/Volumes/Container/AI_Projects/AI WEB/jade-website-v3'

# 需要替换的文件
files_to_fix = [
    'src/content/hero/config.md',
    'src/content/settings/config.md',
    'src/content/about/config.md',
]

# 替换规则
replacements = {
    '/images/人物 1.png': '/images/person1.png',
    '/images/人物 2.png': '/images/person2.png',
    '/images/单独 LOGO.png': '/images/logo-single.png',
    '/images/整合 LOGO.png': '/images/logo-combined.png',
}

def fix_file(filepath):
    """修复单个文件"""
    full_path = os.path.join(BASE_DIR, filepath)
    
    if not os.path.exists(full_path):
        print(f'❌ 文件不存在：{filepath}')
        return
    
    try:
        # 读取文件
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # 执行替换
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        # 如果有变化，写回文件
        if content != original:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'✅ 已修复：{filepath}')
        else:
            print(f'⚠️  无需修改：{filepath}')
    
    except Exception as e:
        print(f'❌ 错误：{filepath} - {e}')

def main():
    print('开始修复图片路径...\n')
    
    for filepath in files_to_fix:
        fix_file(filepath)
    
    print('\n完成！')

if __name__ == '__main__':
    main()
