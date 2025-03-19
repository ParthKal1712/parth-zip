import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { setThemeInCookie } from "@/lib/theme-cookies";

export default function ThemeToggle({ className }: { className?: string }) {
  function toggleTheme() {
    if (
      document.documentElement.classList.contains("dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      setThemeInCookie({
        data: {
          theme: "light",
        },
      });
    } else {
      document.documentElement.classList.add("dark");
      setThemeInCookie({
        data: {
          theme: "dark",
        },
      });
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={toggleTheme}
      className={className}
    >
      <SunIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
