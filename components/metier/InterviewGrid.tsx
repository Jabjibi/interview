"use client"

import { FolderCard } from "@/components/shared/FolderCard"
import { FlashcardDialog } from "@/components/shared/FlashcardDialog"
import { useDialogState } from "@/lib/hooks/dialog/useDialogState"
import { useFlashcard } from "@/lib/hooks/flashcard/useFlashcard"
import { getFolderHue } from "@/lib/hooks/folder/folderColors"
import type { FolderSection, SectionContent } from "@/content/metier/types"

type Props = {
  sections: FolderSection[]
  registry: Record<string, SectionContent>
}

export function InterviewGrid({ sections, registry }: Props) {
  const { selectedId, openDialog, closeDialog } = useDialogState()

  const activeContent = selectedId ? registry[selectedId] : null
  const cards = activeContent?.cards ?? []
  const activeIndex = selectedId ? sections.findIndex((s) => s.id === selectedId) : 0
  const activeColor = getFolderHue(activeIndex).color

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

      {card && (
        <FlashcardDialog
          open={!!selectedId}
          onClose={closeDialog}
          card={card}
          cardNumber={index + 1}
          total={total}
          color={activeColor}
          onNext={next}
          onPrev={prev}
          canNext={canNext}
          canPrev={canPrev}
        />
      )}
    </>
  )
}
