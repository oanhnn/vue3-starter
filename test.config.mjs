import { readFileSync } from 'fs'
import { playwrightLauncher } from '@web/test-runner-playwright'
import vitePlugin from 'vite-web-test-runner-plugin'
import { esbuildPlugin } from '@web/dev-server-esbuild'

const ignoredBrowserLogs = ['[vite] connecting...', '[vite] connected.']

export default {
  rootDir: '.',
  files: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
  nodeResolve: true,
  plugins: [vitePlugin(), esbuildPlugin({ ts: true, target: 'esnext' })],
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      concurrency: 1,
      launchOptions: {
        headless: true,
      },
    }),
  ],
  coverage: true,
  coverageConfig: {
    include: ['src/**/*.{vue,js,jsx,ts,tsx}'],
  },
  testRunnerHtml: (testRunnerImport) => {
    const html = readFileSync('./index.html', { encoding: 'utf-8' })

    return html.replace(
      '<script type="module" src="/src/main.ts"></script>',
      `<script type="module">
        // Note: globals expected by @testing-library/vue
        window.global = window;
        window.process = { env: {} };
      </script>
      <script type="module" src="${testRunnerImport}"></script>`
    )
  },
  filterBrowserLogs: ({ args }) => {
    return !args.some((arg) => ignoredBrowserLogs.includes(arg))
  },
}
