type Item = {
  name: string;
  desc: string;
  price: string;
  featured?: boolean;
};

const ITEMS: Item[] = [
  {
    name: "Cartof Copt Carbonara Românească",
    desc: "Cartof copt mare, smântână, bacon, parmezan și ierburi aromate. Gust de acasă, reinventat.",
    price: "28 lei",
    featured: true,
  },
  {
    name: "Cartof Copt cu Prosciutto",
    desc: "Prosciutto crocant, brânză topită și rucola proaspătă.",
    price: "32 lei",
  },
  {
    name: "Cartof Copt Pulled Pork",
    desc: "Carne de porc trasă lent, sos BBQ caramelizat și ceapă roșie murată.",
    price: "35 lei",
  },
  {
    name: "Tiramisu",
    desc: "Desertul nostru emblematic. Mascarpone cremos, espresso intens.",
    price: "22 lei",
  },
];

export const Menu = () => (
  <section id="menu" className="bg-surface/40 py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <header className="reveal mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs-fluid font-semibold uppercase tracking-[0.18em] text-primary">
          Meniu
        </p>
        <h2 className="font-display text-2xl-fluid">Meniu</h2>
        <p className="mt-3 font-display italic text-lg-fluid text-muted-foreground">
          Simplu. Sățios. Delicios.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <li
            key={item.name}
            className={`reveal ${item.featured ? "md:col-span-2" : ""}`}
            data-delay={i * 80}
          >
            <article
              className={`group relative h-full rounded-[var(--radius-lg)] border border-border/60 bg-card p-6 shadow-warm-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-warm-md md:p-8 ${
                item.featured ? "bg-gradient-to-br from-card to-surface-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {item.featured && (
                    <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Specialitatea casei
                    </span>
                  )}
                  <h3 className="font-display text-xl-fluid leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm-fluid text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-gold px-4 py-2 font-display text-base font-semibold text-gold-foreground shadow-warm-sm">
                  {item.price}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="reveal mx-auto mt-10 inline-flex w-full items-center justify-center rounded-full bg-surface px-6 py-3 text-center text-sm font-medium text-foreground/80 shadow-warm-sm">
        🕐 Prețuri: 20–40 lei/persoană · Livrare disponibilă · La pachet disponibil
      </p>
    </div>
  </section>
);
