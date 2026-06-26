import context from "./context/content.json"
import intro from "./intro/content.json"
import assignment1 from "./assignment1/content.json"
import assignment2 from "./assignment2/content.json"
import technical from "./technical/content.json"
import behavioral from "./behavioral/content.json"
import questionsBack from "./questions-back/content.json"
import checklist from "./checklist/content.json"

export type FlowStep = {
  label: string
  sub?: string
  badge?: string
  detail?: string
  arrow?: string
}

export type Block =
  | { type: "h2" | "h3" | "p" | "blockquote"; text: string }
  | { type: "ul" | "ol" | "checklist"; items: string[] }
  | { type: "flow-steps"; items: FlowStep[] }

export type SectionDoc = {
  title: string
  blocks: Block[]
}

export const sectionContent: Record<string, SectionDoc> = {
  context: context as SectionDoc,
  intro: intro as SectionDoc,
  assignment1: assignment1 as SectionDoc,
  assignment2: assignment2 as SectionDoc,
  technical: technical as SectionDoc,
  behavioral: behavioral as SectionDoc,
  "questions-back": questionsBack as SectionDoc,
  checklist: checklist as SectionDoc,
}
