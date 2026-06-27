import type { Metadata } from "next"
import "./globals.css"
import { AppSidebar } from "@/components/shared/AppSidebar"
import { companies } from "@/content/companies"

export const metadata: Metadata = {
  title: "Interview Prep",
  description: "Interview preparation notes",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="h-full flex">
        <AppSidebar companies={companies} />
        <main className="flex-1 overflow-auto bg-zinc-50">
          {children}
        </main>
      </body>
    </html>
  )
}
