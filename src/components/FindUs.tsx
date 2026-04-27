import { Clock, MapPin, Phone, Sparkles, Wallet } from "lucide-react";

export const FindUs = () => (
  <section id="find-us" className="bg-surface/40 py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <header className="reveal mb-12 max-w-2xl">
        <p className="mb-3 text-xs-fluid font-semibold uppercase tracking-[0.18em] text-primary">
          Contact
        </p>
        <h2 className="font-display text-2xl-fluid">Găsește-ne</h2>
        <p className="mt-3 text-base-fluid text-muted-foreground">
          Pe malul Dâmboviței, lângă Politehnică. Sau în nord, la Cosmopolis Plaza.
        </p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="reveal space-y-5">
          <ul className="space-y-4">
            {[
              {
                icon: <MapPin className="h-5 w-5" />,
                label: "Adresa",
                value: "Splaiul Independenței 2K, 030099 București",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                label: "Telefon",
                value: (
                  <a href="tel:+40775535802" className="hover:underline">
                    +40 775 535 802
                  </a>
                ),
              },
              {
                icon: <Clock className="h-5 w-5" />,
                label: "Program",
                value: "Marți–Duminică: 11:00–21:00 · Luni: Închis",
              },
              {
                icon: <Wallet className="h-5 w-5" />,
                label: "Prețuri",
                value: "20–40 lei/persoană",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                label: "Servicii",
                value: "Luat masa · La pachet · Livrare",
              },
            ].map((row) => (
              <li
                key={row.label}
                className="flex items-start gap-4 rounded-[var(--radius-md)] bg-card p-4 shadow-warm-sm"
              >
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  {row.icon}
                </span>
                <div>
                  <p className="text-xs-fluid font-semibold uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </p>
                  <p className="mt-0.5 text-base font-medium text-foreground">{row.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-[var(--radius-lg)] border border-gold/40 bg-gold/15 p-5">
            <p className="text-xs-fluid font-bold uppercase tracking-wider text-primary">
              ✨ Noutate
            </p>
            <p className="mt-2 text-base font-medium text-foreground">
              Am deschis COPT în Cosmopolis Plaza! Contact:{" "}
              <a href="tel:+40790980000" className="font-semibold text-primary hover:underline">
                +40 790 980 000
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Copt+de+Fericire+Splaiul+Independentei+2K+Bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm-md transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            <MapPin className="h-4 w-4" /> Obține indicații
          </a>
        </div>

        <div className="reveal" data-delay="120">
          <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-warm-md ring-1 ring-border">
            <iframe
              title="Harta Copt de Fericire"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.7!2d26.0!3d44.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffe5e55a829f%3A0xc2dce93468115b81!2sCopt%20de%20Fericire!5e0!3m2!1sro!2sro"
              width="100%"
              height={420}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
