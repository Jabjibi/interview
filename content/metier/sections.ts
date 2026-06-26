export type FolderSection = {
  id: string
  title: string
  subtitle: string
  previewLines: string[]
  tag: string
  date: string
}

export const metierSections: FolderSection[] = [
  {
    id: "context",
    title: "บริบทก่อนสัมภาษณ์",
    subtitle: "ข้อมูลบริษัท Metier",
    tag: "ต้องรู้ก่อน",
    date: "Metier · Digital Agency 10+ ปี",
    previewLines: [
      "Digital Marketing & Tech Agency 10+ ปี",
      "งาน: Web / CRM / Automation / AI",
      "จุดแข็ง: full-stack + n8n + API integrations",
    ],
  },
  {
    id: "intro",
    title: "แนะนำตัว",
    subtitle: "3 คำถาม",
    tag: "เริ่มต้น",
    date: "Q1 – Q3",
    previewLines: [
      "Q1: แนะนำตัวสั้นๆ",
      "Q2: ทำไมถึงสนใจ Metier",
      "Q3: จุดแข็ง / จุดอ่อน",
    ],
  },
  {
    id: "assignment1",
    title: "Assignment 1",
    subtitle: "Process & System Optimization · 7 คำถาม",
    tag: "สำคัญมาก",
    date: "Q4 – Q10 · trade-off required",
    previewLines: [
      "Starter Kit → Design Token → Monorepo",
      "Tool: Turborepo + pnpm workspaces",
      "ต้องตอบ trade-off ได้ทุกข้อ",
    ],
  },
  {
    id: "assignment2",
    title: "Assignment 2",
    subtitle: "ระบบ Blog · 10 คำถาม",
    tag: "เจาะลึก",
    date: "Q11 – Q20 · systemblog",
    previewLines: [
      "Next.js 16 + Supabase + Tailwind v4",
      "validate 3 ชั้น: frontend / API / DB",
      "Auth: httpOnly cookie + SameSite",
    ],
  },
  {
    id: "technical",
    title: "Technical พื้นฐาน",
    subtitle: "7 หัวข้อ",
    tag: "ทบทวน",
    date: "REST · SQL · Git · Docker · Security",
    previewLines: [
      "REST API design, SQL index, N+1",
      "Git: rebase vs merge, branch strategy",
      "XSS / SQL injection → ใช้ pentest เป็นแต้มต่อ",
    ],
  },
  {
    id: "behavioral",
    title: "Behavioral (STAR)",
    subtitle: "4 คำถาม",
    tag: "เตรียมเรื่อง",
    date: "Q21 – Q24 · STAR format",
    previewLines: [
      "Q: requirement ไม่ชัดเจน → จัดการยังไง",
      "Q: งานที่ภูมิใจสุด → CS-TEH platform",
      "Q: ทำงานเป็นทีม / เรียนรู้เร็ว",
    ],
  },
  {
    id: "questions-back",
    title: "ถามกลับ",
    subtitle: "6 คำถามแนะนำ",
    tag: "ปิดท้าย",
    date: "อย่าถามเรื่องเงินเป็นข้อแรก",
    previewLines: [
      "Stack / workflow ที่ทีมใช้อยู่?",
      "โปรเจกต์เริ่มจาก template หรือใหม่ทุกครั้ง?",
      "3–6 เดือนแรกคาดหวังอะไร?",
    ],
  },
  {
    id: "checklist",
    title: "เช็กลิสต์",
    subtitle: "6 รายการก่อนวันสัมภาษณ์",
    tag: "ก่อนไป",
    date: "ทำทุกข้อก่อนวันสัมภาษณ์",
    previewLines: [
      "เปิด demo Vercel ลองกดทุก flow",
      "เตรียม admin login + comment pending",
      "ทบทวนโค้ด regex validate ภาษาไทย",
    ],
  },
]
