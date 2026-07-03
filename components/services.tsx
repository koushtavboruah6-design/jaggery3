'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    title: 'Hotel Operational Consultancy',
    body: 'Operational setup, process optimization, audits, revenue improvement, and practical systems for hotels, restaurants, cafés, and food businesses.',
    image: '/images/service-hotel.png',
  },
  {
    title: 'Staff Training & Development',
    body: 'Build confident, guest-focused teams through practical hospitality training, service standards, and operational discipline.',
    image: '/images/service-training.png',
  },
  {
    title: 'Pre-Opening Support',
    body: 'Concept development, launch planning, staffing, operational readiness, and structured support before opening day.',
    image: '/images/service-preopening.png',
  },
]

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Our Services
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-heading text-4xl tracking-wide text-foreground md:text-5xl">
            Hospitality Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} y={40}>
              <a
                href="#book-service"
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-2xl tracking-wide text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    Get Service
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
