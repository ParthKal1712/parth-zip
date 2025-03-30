import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { setThemeInCookie } from "@/lib/theme-cookies";
import { useTheme } from "./theme-provider";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setThemeInCookie({
        data: {
          theme: "dark",
        },
      });
    } else {
      setTheme("light");
      setThemeInCookie({
        data: {
          theme: "light",
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
