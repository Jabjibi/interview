import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { SectionRenderer } from "@/components/shared/SectionRenderer"
import { metierSections } from "@/content/metier/sections"
import { sectionContent } from "@/content/metier/registry"

export function generateStaticParams() {
  return metierSections.map((s) => ({ id: s.id }))
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function SectionPage({ params }: Props) {
  const { id } = await params
  const section = metierSections.find((s) => s.id === id)
  const doc = sectionContent[id]
  if (!section || !doc) notFound()

  return (
    <div className="min-h-screen bg-white">
      <header className="px-8 py-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ChevronLeft className="size-3" />
            กลับหน้ารวม
          </Link>
          <h1 className="mt-3 text-xl font-semibold text-zinc-900">
            {section.title}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            {section.tag} · {section.subtitle}
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-10">
        <SectionRenderer doc={doc} />
      </main>
    </div>
  )
}
