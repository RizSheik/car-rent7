"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Car,
  BarChart2,
  Wallet,
  MessageSquare,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    title: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: Home,
      },
      {
        title: "Car Rent",
        href: "/admin/car-rent",
        icon: Car,
      },
      {
        title: "Insight",
        href: "/admin/insight",
        icon: BarChart2,
      },
      {
        title: "Reimburse",
        href: "/admin/reimburse",
        icon: Wallet,
      },
      {
        title: "Inbox",
        href: "/admin/inbox",
        icon: MessageSquare,
      },
      {
        title: "Calendar",
        href: "/admin/calendar",
        icon: Calendar,
      },
    ],
  },
  {
    title: "PREFERENCES",
    items: [
      {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
      {
        title: "Help & Center",
        href: "/admin/help",
        icon: HelpCircle,
      },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-64 flex-col border-r bg-card px-4 py-6 shadow-lg">
      {/* Logo Section */}
      <div className="mb-8 flex items-center justify-center">
        <Link href="/" className="text-3xl font-extrabold text-primary">
          MORENT
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-6">
        {sidebarItems.map((section, i) => (
          <div key={i} className="space-y-4">
            {/* Section Title */}
            <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {section.title}
            </h3>
            {/* Section Items */}
            {section.items.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full flex items-center gap-3 rounded-md px-4 py-2 text-sm",
                  pathname === item.href && "bg-secondary text-primary-foreground"
                )}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        ))}
      </div>

      {/* Log Out Button */}
      <Button
        variant="ghost"
        className="mt-6 w-full justify-start px-4 py-2 text-sm text-red-600 hover:bg-red-100"
        onClick={() => console.log("Log out functionality triggered!")}
      >
        <LogOut className="h-5 w-5" />
        Log Out
      </Button>
    </nav>
  );
}
