import type { FolderSection, SectionContent } from "./metier/types"
import metierSectionsRaw from "./metier/sections.json"
import metierRegistryRaw from "./metier/registry.json"

export type CompanyContent = {
  sections: FolderSection[]
  registry: Record<string, SectionContent>
}

export const companyContent: Record<string, CompanyContent> = {
  metier: {
    sections: metierSectionsRaw as FolderSection[],
    registry: metierRegistryRaw as Record<string, SectionContent>,
  },
}
