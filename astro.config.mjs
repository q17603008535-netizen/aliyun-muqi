// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://jade-website-v3.vercel.app',
  integrations: [
    sitemap(),
    astroI18next()
  ],
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