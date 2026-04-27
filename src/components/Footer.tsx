import { Facebook, Instagram, Phone } from "lucide-react";
import { PotatoLogo } from "./PotatoLogo";

const NAV = [
  { href: "#home", label: "Acasă" },
  { href: "#menu", label: "Meniu" },
  { href: "#reviews", label: "Recenzii" },
  { href: "#about", label: "Despre" },
  { href: "#find-us", label: "Contact" },
];

export const Footer = () => (
  <footer
    data-theme="dark"
    className="bg-background text-foreground"
  >
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <a href="#home" className="flex items-center gap-2 text-foreground">
            <PotatoLogo className="h-8 w-8 text-primary" />
            <span className="font-body text-lg font-bold">Copt de Fericire</span>
          </a>
          <p className="mt-3 max-w-xs font-display italic text-muted-foreground">
            Cartofi copți cu suflet.
          </p>
        </div>

        <nav aria-label="Subsol">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-foreground/80 hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-foreground/80 hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <a
            href="tel:+40775535802"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +40 775 535 802
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-border/60 pt-6">
        <p className="text-xs-fluid text-muted-foreground">
          © 2025 Copt de Fericire · Splaiul Independenței 2K, București
        </p>
      </div>
    </div>
  </footer>
);
