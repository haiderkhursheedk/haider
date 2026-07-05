"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-6" />;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-secondary transition-colors focus:outline-none ring-1 ring-border"
        role="switch"
        aria-checked={isDark}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            isDark ? "translate-x-6 bg-foreground" : "translate-x-1 bg-white"
          } inline-flex h-4 w-4 transform items-center justify-center rounded-full transition-transform`}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-background" />
          ) : (
            <div className="h-3 w-3 rounded-full bg-foreground" /> 
            // Using a simple dot or nothing for the light dot to match the image, or a Sun icon
          )}
        </span>
        {/* The secondary icon showing on the opposite side */}
        <span className={`absolute ${isDark ? 'left-1' : 'right-1'} text-muted-foreground`}>
           {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </span>
      </button>
    </div>
  );
}
