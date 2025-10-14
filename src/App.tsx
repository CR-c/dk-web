import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">DK Web</h1>
          <p className="text-muted-foreground mt-2">欢迎使用 React + TypeScript + Tailwind CSS + shadcn/ui</p>
        </header>

        <main className="space-y-6">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>示例计数器</CardTitle>
              <CardDescription>
                点击按钮来增加计数器的值
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">{count}</div>
              <Button
                onClick={() => setCount((count) => count + 1)}
                variant="default"
              >
                点击计数
              </Button>
            </CardContent>
          </Card>

          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>功能特性</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ React 19 + TypeScript</li>
                <li>✅ Vite 构建工具</li>
                <li>✅ Tailwind CSS 样式</li>
                <li>✅ shadcn/ui 组件库</li>
                <li>✅ pnpm 包管理</li>
                <li>✅ 热重载开发环境</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="outline" onClick={() => setCount(0)}>
              重置计数器
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
