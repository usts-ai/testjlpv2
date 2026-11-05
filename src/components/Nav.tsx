const links = [
  { href: "#produits", label: "Produits" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8"
        aria-label="Navigation principale"
      >
        <a
          href="#haut"
          className="font-display text-lg font-bold tracking-tight text-white drop-shadow-sm md:text-xl"
        >
          Le Fournil d&apos;Aube
        </a>
        <ul className="flex items-center gap-5 text-sm font-medium text-white/90 md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-opacity hover:opacity-100 opacity-85 underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
