// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ltmdfc.top',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro']
          }
        }
      }
    }
  },
  // 压缩优化
  compressHTML: true,
  // 图片优化配置
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
