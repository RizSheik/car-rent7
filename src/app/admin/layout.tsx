import { SidebarNav } from "@/components/admin/sidebar-nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

