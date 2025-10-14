# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DK Web is a React + TypeScript application built with Vite, using Tailwind CSS for styling and shadcn/ui for component library. The project uses pnpm for package management and is configured for Node.js 22.18.0.

## Development Commands

### Essential Commands
- `pnpm dev` - Start development server (runs on http://localhost:5173)
- `pnpm build` - Build for production (runs TypeScript compilation then Vite build)
- `pnpm lint` - Run ESLint on the codebase
- `pnpm preview` - Preview production build locally

### shadcn/ui Component Management
- `pnpm dlx shadcn@latest add [component-name]` - Add new shadcn/ui component
- Components are installed in `src/components/ui/`

## Architecture & Structure

### Path Aliases
The project uses `@/` as an alias for the `src/` directory:
- `@/components` → `src/components`
- `@/lib/utils` → `src/lib/utils`

### Core Technologies
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **TypeScript**: Strict mode with separate configs for app and build

### Key Configuration Files
- `vite.config.ts` - Vite configuration with path aliases
- `tailwind.config.js` - Tailwind config with shadcn/ui theming
- `components.json` - shadcn/ui configuration
- `tsconfig.json` & `tsconfig.app.json` - TypeScript configuration with path mapping
- `eslint.config.js` - ESLint configuration with React and TypeScript rules

### Component Structure
- `src/components/ui/` - shadcn/ui components (Button, Card, etc.)
- `src/lib/utils.ts` - Utility functions including `cn()` for class name merging

### Styling Architecture
The project uses Tailwind CSS with CSS variables for theming:
- Light/dark mode support configured in `tailwind.config.js`
- Theme variables defined in `src/index.css`
- Components use the `cn()` utility for conditional class names

### Import Patterns
```typescript
// shadcn/ui components
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Utilities
import { cn } from '@/lib/utils'
```

## Project Setup Notes

This project was specifically created to work with Node.js 22.18.0 and includes:
- React 19 with TypeScript
- Tailwind CSS v4 with the new @apply syntax
- shadcn/ui components with neutral color scheme
- Path alias configuration for clean imports