export const folderPalette = [
  { name: "yellow", color: "#FACC15", tint: "#FEF3C7" },
  { name: "orange", color: "#FB923C", tint: "#FFEDD5" },
  { name: "blue", color: "#38BDF8", tint: "#E0F2FE" },
  { name: "purple", color: "#A78BFA", tint: "#EDE9FE" },
] as const

export type FolderHue = (typeof folderPalette)[number]

export function getFolderHue(index: number): FolderHue {
  return folderPalette[index % folderPalette.length]
}
