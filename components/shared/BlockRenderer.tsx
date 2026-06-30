import type { Block, FlowStep } from "@/content/metier/types"

function FlowStepItem({ step, isLast }: { step: FlowStep; isLast: boolean }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="size-2 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-zinc-200 mt-1" />}
      </div>
      <div className="pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-zinc-900">{step.label}</span>
          {step.badge && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-500">
              {step.badge}
            </span>
          )}
          {step.sub && (
            <span className="text-xs text-zinc-500">{step.sub}</span>
          )}
        </div>
        {step.detail && (
          <p className="mt-0.5 text-sm text-zinc-600 leading-relaxed">{step.detail}</p>
        )}
      </div>
    </div>
  )
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i} className="text-base font-bold text-zinc-900">{block.text}</h2>
          case "h3":
            return <h3 key={i} className="text-sm font-semibold text-zinc-800">{block.text}</h3>
          case "p":
            return <p key={i} className="text-sm text-zinc-700 leading-relaxed">{block.text}</p>
          case "blockquote":
            return (
              <blockquote key={i} className="border-l-2 border-zinc-300 pl-3 text-sm text-zinc-600 italic">
                {block.text}
              </blockquote>
            )
          case "ul":
            return (
              <ul key={i} className="space-y-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-700">
                    <span className="mt-1.5 size-1.5 rounded-full bg-zinc-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i} className="space-y-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-700">
                    <span className="text-zinc-400 tabular-nums shrink-0">{j + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            )
          case "checklist":
            return (
              <ul key={i} className="space-y-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-700">
                    <span className="text-zinc-400 shrink-0">☐</span>
                    {item}
                  </li>
                ))}
              </ul>
            )
          case "flow-steps":
            return (
              <div key={i} className="pt-1">
                {block.items.map((step, j) => (
                  <FlowStepItem
                    key={j}
                    step={step}
                    isLast={j === block.items.length - 1}
                  />
                ))}
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
