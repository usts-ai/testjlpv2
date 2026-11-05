export function Hero() {
  return (
    <section
      id="haut"
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
      aria-labelledby="hero-brand"
    >
      <img
        src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgba(26,28,30,0.82)] via-[rgba(26,28,30,0.45)] to-[rgba(62,90,110,0.35)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <p
          id="hero-brand"
          className="hero-rise font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Le Fournil
          <br />
          d&apos;Aube
        </p>
        <h1 className="hero-rise hero-rise-delay-1 mt-5 max-w-xl text-xl font-medium text-white/95 md:text-2xl">
          Le pain cuit avant l&apos;aube, pour la ville qui s&apos;éveille.
        </h1>
        <p className="hero-rise hero-rise-delay-2 mt-3 max-w-md text-base text-white/80 md:text-lg">
          Levain maison, farines locales et four à sole — une boulangerie de
          quartier, ouverte sur le matin.
        </p>
        <div className="hero-rise hero-rise-delay-3 mt-8 flex flex-wrap gap-3">
          <a
            href="#produits"
            className="inline-flex items-center justify-center bg-[var(--butter)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:brightness-105"
          >
            Voir les produits
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Nous écrire
          </a>
        </div>
      </div>
    </section>
  );
}
