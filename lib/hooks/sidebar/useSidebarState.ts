"use client"

import { useState, useCallback } from "react"

export function useSidebarState() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = useCallback(() => setCollapsed((p) => !p), [])
  const openMobile = useCallback(() => setMobileOpen(true), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return { collapsed, toggle, mobileOpen, openMobile, closeMobile }
}
