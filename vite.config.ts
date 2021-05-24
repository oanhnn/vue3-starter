import { Plugin, UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'
import test from 'vite-plugin-test'

const defineConfig: UserConfigFn = ({ mode }) => {
  const plugins: Plugin[] = [vue()]

  if (mode === 'testing') {
    plugins.push(test())
  }

  return { plugins }
}

export default defineConfig
