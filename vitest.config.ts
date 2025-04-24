import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    alias: {
      '@mudssky/react-components': path.resolve(__dirname, './src/index.ts'), // 修正拼写错误
      '@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
    },
  },
})
