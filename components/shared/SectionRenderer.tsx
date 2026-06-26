import { parseInline } from "@/lib/content/parseInline"
import { FlowSteps } from "@/components/shared/FlowSteps"
import type { Block, SectionDoc } from "@/content/metier/registry"

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 mb-3 text-2xl font-bold text-zinc-900">
          {parseInline(block.text)}
        </h2>
      )
    case "h3":
      return (
        <h3 key={i} className="mt-8 mb-2 text-lg font-semibold text-zinc-900">
          {parseInline(block.text)}
        </h3>
      )
    case "p":
      return (
        <p key={i} className="my-3 leading-relaxed text-zinc-700">
          {parseInline(block.text)}
        </p>
      )
    case "blockquote":
      return (
        <blockquote
          key={i}
          className="my-4 border-l-4 border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-700 leading-relaxed"
        >
          {parseInline(block.text)}
        </blockquote>
      )
    case "ul":
      return (
        <ul key={i} className="my-3 list-disc pl-6 space-y-1.5 text-zinc-700">
          {block.items.map((it, j) => (
            <li key={j}>{parseInline(it)}</li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol key={i} className="my-3 list-decimal pl-6 space-y-1.5 text-zinc-700">
          {block.items.map((it, j) => (
            <li key={j}>{parseInline(it)}</li>
          ))}
        </ol>
      )
    case "checklist":
      return (
        <ul key={i} className="my-3 space-y-2 text-zinc-700">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-3 items-start">
              <span className="mt-1 inline-block size-4 rounded border border-zinc-300 shrink-0" />
              <span>{parseInline(it)}</span>
            </li>
          ))}
        </ul>
      )
    case "flow-steps":
      return <FlowSteps key={i} items={block.items} />
  }
}

export function SectionRenderer({ doc }: { doc: SectionDoc }) {
  return (
    <article>
      <h1 className="text-3xl font-bold text-zinc-900">{doc.title}</h1>
      <div className="mt-2">{doc.blocks.map(renderBlock)}</div>
    </article>
  )
}
