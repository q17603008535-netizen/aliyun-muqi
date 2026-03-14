#!/usr/bin/env node
import { rename, readdir } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = './public/images';

const renames = [
  ['人物 1.png', 'person1.png'],
  ['人物 2.png', 'person2.png'],
  ['单独 LOGO.png', 'logo-single.png'],
  ['整合 LOGO.png', 'logo-combined.png'],
];

async function main() {
  console.log('开始重命名图片文件...\n');
  
  const files = await readdir(IMAGES_DIR);
  console.log('当前文件列表:', files);
  console.log('');
  
  for (const [oldName, newName] of renames) {
    const oldPath = join(IMAGES_DIR, oldName);
    const newPath = join(IMAGES_DIR, newName);
    
    try {
      await rename(oldPath, newPath);
      console.log(`✅ ${oldName} -> ${newName}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️  文件不存在：${oldName}`);
      } else {
        console.log(`❌ 错误：${oldName} -> ${error.message}`);
      }
    }
  }
  
  console.log('\n完成！');
}

main().catch(console.error);
