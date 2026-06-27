"use client"

import { FolderCard } from "@/components/shared/FolderCard"
import { FlashcardDialog } from "@/components/shared/FlashcardDialog"
import { useDialogState } from "@/lib/hooks/dialog/useDialogState"
import { useFlashcard } from "@/lib/hooks/flashcard/useFlashcard"
import type { FolderSection, SectionContent } from "@/content/metier/types"

type Props = {
  sections: FolderSection[]
  registry: Record<string, SectionContent>
}

export function InterviewGrid({ sections, registry }: Props) {
  const { selectedId, openDialog, closeDialog } = useDialogState()

  const activeContent = selectedId ? registry[selectedId] : null
  const cards = activeContent?.cards ?? []
  const activeSection = sections.find((s) => s.id === selectedId)

  const { index, total, next, prev, canNext, canPrev } = useFlashcard(cards.length)

  const card = cards[index]

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {sections.map((section, i) => (
          <FolderCard
            key={section.id}
            section={section}
            index={i}
            onClick={openDialog}
          />
        ))}
      </div>

      {activeSection && card && (
        <FlashcardDialog
          open={!!selectedId}
          onClose={closeDialog}
          title={activeSection.title}
          cardNumber={index + 1}
          total={total}
          onNext={next}
          onPrev={prev}
          canNext={canNext}
          canPrev={canPrev}
        >
          <h3 className="text-lg font-bold text-zinc-900 mb-3">{card.title}</h3>
        </FlashcardDialog>
      )}
    </>
  )
}
