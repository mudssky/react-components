# 项目开发规范

## 0. 语言与框架

该项目是react组件库+hooks封装，使用typescript进行开发  
项目使用pnpm workspace管理，根目录是组件库的包，而apps/rc-doc是hooks文档所在的包，使用rspress作为hooks文档  
使用storybook进行组件测试和组件文档  
使用vitest进行hooks函数的单元测试  
使用rslib打包组件库  
使用changesets进行版本管理生成changelog

## 1. 项目结构

```
react-components/
├── .changeset/         # Changesets 配置与变更记录
├── .husky/             # Husky Git hooks 配置
├── .rslib/             # rslib 构建缓存
├── .storybook/         # Storybook 配置
├── .trae/
│   └── rules/
│       └── project_rules.md # 项目开发规范
├── apps/
│   └── rc-doc/         # Hooks 文档项目 (Rspress)
│       ├── .gitignore
│       ├── README.md
│       ├── docs/         # Rspress 文档内容
│       ├── package.json
│       ├── rspress.config.ts # Rspress 配置文件
│       └── tsconfig.json
├── src/
│   ├── components/     # React 组件
│   │   └── Button/     # Button 组件示例
│   │       └── index.ts
│   ├── hooks/          # 自定义 React Hooks
│   │   ├── index.ts
│   │   └── loading.ts  
│   └── index.ts        # 组件库入口文件
├── stories/            # Storybook stories 文件
│   └── Button.stories.ts
├── tests/              # 测试文件 (Vitest)
│   ├── hooks/
│   │   └── loading.test.ts # Hook 单元测试
│   ├── index.test.tsx  # 组件测试示例
│   └── tsconfig.json
├── .gitignore
├── README.md
├── biome.json          # Biome 配置文件 (代码格式化与检查)
├── package.json        # 项目根目录 package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml # pnpm workspace 配置文件
├── react-components.code-workspace # VSCode 工作区文件
├── rsbuild.config.ts   # Rsbuild 配置文件 (Storybook 使用)
├── rslib.config.ts     # Rslib 配置文件 (组件库打包)
├── tsconfig.json       # TypeScript 配置文件
├── vitest.config.ts    # Vitest 配置文件
└── vitest.setup.ts     # Vitest setup 文件
```

## 2. 代码风格

使用biome作为格式化和lint工具

命名规范：

- 变量 (camelCase)
- 常量 (UPPER_SNAKE_CASE)
- 函数/方法 (camelCase)
- React 组件 (PascalCase)
- TypeScript 类型/接口 (PascalCase)

## 3. git规范



- Commit Message 规范：例如遵循 Conventional Commits 格式 ( `feat:` ,` fix:` , `docs:` , `style:` , `refactor:` , `test:` , `chore:` 等)。



## 4.组件开发规范

- 组件设计原则 ：

  - 所有UI组件必须严格遵循单一职责原则（SRP）
  - 容器组件与UI组件必须分离（Presentational/Container模式）

  - 禁止在组件中直接操作DOM，必须通过React Hooks或第三方库

- Props 定义：使用 TypeScript interface 或 type ，明确必需和可选属性，提供 JSDoc 注释。

- 状态管理：简单状态使用 useState ，复杂状态逻辑使用 useReducer 或zustand（如果引入）。

- 样式方案：使用Tailwind CSS 或 css module。

- 可访问性 (Accessibility, a11y) 要求: 暂无

- Storybook 使用规范：每个组件必须有对应的 Story 文件，包含不同状态和交互的示例，使用 Controls Addon 控制 Props。
