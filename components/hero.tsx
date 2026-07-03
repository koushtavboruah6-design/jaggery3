'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { CountUp } from './count-up'

const line1 = 'Turning Hospitality'
const line2 = 'Dreams Into Successful'
const line3 = 'Businesses'

function AnimatedLine({ text, delayBase }: { text: string; delayBase: number }) {
  return (
    <span className="block">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: '0.4em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delayBase + i * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-16 pt-36 md:px-8 md:pt-44"
    >
      {/* hero background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/jaggery-hero.png"
          alt=""
          fill
          className="object-contain object-[center_20%] md:object-cover md:object-center"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground/70"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Hospitality Consultancy
          </motion.p>

          <h1 className="font-heading text-5xl leading-[0.95] tracking-wide text-foreground sm:text-6xl md:text-7xl">
            <AnimatedLine text={line1} delayBase={0.2} />
            <AnimatedLine text={line2} delayBase={0.55} />
            <AnimatedLine text={line3} delayBase={1.0} />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#book-service"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Why Choose Us
            </a>
          </motion.div>
        </div>

        {/* floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="ml-auto mt-12 w-full max-w-sm rounded-3xl bg-card p-6 shadow-xl shadow-foreground/5 ring-1 ring-border md:mt-0 md:translate-y-[-40px]"
        >
          <h2 className="font-heading text-5xl tracking-wide text-foreground">
            <CountUp end={450} suffix="+" />
          </h2>
          <p className="mt-2 font-semibold text-foreground">
            Hospitality Partners
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Hotels, restaurants, cafés and food businesses
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-3">
              {['expert-1', 'expert-2', 'expert-3'].map((img) => (
                <span
                  key={img}
                  className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-card"
                >
                  <Image
                    src={`/images/${img}.png`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              Business Owners
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
