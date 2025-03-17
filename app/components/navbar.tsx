import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Blog" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Work" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 mx-auto h-16 w-full p-4 transition-all duration-300",
        isScrolled
          ? "bg-background/5 border-border border-b border-dashed backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          ~\parth.zip 📦
        </Link>
        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
      {/* Mobile menu */}
      {isMobile && (
        <div
          className={cn(
            "bg-background/95 absolute top-16 left-0 flex w-full flex-col gap-4 overflow-hidden border-b border-dashed px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-[400px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 border-b-0 py-0 opacity-0",
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-primary py-2 text-sm font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
