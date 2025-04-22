// 这个配置给storybook用
import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rsbuild/core'

export default defineConfig({
  source: {
    entry: {
      index: ['./src/index'],
    },
  },
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
})
