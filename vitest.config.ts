import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'tests/e2e/**/*'],
      resolveSnapshotPath: (testPath: string, snapExtension: string): string => {
        const testDir = fileURLToPath(new URL('./tests/units', import.meta.url))
        const snapDir = fileURLToPath(new URL('./tests/units/__snapshots__', import.meta.url))

        return testPath.replace(testDir, snapDir).replace(/\.(spec|test)\.(js|ts)$/, snapExtension)
      },
    },
  })
)
