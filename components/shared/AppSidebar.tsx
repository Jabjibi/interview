"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Sidebar, SidebarBody, useSidebar } from "@/components/ui/sidebar"
import { useSidebarNav } from "@/lib/hooks/sidebar/useSidebarNav"
import { useSidebarState } from "@/lib/hooks/sidebar/useSidebarState"
import { mobileDrawerVariants } from "@/lib/motion/variants"
import { cn } from "@/lib/utils"
import type { Company } from "@/content/metier/types"

type Props = {
  companies: Company[]
}

function CompanyItem({ company, isActive }: { company: Company; isActive: boolean }) {
  const { open } = useSidebar()

  return (
    <Link
      href={`/${company.id}`}
      className={cn(
        "flex items-center gap-2 rounded-xl px-2 py-2 transition-colors duration-150",
        open && isActive ? "bg-zinc-900" : open ? "hover:bg-zinc-100" : ""
      )}
    >
      <div
        className={cn(
          "shrink-0 size-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors",
          isActive
            ? open ? "bg-white/10 text-white" : "bg-zinc-900 text-white"
            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
        )}
      >
        {company.name.slice(0, 1).toUpperCase()}
      </div>
      <motion.span
        animate={{ display: open ? "inline-block" : "none", opacity: open ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className={cn(
          "text-sm font-semibold whitespace-pre truncate",
          isActive ? "text-white" : "text-zinc-900"
        )}
      >
        {company.name} {company.shortRole}
      </motion.span>
    </Link>
  )
}

function NavList({ companies, activeId, onItemClick }: {
  companies: Company[]
  activeId: string
  onItemClick?: () => void
}) {
  return (
    <nav className="space-y-1">
      {companies.map((company) => (
        <div key={company.id} onClick={onItemClick}>
          <CompanyItem
            company={company}
            isActive={activeId === company.id}
          />
        </div>
      ))}
    </nav>
  )
}

function SidebarInner({ companies }: { companies: Company[] }) {
  const { open } = useSidebar()
  const { activeId } = useSidebarNav()

  return (
    <SidebarBody className="h-screen sticky top-0">
      <div className="flex flex-col flex-1 overflow-y-auto py-4">
        <motion.p
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 px-2 mb-4 whitespace-nowrap"
        >
          Interview Kub
        </motion.p>
        <NavList companies={companies} activeId={activeId} />
      </div>
    </SidebarBody>
  )
}

export function AppSidebar({ companies }: Props) {
  const { activeId } = useSidebarNav()
  const { mobileOpen, openMobile, closeMobile } = useSidebarState()

  return (
    <>
      <Sidebar animate>
        <SidebarInner companies={companies} />
      </Sidebar>

      {/* Mobile FAB */}
      <button
        onClick={openMobile}
        aria-label="Open menu"
        className="lg:hidden fixed bottom-6 left-6 z-50 size-12 rounded-full bg-zinc-900 text-white shadow-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
      >
        <Menu className="size-5" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            {...mobileDrawerVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-[100] flex"
          >
            <div className="w-64 h-full bg-white flex flex-col shadow-2xl">
              <div className="flex items-center justify-between px-5 py-5 border-b border-zinc-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  Interview Kub
                </p>
                <button onClick={closeMobile} className="size-7 flex items-center justify-center rounded-lg hover:bg-zinc-100 text-zinc-400">
                  <X className="size-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <NavList companies={companies} activeId={activeId} onItemClick={closeMobile} />
              </div>
            </div>
            <div className="flex-1 bg-black/30 backdrop-blur-sm" onClick={closeMobile} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
