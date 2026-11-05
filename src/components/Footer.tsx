export function Footer() {
  return (
    <footer className="border-t border-[var(--ink)]/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--crust)]/70 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display font-semibold text-[var(--ink)]">
          Le Fournil d&apos;Aube
        </p>
        <p>Démo vitrine — front uniquement, sans backend.</p>
      </div>
    </footer>
  );
}
