import type { ReactNode } from "react"

const PATTERN = /(\*\*[^*]+\*\*|_[^_]+_|`[^`]+`)/g

export function parseInline(text: string): ReactNode[] {
  const parts = text.split(PATTERN).filter((p) => p !== "")
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded bg-zinc-100 text-zinc-800 text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <span key={i}>{part}</span>
  })
}
