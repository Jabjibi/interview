import type { FolderSection, SectionContent } from "./metier/types"
import metierSectionsRaw from "./metier/sections.json"
import metierRegistryRaw from "./metier/registry.json"
import chanwanichSectionsRaw from "./chanwanich/sections.json"
import chanwanichRegistryRaw from "./chanwanich/registry.json"

export type CompanyContent = {
  sections: FolderSection[]
  registry: Record<string, SectionContent>
}

export const companyContent: Record<string, CompanyContent> = {
  metier: {
    sections: metierSectionsRaw as FolderSection[],
    registry: metierRegistryRaw as Record<string, SectionContent>,
  },
  chanwanich: {
    sections: chanwanichSectionsRaw as FolderSection[],
    registry: chanwanichRegistryRaw as Record<string, SectionContent>,
  },
}
