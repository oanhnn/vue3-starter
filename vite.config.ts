import path from 'path'
import { UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'

const defineConfig: UserConfigFn = ({ mode }) => {
  const plugins = [vue()]

  if (mode === 'testing') {
    // plugins.push()
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@/': path.join(__dirname, 'src/'),
      },
    },
    optimizeDeps: {
      include: ['@esm-bundle/chai', '@vue/test-utils'],
    },
  }
}

export default defineConfig
