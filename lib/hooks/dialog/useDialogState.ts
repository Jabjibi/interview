"use client"

import { useState, useCallback } from "react"

export function useDialogState() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const openDialog = useCallback((id: string) => setSelectedId(id), [])
  const closeDialog = useCallback(() => setSelectedId(null), [])

  return { selectedId, openDialog, closeDialog }
}
