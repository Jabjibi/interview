import type { FolderSection, SectionContent } from "./metier/types"
import { metierSections } from "./metier/sections"
import { sectionRegistry as metierRegistry } from "./metier/registry"

export type CompanyContent = {
  sections: FolderSection[]
  registry: Record<string, SectionContent>
}

export const companyContent: Record<string, CompanyContent> = {
  metier: { sections: metierSections, registry: metierRegistry },
}
