"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  CalendarRange, 
  CreditCard, 
  UserCog, 
  FileText, 
  Settings 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../dashboard/theme-toggle"

const Sidebar = () => {
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "All User",
      path: "/dashboard/all-user",
      icon: Users,
    },
    {
      name: "All Service",
      path: "/dashboard/services",
      icon: Briefcase,
    },
    {
      name: "Booking & Scheduling",
      path: "/dashboard/bookings",
      icon: CalendarRange,
    },
    {
      name: "Payment & Invoice",
      path: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      name: "Service Provider",
      path: "/dashboard/providers",
      icon: UserCog,
    },
    {
      name: "Blog",
      path: "/dashboard/blogs",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/dashboard/setting",
      icon: Settings,
    },
  ]

  return (
    <div className="w-64 min-h-screen bg-background border-r flex flex-col ">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-sky-500 flex items-center justify-center text-white font-bold">CS</div>
          <span className="font-bold text-lg">Cleaner Service</span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    pathname === route.path ? "bg-sky-500 text-white" : "hover:bg-muted",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  <span>{route.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Sidebar