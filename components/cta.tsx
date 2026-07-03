'use client'

import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from './reveal'

export function Cta() {
  return (
    <section id="cta" className="relative isolate overflow-hidden">
      <Image
        src="/images/cta.png"
        alt="Luxury hotel exterior at sunset"
        fill
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-transparent to-background/40" />

      <div className="mx-auto max-w-3xl px-5 py-28 text-center md:py-36">
        <Reveal>
          <h2 className="font-heading text-4xl leading-[1.02] tracking-wide text-foreground md:text-6xl">
            Ready To Build A Stronger Hospitality Business?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-foreground/90">
            From concept and pre-opening planning to team training and
            operational improvement, Jaggery is ready to support your next stage
            of growth.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#book-service"
              className="group inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              Book Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+917002212758"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-card/30 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card/50"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
