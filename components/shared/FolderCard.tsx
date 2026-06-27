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
    <div className="flex flex-col items-center gap-6 w-[200px]">
      <button
        onClick={() => onClick(section.id)}
        aria-label={`เปิดอ่าน ${section.title}`}
        className="block focus:outline-none"
      >
        <Folder color={hue.color} size={1.6} items={papers} />
      </button>

      <div className="text-center">
        <h2 className="text-sm font-semibold text-zinc-900">{section.title}</h2>
        <p className="mt-1 text-xs text-zinc-500">
          {section.tag} · {section.subtitle}
        </p>
      </div>
    </div>
  )
}
