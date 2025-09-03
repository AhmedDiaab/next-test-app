"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

// shadcn/ui components — ensure you've generated these with `npx shadcn@latest add button sheet input`
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { paths } from "@/shared/paths";
import { ToggleTheme } from "./toggle-theme";
import { combineClasses } from "@/utils";

const navigation = [
  { href: paths.home.getHref(), label: paths.home.getName() },
  { href: paths.blogs.root.getHref(), label: paths.blogs.root.getName() },
] as const;

function DesktopNavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center gap-6">
      {navigation.map(({ href, label }) => {
        const active =
          href === "/" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={combineClasses(
              "text-sm text-muted-foreground hover:text-foreground transition-colors",
              active && "text-foreground font-medium"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

function DesktopActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <div className="relative">
        <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
        <Input placeholder="Search…" className="pl-8 w-56" />
      </div>
      <ToggleTheme />
    </div>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-72 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between py-1">
              <span className="text-lg font-semibold">Menu</span>
            </div>
            <div className="mt-4 grid gap-1">
              {navigation.map(({ href, label }) => {
                const active =
                  href === "/" ? pathname === href : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={combineClasses(
                      "block rounded px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      active && "bg-accent text-accent-foreground"
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end mb-4 mr-2">
            <ToggleTheme />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold tracking-tight">
            Test App
          </Link>
        </div>

        <DesktopNavLinks />
        <DesktopActions />
        <MobileMenu />
      </div>
    </nav>
  );
}

/**
 * Usage (Next.js App Router):
 * 1) Ensure you've set up Tailwind + shadcn/ui + next-themes.
 * 2) Place this file at `components/navbar.tsx`.
 * 3) In `app/layout.tsx`:
 *    import Navbar from "@/components/navbar";
 *    export default function RootLayout({ children }: { children: React.ReactNode }) {
 *      return (
 *        <html lang="en" suppressHydrationWarning>
 *          <body>
 *            <Navbar />
 *            {children}
 *          </body>
 *        </html>
 *      );
 *    }
 * 4) Wrap the root with a ThemeProvider (next-themes) somewhere above <Navbar />:
 *    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *      <Navbar />
 *      {children}
 *    </ThemeProvider>
 */
