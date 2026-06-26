import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-900">
          ไม่พบหน้าที่คุณค้นหา
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          หน้านี้อาจถูกย้าย ลบ หรือ URL อาจพิมพ์ผิด
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
        >
          <ChevronLeft className="size-3" />
          กลับหน้ารวม
        </Link>
      </div>
    </div>
  )
}
