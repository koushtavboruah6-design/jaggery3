const brands = [
  'NCS SQUARE',
  'TACO BELL',
  '365 Residency',
  'HOTEL PALACIO',
  'LOGOIPSUM',
  'GRAND VISTA',
]

export function Marquee() {
  const items = [...brands, ...brands]
  return (
    <section className="border-y border-border/60 py-12">
      <p className="mb-8 text-center text-sm font-semibold tracking-[0.2em] text-muted-foreground">
        OUR PLACEMENTS IN
      </p>
      <div className="marquee-track relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {items.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-heading text-3xl tracking-wide text-foreground/40 transition-colors hover:text-foreground/80"
            >
              {brand}
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  )
}
