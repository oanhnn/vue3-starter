import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
  optimizeDeps: {
    include: ['@esm-bundle/chai', '@vue/test-utils'],
  },
  test: {
    global: true,
    environment: 'happy-dom',
  },
})
