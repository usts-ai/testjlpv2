import { openingHours } from "../data";
import { useReveal } from "../hooks/useReveal";

export function Hours() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="horaires"
      ref={sectionRef}
      className="reveal relative overflow-hidden"
      aria-labelledby="horaires-title"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(95,117,104,0.12),rgba(157,173,184,0.25)_50%,rgba(201,162,39,0.1))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-end md:px-8 md:py-28">
        <div>
          <h2
            id="horaires-title"
            className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
          >
            Horaires d&apos;ouverture
          </h2>
          <p className="mt-3 max-w-sm text-[var(--crust)]/80">
            Les derniers pains sortent souvent avant la fermeture — venez tôt
            pour les spécialités du jour.
          </p>
          <p className="mt-6 text-sm text-[var(--sage)]">
            12 rue des Granges · Lyon 1<sup>er</sup>
          </p>
        </div>

        <dl className="divide-y divide-[var(--ink)]/10 border-y border-[var(--ink)]/10">
          {openingHours.map((row) => (
            <div
              key={row.day}
              className="flex items-baseline justify-between gap-4 py-3.5"
            >
              <dt className="font-medium text-[var(--ink)]">{row.day}</dt>
              <dd
                className={
                  row.closed
                    ? "text-[var(--stone)]"
                    : "font-semibold text-[var(--crust)]"
                }
              >
                {row.hours}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
