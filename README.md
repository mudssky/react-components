# @mudssky/react-components

React组件库

## 安装

使用pnpm安装包:

```bash
pnpm install @mudssky/react-components
```

或使用npm或yarn:

```bash
npm install @mudssky/react-components
yarn add @mudssky/react-components
```

## 使用方法

从库中导入组件:

```tsx
import { Button } from '@mudssky/react-components';

function App() {
  return <Button>点击我</Button>;
}
```

## 可用脚本

在项目目录中，你可以运行:

- `pnpm install`: 安装项目依赖
- `pnpm dev`: 开发模式下构建库(监听模式)
- `pnpm build`: 生产环境构建库
- `pnpm storybook`: 启动Storybook开发服务器
- `pnpm build:storybook`: 构建Storybook用于部署
- `pnpm test`: 使用Vitest运行测试
- `pnpm lint`: 使用Biome进行代码检查
- `pnpm format`: 使用Biome格式化代码
- `pnpm check`: 使用Biome检查代码格式和错误

## 构建库

库使用`rslib`构建，输出以下格式:

- **ESM**: `dist/esm` (入口: `dist/esm/index.js`)
- **CJS**: `dist/cjs` (入口: `dist/cjs/index.cjs`)
- **UMD**: `dist/umd` (全局变量: `ReactComponents`, 入口: `dist/umd/index.js`)

类型定义文件(`.d.ts`)生成在`dist/cjs/index.d.ts`。

## 开发

启动开发服务器并实时重载:

```bash
pnpm dev
```

使用Storybook隔离开发和查看组件:

```bash
pnpm storybook
```

## 测试

运行测试套件:

```bash
pnpm test
```

## 代码检查和格式化

本项目使用Biome进行代码检查和格式化。

- 检查代码: `pnpm check`
- 检查代码: `pnpm lint`
- 格式化代码: `pnpm format`
