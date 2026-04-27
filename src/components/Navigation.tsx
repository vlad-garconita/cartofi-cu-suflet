import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { PotatoLogo } from "./PotatoLogo";

const NAV = [
  { href: "#home", label: "Acasă" },
  { href: "#menu", label: "Meniu" },
  { href: "#reviews", label: "Recenzii" },
  { href: "#about", label: "Despre" },
  { href: "#find-us", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("cdf-theme") as "light" | "dark" | null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cdf-theme", next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-warm-sm border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8"
        aria-label="Principal"
      >
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <PotatoLogo className="h-8 w-8 text-primary" />
          <span className="font-body font-bold tracking-tight text-base-fluid">
            Copt de Fericire
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                data-nav-link
                data-active="false"
                className="group relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground data-[active=true]:text-foreground"
              >
                {n.label}
                <span className="pointer-events-none absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[active=true]:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Schimbă tema"
            className="grid h-11 w-11 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <a
            href="#find-us"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm-sm transition-all hover:shadow-warm-md hover:-translate-y-0.5 sm:inline-flex"
          >
            Comandă
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Deschide meniul"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full text-foreground hover:bg-surface md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-surface"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#find-us"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Comandă
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
