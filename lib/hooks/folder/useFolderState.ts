"use client"

import { useState, useCallback } from "react"
import type { MouseEvent } from "react"

const MAX_PAPERS = 3

type Offset = { x: number; y: number }

const zeroOffsets = (): Offset[] =>
  Array.from({ length: MAX_PAPERS }, () => ({ x: 0, y: 0 }))

export function useFolderState() {
  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState<Offset[]>(zeroOffsets)

  const toggle = useCallback(() => {
    setOpen((prev) => {
      if (prev) setPaperOffsets(zeroOffsets())
      return !prev
    })
  }, [])

  const handlePaperMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const offsetX = (e.clientX - centerX) * 0.15
      const offsetY = (e.clientY - centerY) * 0.15
      setPaperOffsets((prev) => {
        const next = [...prev]
        next[index] = { x: offsetX, y: offsetY }
        return next
      })
    },
    []
  )

  const handlePaperMouseLeave = useCallback((index: number) => {
    setPaperOffsets((prev) => {
      const next = [...prev]
      next[index] = { x: 0, y: 0 }
      return next
    })
  }, [])

  return {
    open,
    paperOffsets,
    toggle,
    handlePaperMouseMove,
    handlePaperMouseLeave,
    MAX_PAPERS,
  }
}
