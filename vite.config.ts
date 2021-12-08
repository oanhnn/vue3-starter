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
  }
}

export default defineConfig
