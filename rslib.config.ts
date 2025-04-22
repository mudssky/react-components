import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rslib/core'

const bundlelessSource = {
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
}
const bundleSource = {
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
}
export default defineConfig({
  lib: [
    {
      ...bundlelessSource,
      bundle: false,
      format: 'esm',
      dts: true,
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
    },
    {
      ...bundleSource,
      format: 'cjs',
      bundle: true,
      // dts:{bundle: false} 等价于dts: true, 生成bundleless类型
      dts: {
        bundle: true,

        // 放外面，方便引入
        // distPath: "./dist",
      },
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
    {
      ...bundleSource,
      format: 'umd',
      bundle: true,
      umdName: 'ReactComponents',
      output: {
        externals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        distPath: {
          root: './dist/umd',
        },
      },
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        // 支持react版本低于18的情况
        runtime: 'classic',
      },
    }),
  ],
})
