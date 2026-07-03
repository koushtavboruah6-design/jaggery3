'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

const stats = [
  { end: 8, suffix: '+', label: 'Years Experience' },
  { end: 50, suffix: '+', label: 'Hospitality Projects' },
  { end: 100, suffix: '%', label: 'Hands-on Support' },
]

export function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border">
              <span className="h-2 w-2 rounded-full bg-primary" />
              About Us
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
              "Empowering hotels, restaurants, cafés, and food businesses to grow with confidence."
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="#book-service"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.08}>
                <div>
                  <p className="font-heading text-4xl tracking-wide text-foreground md:text-5xl">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} y={40}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border">
            <Image
              src="/images/about.png"
              alt="Hospitality professional behind a hotel bar"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
