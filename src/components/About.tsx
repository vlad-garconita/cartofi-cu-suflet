export const About = () => (
  <section id="about" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <p className="mb-3 text-xs-fluid font-semibold uppercase tracking-[0.18em] text-primary">
            Despre noi
          </p>
          <h2 className="font-display text-2xl-fluid">Povestea noastră</h2>
          <div className="mt-6 max-w-[65ch] space-y-5 text-base-fluid text-foreground/85">
            <p>
              Suntem un bistro mic, ascuns pe Splaiul Independenței, care face un singur
              lucru — dar îl face perfect: cartofi copți. Cojiți crocant, pufoși înăuntru,
              încărcați cu toppinguri care îți aduc aminte de mâncarea de acasă, dar puțin
              mai îndrăzneață.
            </p>
            <p>
              Ne găsești la <strong className="font-semibold text-foreground">Splaiul Independenței 2K</strong>,
              în București. Prețuri prietenoase (20–40 lei/persoană), atmosferă caldă și
              porții generoase. Un loc unde te oprești după muncă, te așezi la o masă
              simplă și pleci cu zâmbetul pe buze.
            </p>
            <p>
              Am crescut. De curând am deschis a doua locație în{" "}
              <strong className="font-semibold text-foreground">Cosmopolis Plaza</strong>, în
              nordul orașului, ca să fim mai aproape de cei dragi. Sună-ne la{" "}
              <a href="tel:+40775535802" className="font-semibold text-primary underline-offset-4 hover:underline">
                +40 775 535 802
              </a>
              .
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: "🥔", label: "1 Specialitate" },
              { icon: "⭐", label: "4.9 Recenzii" },
              { icon: "📍", label: "2 Locații" },
            ].map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium shadow-warm-sm"
              >
                <span aria-hidden="true">{s.icon}</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-5" data-delay="120">
          <div className="overflow-hidden rounded-[var(--radius-xl)] shadow-warm-lg ring-1 ring-border/50">
            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7c555f7742247b911a5eaaefaf45fe7b65b9df7.jpg"
              alt="Interiorul cald al bistroului Copt de Fericire din București"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
