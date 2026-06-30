export type Company = {
  id: string
  name: string
  shortRole: string
}

export type FolderSection = {
  id: string
  title: string
  tag: string
  subtitle: string
  previewLines: string[]
}

export type FlashCard = {
  title: string
  blocks: Block[]
}

export type SectionContent = {
  cards: FlashCard[]
}

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "flow-steps"; items: FlowStep[] }

export type FlowStep = {
  label: string
  sub?: string
  badge?: string
  detail?: string
  arrow?: string
}
