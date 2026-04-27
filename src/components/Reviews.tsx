import { Star } from "lucide-react";

type Review = {
  name: string;
  text: string;
  date: string;
  badge?: string;
  reply?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Hugo Silva",
    text: "My visit to Copt de Fericire was an outstanding experience. The restaurant has a great atmosphere and excellent facilities, making it a perfect spot for a relaxed and high-quality meal.",
    date: "acum 2 luni",
    badge: "Local Guide",
  },
  {
    name: "Ioana Alexandra",
    text: "Am fost pentru prima dată aici și mi-a plăcut ce am găsit. Raport calitate preț foarte bun, combinații delicioase, preparate sățioase, atmosferă plăcută și servire rapidă.",
    date: "acum 7 luni",
    badge: "Local Guide",
    reply:
      "Mulțumim, Ioana! Ne bucurăm enorm că ți-a plăcut. Te așteptăm cu drag data viitoare. 🥔",
  },
  {
    name: "Petr Olša",
    text: "A tiny bistro that serves just one thing – baked potatoes with various fillings – but they do it so well that it becomes a full-on gastronomic experience.",
    date: "acum 5 luni",
    badge: "Local Guide",
  },
];

const Stars = ({ size = 14 }: { size?: number }) => (
  <span className="inline-flex gap-0.5" aria-label="5 din 5 stele">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="fill-gold text-gold" style={{ width: size, height: size }} />
    ))}
  </span>
);

export const Reviews = () => (
  <section id="reviews" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <header className="reveal mb-12 text-center">
        <p className="mb-3 text-xs-fluid font-semibold uppercase tracking-[0.18em] text-primary">
          Recenzii
        </p>
        <h2 className="font-display text-2xl-fluid">Ce spun clienții</h2>
      </header>

      <div className="reveal mx-auto mb-14 flex max-w-md flex-col items-center gap-2 rounded-[var(--radius-lg)] bg-surface px-8 py-7 text-center shadow-warm-sm">
        <span className="font-display text-2xl-fluid font-bold leading-none">4.9</span>
        <Stars size={20} />
        <span className="text-sm-fluid text-muted-foreground">din 5 · 764 recenzii</span>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <li key={r.name} className="reveal" data-delay={i * 100}>
            <article className="relative h-full rounded-[var(--radius-lg)] bg-surface-2 p-7 shadow-warm-sm">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-2 font-display text-3xl-fluid leading-none text-gold opacity-20"
              >
                “
              </span>
              <Stars />
              <p className="mt-4 text-sm-fluid leading-relaxed text-foreground/90">
                {r.text}
              </p>
              <footer className="mt-5 flex items-center justify-between gap-3">
                <span className="font-semibold">{r.name}</span>
                <span className="text-xs-fluid text-muted-foreground">
                  {r.date}
                  {r.badge ? ` · ${r.badge}` : ""}
                </span>
              </footer>

              {r.reply && (
                <div className="mt-5 ml-5 rounded-[var(--radius-md)] border-l-2 border-primary bg-surface px-4 py-3">
                  <p className="text-xs-fluid font-semibold text-primary">
                    Răspunsul proprietarului
                  </p>
                  <p className="mt-1 text-sm-fluid text-foreground/80">{r.reply}</p>
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
