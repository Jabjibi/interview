"use client"

import { usePathname } from "next/navigation"

export function useSidebarNav() {
  const pathname = usePathname()
  const activeId = pathname.split("/")[1] ?? ""
  return { activeId }
}
