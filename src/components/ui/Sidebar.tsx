"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [essaysOpen, setEssaysOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden w-full flex items-center justify-between p-4 border-b border-border/40 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          haider.
        </Link>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 -mr-2 hover:bg-secondary/80 rounded-full transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 border-r border-border/50 bg-background/95 backdrop-blur-xl p-6 h-screen overflow-y-auto transform transition-all duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col md:h-screen md:sticky md:top-0
          ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="hidden md:block">
            <span className="text-xl font-bold tracking-tight text-foreground hover:text-[hsl(var(--link))] transition-colors">
              haider.
            </span>
          </Link>
          <span className="text-xl font-bold tracking-tight text-foreground md:hidden">menu.</span>
          <button
            className="md:hidden p-2 -mr-2 hover:bg-secondary/80 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>

        {/* <div className="mb-8 pl-1">
          <ThemeToggle />
        </div> */}

        <nav className="space-y-6 flex-1">
          {/* About Me Link */}
          <div className="space-y-1">
            <Link
              href="/"
              className={`flex items-center py-2 text-sm font-medium transition-all duration-200 ${pathname === '/'
                  ? 'text-foreground underline underline-offset-4 decoration-2'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              about me
            </Link>
          </div>

          {/* Essays Section */}
          <div>
            <button
              onClick={() => setEssaysOpen(!essaysOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-semibold text-foreground/90 hover:text-foreground transition-colors group"
            >
              <span>essays</span>
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${essaysOpen ? 'rotate-90' : ''
                  }`}
              />
            </button>

            <div className={`grid transition-all duration-200 ease-in-out ${essaysOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'
              }`}>
              <ul className="overflow-hidden space-y-1 pl-2">
                <li>
                  <Link
                    href="/essays"
                    className={`flex items-center py-1.5 text-sm transition-all duration-200
                      ${pathname === '/essays'
                        ? 'text-foreground underline underline-offset-4 decoration-2 font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    all essays
                  </Link>
                </li>
                <li>
                  <Link
                    href="/essays/reflections"
                    className={`flex items-center py-1.5 text-sm transition-all duration-200 break-words text-wrap
                      ${pathname === '/essays/reflections'
                        ? 'text-foreground underline underline-offset-4 decoration-2 font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    reflections on selling my company
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Ventures Section */}
          <div>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-semibold text-foreground/90 hover:text-foreground transition-colors group"
            >
              <span>ventures</span>
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${projectsOpen ? 'rotate-90' : ''
                  }`}
              />
            </button>

            <div className={`grid transition-all duration-200 ease-in-out ${projectsOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'
              }`}>
              <ul className="overflow-hidden space-y-1 pl-2">
                {[
                  // { path: '/projects/homeforbuilders', label: 'home for builders' },
                  // { path: '/projects/komunity', label: 'komunity' },
                  { path: '/projects/aeomi', label: 'aeomi' },
                  { path: '/projects/mia', label: 'mia' },
                  { path: '/projects/lixta-network', label: 'lixta network' },
                  { path: '/projects/lixta-labs', label: 'lixta labs' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center py-1.5 text-sm transition-all duration-200
                        ${pathname === item.path
                          ? 'text-foreground underline underline-offset-4 decoration-2 font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links (Commented out like original) */}
          {/* <div className="pt-4 space-y-2 border-t border-border/50 mt-6">
            <a href="https://youtube.com/@haiderkhursheed" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-1.5 text-sm transition-all duration-200 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50">
              youtube channel ↗
            </a>
            <a href="https://linkedin.com/in/haiderkhursheedk" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-1.5 text-sm transition-all duration-200 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50">
              linkedin ↗
            </a>
          </div> */}
        </nav>
      </aside>
    </>
  );
}
