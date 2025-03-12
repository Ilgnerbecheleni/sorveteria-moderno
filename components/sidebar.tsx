"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, IceCream, LayoutDashboard, Menu, Package, Receipt, ShoppingCart, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Vender",
    icon: ShoppingCart,
    href: "/vender",
    color: "text-violet-500",
  },
  {
    label: "Produtos",
    icon: Package,
    href: "/produtos",
    color: "text-pink-500",
  },
  {
    label: "Vendas",
    icon: Receipt,
    href: "/vendas",
    color: "text-orange-500",
  },
  {
    label: "Relatórios",
    icon: BarChart3,
    href: "/relatorios",
    color: "text-emerald-500",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden block absolute left-4 top-4 z-50">
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <div className="h-full flex flex-col">
            <div className="px-3 py-4 flex items-center border-b">
              <IceCream className="h-8 w-8 text-pink-500 mr-2" />
              <h1 className="text-xl font-bold">Sorveteria</h1>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid gap-1 px-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                      pathname === route.href ? "bg-muted text-primary" : "text-muted-foreground",
                    )}
                  >
                    <route.icon className={cn("h-5 w-5", route.color)} />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex h-full w-64 flex-col border-r bg-white">
        <div className="px-3 py-4 flex items-center border-b">
          <IceCream className="h-8 w-8 text-pink-500 mr-2" />
          <h1 className="text-xl font-bold">Sorveteria</h1>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                  pathname === route.href ? "bg-muted text-primary" : "text-muted-foreground",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.color)} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

