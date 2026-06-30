import Folder from "@/components/shared/Folder"
import { getFolderHue } from "@/lib/hooks/folder/folderColors"
import type { FolderSection } from "@/content/metier/types"

type Props = {
  section: FolderSection
  index: number
  onClick: (id: string) => void
}

export function FolderCard({ section, index, onClick }: Props) {
  const hue = getFolderHue(index)

  const papers = section.previewLines.slice(0, 3).map((line, i) => (
    <div
      key={i}
      className="flex h-full w-full items-center justify-center px-2 text-[7px] leading-tight text-zinc-700 text-center"
    >
      {line}
    </div>
  ))

  return (
    <div className="flex flex-col items-center gap-2 w-[120px]">
      <Folder
        color={hue.color}
        size={1}
        items={papers}
        onClick={() => onClick(section.id)}
      />

      <p className="text-[11px] font-medium text-zinc-700 text-center leading-tight">{section.title}</p>
    </div>
  )
}
