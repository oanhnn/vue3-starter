import path from 'path'
import { UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'
import test from 'vite-plugin-test'

const defineConfig: UserConfigFn = ({ mode }) => {
  const plugins = [vue()]

  if (mode === 'testing') {
    plugins.push(
      test({
        dir: './tests',
      })
    )
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
