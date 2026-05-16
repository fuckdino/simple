import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precio", href: "#precio" },
];

export function Navbar() {
  return (
    <nav className="relative z-10 flex w-full max-w-7xl mx-auto items-center justify-between px-8 py-6">
      <span
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        simple<sup className="text-xs align-super">&trade;</sup>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <a
        href="https://cal.com/juada"
        target="_blank"
        rel="noopener noreferrer"
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
      >
        Pedir cotización
      </a>
    </nav>
  );
}
