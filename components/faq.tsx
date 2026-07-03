'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'What consultancy services do you offer?',
    a: 'We provide end-to-end hospitality consultancy including operational setup, process optimization, staff training, pre-opening support, recruitment, and long-term performance audits for hotels, restaurants, cafés, and food businesses.',
  },
  {
    q: 'Do you support pre-opening projects?',
    a: 'Yes. We guide concept development, launch planning, staffing, and operational readiness so your business opens with confidence and clear systems in place.',
  },
  {
    q: 'Do you work with existing businesses?',
    a: 'Absolutely. We help established businesses optimize processes, improve service standards, and increase revenue through practical, hands-on operational systems.',
  },
  {
    q: 'Do you provide staff training?',
    a: 'We build confident, guest-focused teams through practical hospitality training, service standards, and operational discipline tailored to your business.',
  },
  {
    q: 'Can you help with recruitment?',
    a: 'Yes, our recruitment partners connect you with qualified hospitality talent suited to your operational needs and brand culture.',
  },
  {
    q: 'Do you offer long-term support?',
    a: 'We offer ongoing partnerships with regular training, operational reviews, performance audits, and strategic guidance to ensure sustained growth.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border">
              <span className="h-2 w-2 rounded-full bg-primary" />
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
              Answers To Your Hospitality Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Find quick answers about operational consultancy, pre-opening
              support, staff training, recruitment, and ongoing hospitality
              business guidance.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-foreground md:text-lg">
                      {faq.q}
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground/5 text-foreground">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
