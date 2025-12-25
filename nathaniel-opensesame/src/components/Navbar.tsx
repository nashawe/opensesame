import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { NAV_LINKS, DEMO_LINK } from "@/lib/nav";
import { cn } from "@/lib/cn";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle Scroll Appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Active Section Highlighting (Intersection Observer)
  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when section is in middle of screen
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.href.replace("/#", ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        (scrolled || isOpen) &&
          "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm"
      )}
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="text-lg font-bold tracking-tight text-slate-900 focus-visible:ring-2 rounded-md px-1"
              onClick={() => window.scrollTo(0, 0)}
            >
              Nathaniel Shawe
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-600",
                    activeSection === link.href.replace("/", "")
                      ? "text-brand-600"
                      : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                href={DEMO_LINK.href}
                variant="primary"
                size="sm"
                className="gap-2"
              >
                {DEMO_LINK.name} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-lg h-screen">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                href={DEMO_LINK.href}
                className="w-full mt-4 justify-center"
              >
                {DEMO_LINK.name}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
