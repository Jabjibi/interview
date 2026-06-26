type FlowStep = {
  label: string
  sub?: string
  badge?: string
  detail?: string
  arrow?: string
}

const BADGE: Record<string, string> = {
  UX: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Security: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  "Safety net": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  pending: "bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200",
  approved: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  rejected: "bg-red-50 text-red-600 ring-1 ring-red-200",
}

export function FlowSteps({ items }: { items: FlowStep[] }) {
  return (
    <div className="my-4">
      {items.map((step, i) => {
        const isLast = i === items.length - 1
        return (
          <div key={i}>
            <div className="flex gap-3.5">
              <div className="flex flex-col items-center shrink-0 w-3">
                <div
                  className={`size-2.5 rounded-full mt-[5px] shrink-0 ${
                    i === 0 ? "bg-zinc-500" : "bg-zinc-300"
                  }`}
                />
                {!isLast && (
                  <div className="w-px flex-1 bg-zinc-200 mt-1 min-h-[24px]" />
                )}
              </div>

              <div className={`flex-1 ${isLast ? "" : "pb-1"}`}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-zinc-900">
                    {step.label}
                  </span>
                  {step.badge && (
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                        BADGE[step.badge] ?? "bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200"
                      }`}
                    >
                      {step.badge}
                    </span>
                  )}
                </div>

                {step.sub && (
                  <code className="block text-xs text-zinc-400 font-mono mt-0.5">
                    {step.sub}
                  </code>
                )}

                {step.detail && (
                  <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                    {step.detail}
                  </p>
                )}

                {step.arrow && !isLast && (
                  <p className="text-xs text-zinc-400 mt-2 mb-1">
                    ↓ {step.arrow}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
