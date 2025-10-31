# AGENTS.md（dk-web）

作用范围：对 `dk-web/` 目录树内所有代码与文档生效。

## 沟通与环境
- 交流语言：中文。
- Node.js：22.18.0（保持一致），包管理器：pnpm。

## 技术栈
- React 19 + TypeScript（严格）+ Vite
- 样式：Tailwind CSS v4 + CSS 变量（主题）
- UI：shadcn/ui（基于 Radix）

## 路径与结构
- 别名：`@/` → `src/`（`vite.config.ts`、`tsconfig.json`、`tsconfig.app.json` 一致）
- 组件：`src/components/ui/`（shadcn 组件存放处）
- 工具：`src/lib/utils.ts`（包含 `cn()`）
- 主题样式：`src/index.css`（定义 CSS 变量；配合 `tailwind.config.js`）

## 组件管理（shadcn/ui）
- 新增组件：`pnpm dlx shadcn@latest add <component-name>`
- 组件落地：`src/components/ui/`，配置由 `components.json` 管理
- 引用示例：
```ts
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
```

## 开发命令
- 开发：`pnpm dev`（默认 5173）
- 构建：`pnpm build`（先 TS 再 Vite）
- 预览：`pnpm preview`
- 代码检查：`pnpm lint`

## 样式与主题
- Tailwind v4 新写法与 `@apply` 规范；优先使用设计令牌（CSS 变量）
- `tailwind.config.js` 管理暗/亮模式与 shadcn 主题映射
- 组件样式通过 `cn()` 合并类名，避免拼接混乱

## 质量与规范
- TypeScript 严格、ESLint 开启（`eslint.config.js`）
- 引入三方库前评估与现有栈兼容性；避免引入与 Tailwind/shadcn 冲突的 UI 框架
- 路径统一走别名 `@/`，避免深层相对路径

## 禁止项（Don’ts）
- 不要在同一组件混用多套样式策略（尽量保持 Tailwind + 变量）
- 不要绕过别名直接使用相对路径导致维护困难
