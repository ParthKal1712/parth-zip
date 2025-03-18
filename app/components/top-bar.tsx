import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useDialog } from "@/hooks/use-dialog";
import Container from "@/components/container";

export const TOPBAR_MARGIN = "mt-16";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const { setDialogOpen, DialogComponent } = useDialog({
    header: {
      title: <p>In Progress</p>,
    },
    content: <p>This content is In-Progress.</p>,
    width: "md",
  });

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
    <>
      <header className="fixed top-0 z-50 h-16 w-full transition-all duration-300">
        <Container
          disableVerticalPadding
          className={cn(
            "border-border flex h-full items-center justify-between border-b border-dashed",
            isScrolled ? "bg-background/5 backdrop-blur-md" : "bg-transparent",
          )}
        >
          <Link to="/" className="text-xl font-bold">
            ~\parth.zip 🏹
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
                  <Button
                    variant="link"
                    key={link.label}
                    onClick={() => setDialogOpen(true)}
                  >
                    {link.label}
                  </Button>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          )}
        </Container>
        {/* Mobile menu */}
        {isMobile && (
          <div
            className={cn(
              "absolute top-16 left-0 z-50 flex w-full flex-col gap-4 overflow-hidden border-b border-dashed px-6 py-4 transition-all duration-300 ease-in-out",
              "bg-background/5 border-border backdrop-blur-md",
              isMenuOpen
                ? "max-h-[400px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 border-b-0 py-0 opacity-0",
            )}
          >
            {navLinks.map((link) => (
              <Button
                variant="link"
                key={link.label}
                onClick={() => setDialogOpen(true)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </header>
      <DialogComponent />
    </>
  );
};

export default Navbar;
