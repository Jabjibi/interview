"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { BlockRenderer } from "@/components/shared/BlockRenderer"
import type { FlashCard } from "@/content/metier/types"

type Props = {
  open: boolean
  onClose: () => void
  card: FlashCard
  cardNumber: number
  total: number
  color: string
  onNext: () => void
  onPrev: () => void
  canNext: boolean
  canPrev: boolean
}

export function FlashcardDialog({
  open,
  onClose,
  card,
  cardNumber,
  total,
  color,
  onNext,
  onPrev,
  canNext,
  canPrev,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md p-0 border-0 shadow-none bg-transparent ring-0 [&>button]:hidden">
        <DialogTitle className="sr-only">{card.title}</DialogTitle>

        <div className="bg-white rounded-3xl shadow-lg px-7 py-7 flex flex-col gap-6">

          {/* Progress segments */}
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                style={i < cardNumber ? { backgroundColor: color } : undefined}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i < cardNumber ? "" : "bg-zinc-100"
                }`}
              />
            ))}
          </div>

          {/* Question */}
          <div>
            <p className="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-2">
              Q.{String(cardNumber).padStart(2, "0")}
            </p>
            <h2 className="text-lg font-bold text-zinc-900 leading-snug">
              {card.title}
            </h2>
          </div>

          {/* Answer blocks */}
          <div className="max-h-64 overflow-y-auto">
            <BlockRenderer blocks={card.blocks} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={onPrev}
              disabled={!canPrev}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-600 disabled:opacity-30 transition-colors"
            >
              Back
            </button>
            <button
              onClick={canNext ? onNext : onClose}
              className="px-6 py-2.5 rounded-2xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
            >
              {canNext ? "Next" : "Done"}
            </button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}
