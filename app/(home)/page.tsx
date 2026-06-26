import { FolderCard } from "@/components/shared/FolderCard"
import { metierSections } from "@/content/metier/sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white px-8 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">
            Interview Prep
          </p>
          <h1 className="text-xl font-semibold text-zinc-900">
            Software Developer @ Metier (Thailand)
          </h1>
          <p className="mt-1 text-sm text-zinc-400">Tanapon Yurawan · 2026</p>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-5xl mx-auto px-8 py-14">
        <div className="flex flex-wrap gap-8">
          {metierSections.map((section, index) => (
            <FolderCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </main>
    </div>
  )
}
