"use client"

import { useState, useCallback, useEffect } from "react"

export function useFlashcard(total: number) {
  const [index, setIndex] = useState(0)

  useEffect(() => { setIndex(0) }, [total])

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  return {
    index,
    total,
    next,
    prev,
    canNext: index < total - 1,
    canPrev: index > 0,
  }
}
