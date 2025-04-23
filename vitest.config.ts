import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    alias: {
      '@mudssky/react-compoents': path.resolve(__dirname, './src/index.ts'),
    },
  },
})
