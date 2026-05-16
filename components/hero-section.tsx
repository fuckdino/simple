export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[calc(100vh-90px)]">
      <span className="animate-fade-rise rounded-full border border-border px-4 py-1 text-xs text-muted-foreground mb-6">
        Landings premium desde 500 USD
      </span>

      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Landings que{" "}
        <em className="not-italic text-muted-foreground">parecen caras.</em>
        <br />
        Y{" "}
        <em className="not-italic text-muted-foreground">
          venden como deben.
        </em>
      </h1>

      <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-balance">
        Creamos páginas oscuras, elegantes y directas para negocios locales que
        necesitan explicar rápido, verse mejor que la competencia y capturar
        cotizaciones sin rodeos.
      </p>

      <a
        href="https://cal.com/juada"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base font-medium text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer"
      >
        Agendar Cotización
      </a>
    </section>
  );
}
