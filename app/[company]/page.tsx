import { notFound } from "next/navigation"
import { InterviewGrid } from "@/components/metier/InterviewGrid"
import { companyContent } from "@/content/index"
import companies from "@/content/companies.json"

type Props = {
  params: Promise<{ company: string }>
}

export function generateStaticParams() {
  return companies.map((c) => ({ company: c.id }))
}

export default async function CompanyPage({ params }: Props) {
  const { company } = await params
  const content = companyContent[company]
  if (!content) notFound()

  return (
    <div className="px-8 py-12">
      <InterviewGrid sections={content.sections} registry={content.registry} />
    </div>
  )
}
