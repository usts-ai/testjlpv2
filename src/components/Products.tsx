import { products } from "../data";
import { useReveal } from "../hooks/useReveal";

export function Products() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="produits"
      ref={sectionRef}
      className="reveal mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="produits-title"
    >
      <h2
        id="produits-title"
        className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
      >
        Du four, chaque matin
      </h2>
      <p className="mt-3 max-w-xl text-[var(--crust)]/80">
        Une sélection du jour — pains, viennoiseries et douceurs façonnés à la
        main.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <li
            key={product.id}
            className="product-card overflow-hidden bg-white/70 ring-1 ring-[var(--ink)]/8"
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <article>
              <div className="aspect-[4/3] overflow-hidden bg-[var(--mist)]">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--ink)]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--crust)]/75">
                    {product.description}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-[var(--sage)]">
                  {product.price}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
