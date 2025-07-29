import { ReactNode } from "react"
import { ThemeToggle } from "./ThemeToggle"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">ADmyBRAND Insights</h1>
        <ThemeToggle />
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
