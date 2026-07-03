'use client'

import { Reveal } from './reveal'

const features = [
  {
    title: 'Launch & Setup',
    body: 'Concept development, pre-opening planning, staffing, and operational readiness for hotels, restaurants, cafés, and food businesses.',
  },
  {
    title: 'Performance Enhancement',
    body: 'Process optimization, service excellence, staff training, and revenue improvement through practical operational systems.',
  },
  {
    title: 'Continuous Success',
    body: 'Regular audits, mentorship, and operational support to ensure consistent growth, profitability, and guest satisfaction.',
  },
  {
    title: 'Tailored For Your Business',
    body: 'Customized solutions designed around your objectives, market position, and guest expectations—practical, relevant, and aligned with long-term success.',
  },
  {
    title: 'Long-Term Partnership',
    body: 'Through regular training, operational reviews, performance audits, and strategic guidance, we help your business adapt, grow, and excel.',
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-primary">
                Why Choose Us
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
                Beyond Consulting. Complete Hospitality Partnership.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-pretty text-muted-foreground">
              Success in hospitality requires more than great ideas—it requires
              execution. Jaggery provides hands-on support at every stage of
              your business lifecycle.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06} y={32}>
              <div className="group h-full rounded-3xl bg-card p-7 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-heading text-lg text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-2xl tracking-wide text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
