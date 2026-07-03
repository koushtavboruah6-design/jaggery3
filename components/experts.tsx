'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const experts = [
  { role: 'Operations Consultant', focus: 'Hotel Operational Consultancy', image: '/images/expert-1.png' },
  { role: 'Training Specialist', focus: 'Staff Training & Development', image: '/images/expert-2.png' },
  { role: 'Growth Mentor', focus: 'Long-Term Partnership', image: '/images/expert-3.png' },
  { role: 'Pre-Opening Lead', focus: 'Launch & Setup Support', image: '/images/expert-4.png' },
  { role: 'Recruitment Partner', focus: 'Hospitality Recruitment', image: '/images/expert-1.png' },
  { role: 'Performance Advisor', focus: 'Process Optimization', image: '/images/expert-2.png' },
]

export function Experts() {
  const [index, setIndex] = useState(0)
  const perView = 4
  const maxIndex = Math.max(0, experts.length - perView)

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <section id="team" className="overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Our Experts
              </span>
              <h2 className="mt-6 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
                Hands-On Experts Behind Jaggery Hospitality
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-muted-foreground">
              Our consultancy partners with hospitality brands through
              operational planning, staff development, pre-opening support, and
              continuous improvement.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: `calc(-${index} * (25% ))` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {experts.map((expert, i) => (
                <div
                  key={`${expert.role}-${i}`}
                  className="w-[80%] shrink-0 sm:w-[45%] lg:w-[calc(25%-15px)]"
                >
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-border">
                    <Image
                      src={expert.image}
                      alt={expert.role}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
                      <p className="font-heading text-xl tracking-wide text-background">
                        {expert.role}
                      </p>
                      <p className="text-sm text-background/80">{expert.focus}</p>
                    </div>
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous experts"
              onClick={prev}
              disabled={index === 0}
              className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground transition-opacity disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next experts"
              onClick={next}
              disabled={index === maxIndex}
              className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground transition-opacity disabled:opacity-40"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
