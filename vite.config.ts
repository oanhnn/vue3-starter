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
  test: {
    globals: true,
    environment: 'jsdom',
    resolveSnapshotPath: (testPath: string, snapExtension: string): string => {
      const testRootDir = path.join(__dirname, 'tests', 'units')
      const snapRootDir = path.join(__dirname, 'tests', 'units', '__snapshots__')

      return testPath
        .replace(testRootDir, snapRootDir)
        .replace(/\.(spec|test)\.(js|ts)$/, '')
        .concat(snapExtension)
    },
  },
})
