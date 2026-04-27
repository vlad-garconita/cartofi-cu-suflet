import { ChevronDown, Star } from "lucide-react";

export const Hero = () => (
  <section
    id="home"
    className="relative isolate flex min-h-[100dvh] items-center overflow-hidden"
  >
    <img
      src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/6dd96a4be7124e455b235e194984c42c362dada4.jpg"
      alt="Cartof copt încărcat cu toppinguri, servit la Copt de Fericire în București"
      width={1920}
      height={1280}
      loading="eager"
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "linear-gradient(to top right, oklch(0.18 0.05 50 / 0.78), oklch(0.18 0.05 50 / 0.45) 45%, transparent 80%)",
      }}
      aria-hidden="true"
    />

    <div className="mx-auto w-full max-w-7xl px-5 py-28 md:px-8">
      <div className="max-w-3xl text-white">
        <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs-fluid uppercase tracking-[0.18em] backdrop-blur">
          Bistro · Splaiul Independenței
        </p>
        <h1
          className="reveal font-display font-semibold text-hero text-white"
          data-delay="80"
        >
          Copt de Fericire
        </h1>
        <p
          className="reveal mt-5 max-w-2xl font-display italic text-lg-fluid"
          style={{ color: "oklch(0.92 0.05 82)" }}
          data-delay="160"
        >
          Cartofi copți cu suflet, pe malul Dâmboviței.
        </p>

        <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="240">
          <a
            href="#menu"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-warm-md transition-all hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            Vezi Meniul
          </a>
          <a
            href="#find-us"
            className="inline-flex min-h-11 items-center rounded-full border border-white/70 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            Găsește-ne
          </a>
        </div>
      </div>
    </div>

    {/* Rating badge */}
    <div className="animate-slide-in-left absolute bottom-8 left-5 z-10 md:left-8">
      <div className="flex items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/15">
        <Star className="h-4 w-4 fill-gold text-gold" />
        <span className="text-sm font-semibold">4.9</span>
        <span className="text-sm text-white/70">·</span>
        <span className="text-sm text-white/85">764 recenzii</span>
      </div>
    </div>

    <a
      href="#about"
      aria-label="Defilează în jos"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white"
    >
      <ChevronDown className="h-7 w-7 animate-bounce-soft" />
    </a>
  </section>
);
