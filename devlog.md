# Devlog — Interview Prep App

## 2026-06-27

### Architecture & Setup

- วาง project structure ใหม่ทั้งหมด แยก concern ชัดเจน
  - `content/` — data เท่านั้น ไม่มี logic
  - `components/ui/` — shadcn primitives
  - `components/shared/` — reusable UI ทั่วไป
  - `components/metier/` — company-specific components
  - `lib/hooks/` — state ทั้งหมดแยก hook ต่อ feature

- เพิ่ม CLAUDE.md convention: agents/skills folders, ห้าม logic ใน UI files

### Content System

- ออกแบบ type system สำหรับ flashcard content
  - `FolderSection` — metadata ของแต่ละ folder
  - `FlashCard` — คำถาม + blocks[]
  - `Block` — union type: `p | h2 | ul | flow-steps | ...`
  - `FlowStep` — แต่ละขั้นใน step diagram

- ตัดสินใจใช้ `.json` แทน `.ts` สำหรับ content เพราะ
  - content ล้วนๆ ไม่มี logic
  - แก้ง่าย ไม่ต้องรู้ TypeScript
  - `resolveJsonModule: true` ใน tsconfig รองรับอยู่แล้ว
  - cast type ใน `content/index.ts` จุดเดียว

- ย้าย `Company` type เข้า `content/metier/types.ts` เพื่อให้ไฟล์ `.json` ทุกไฟล์ import type จากที่เดียว

### Sidebar

- สร้าง Aceternity-style sidebar ด้วย Framer Motion (`motion/react`)
  - `SidebarProvider` + `SidebarContext` — open/setOpen/animate
  - `DesktopSidebar` — hover expand 64px → 224px พร้อม animation
  - `MobileSidebar` — returns null, ใช้ FAB + drawer แทน
  - แก้ปัญหา Framer Motion override Tailwind `hidden` class โดย wrap ด้วย `div.hidden.lg:block`

- `AppSidebar` — multi-company navigation
  - Desktop: hover expand/collapse
  - Mobile: FAB (bottom-left) + slide-in drawer พร้อม backdrop
  - Active state highlight ตาม pathname

- แก้ปัญหา icon clip เมื่อ sidebar collapse โดยลด padding จาก `px-4` → `px-2`
- แก้ header layout shift โดยเปลี่ยนจาก `AnimatePresence` → `motion.p` animate opacity เท่านั้น

### Folder UI

- `Folder.tsx` — interactive folder component พร้อม hover animation (paper fly out)
- `FolderCard.tsx` — wrapper แสดง folder + label
- แก้ปัญหา hover animation หาย: Folder มี internal `open` state ที่ toggle เมื่อ click ทำให้ `group-hover:` หาย
  - Fix: ถ้ามี `onClick` prop จากภายนอก ไม่ toggle internal state

### Flashcard Dialog

- `FlashcardDialog.tsx` — UI ตาม design card-based
  - Progress bar segments (active = สีตาม folder, inactive = gray)
  - Q.01 label + bold question
  - Answer blocks rendered ด้วย `BlockRenderer`
  - Back / Next / Done navigation

- `BlockRenderer.tsx` — render ทุก block type
  - `p`, `h2`, `h3`, `blockquote` — text
  - `ul`, `ol`, `checklist` — lists
  - `flow-steps` — step diagram พร้อม badge/label/detail

- folder color ส่งผ่านจาก `getFolderHue(index)` ใน `InterviewGrid` → `FlashcardDialog` เพื่อให้ progress bar สีตรงกับ folder

---

## Content — กลุ่มที่ 1: Technical Assignment

เพิ่ม 3 cards แรก สำหรับ Metier interview:

1. **ทำไมถึงเลือก Next.js + Supabase?**
   — monorepo frontend+API, deploy Vercel, Supabase ครอบ database/storage/RLS

2. **แนวทาง validate comment ภาษาไทย?**
   — Defense in Depth 3 ชั้น: Frontend → API Route → Database Constraint

3. **ระบบ admin auth ทำงานยังไง?**
   — bcrypt hash, custom session table, httpOnly cookie, middleware guard /admin/*
