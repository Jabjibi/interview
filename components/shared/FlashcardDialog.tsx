import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

type Props = {
  open: boolean
  onClose: () => void
  title: string
  cardNumber: number
  total: number
  onNext: () => void
  onPrev: () => void
  canNext: boolean
  canPrev: boolean
  children: ReactNode
}

export function FlashcardDialog({
  open,
  onClose,
  title,
  cardNumber,
  total,
  onNext,
  onPrev,
  canNext,
  canPrev,
  children,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-zinc-50 border-0 shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <DialogTitle className="text-base font-semibold text-zinc-900">
            {title}
          </DialogTitle>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400 tabular-nums">
              {cardNumber} / {total}
            </span>
            <div className="flex gap-1.5">
              <Button
                size="icon"
                onClick={onPrev}
                disabled={!canPrev}
                className="size-8 rounded-full bg-zinc-900 hover:bg-zinc-700 disabled:opacity-30 text-white"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                size="icon"
                onClick={onNext}
                disabled={!canNext}
                className="size-8 rounded-full bg-zinc-900 hover:bg-zinc-700 disabled:opacity-30 text-white"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8">
          <div className="relative rounded-2xl bg-amber-50 border border-amber-100 shadow-md px-8 py-8 min-h-[320px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="size-4 rounded-full bg-orange-400 shadow-sm ring-2 ring-orange-300" />
            </div>
            <span className="block text-sm font-semibold text-orange-400 mb-3 tabular-nums">
              {String(cardNumber).padStart(2, "0")}
            </span>
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
