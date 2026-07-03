'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const mediaItems = [
  { src: '/images/closeshot.mp4', type: 'video', className: 'col-span-2 row-span-2' },
  { src: '/images/bar.jpeg', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/bar2.jpeg', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/placement-1.png', type: 'image', className: 'col-span-2 row-span-1' },
  { src: '/images/MAngo.jpeg', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/good.jpeg', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/chai.jpeg', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/placement-2.png', type: 'image', className: 'col-span-1 row-span-1' },
  { src: '/images/placement-3.png', type: 'image', className: 'col-span-2 row-span-1' },
  { src: '/images/placement-4.png', type: 'image', className: 'col-span-2 row-span-1' },
]

export function Placements() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* trust banner */}
        <div className="mb-24 grid gap-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary">
                Why Clients Trust Us
              </p>
              <h2 className="mt-3 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
                Hospitality Businesses Built For Long-Term Success
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-muted-foreground">
              With industry expertise, practical solutions, and a hands-on
              approach, Jaggery helps teams optimize operations, enhance guest
              satisfaction, and grow sustainably.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary">
                Our Placements
              </p>
              <h2 className="mt-3 font-heading text-4xl leading-[1.05] tracking-wide text-foreground md:text-5xl">
                Rooted In Northeast India. Driven By Global Hospitality
                Standards.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-muted-foreground">
              With a deep understanding of the hospitality landscape across
              Northeast India, we help businesses navigate local market dynamics
              while implementing internationally recognized operational
              standards.
            </p>
          </Reveal>
        </div>

        {/* Media Bento Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:grid-cols-4 md:gap-5 md:auto-rows-[240px]">
          {mediaItems.map((item, i) => (
            <Reveal
              key={`${item.src}-${i}`}
              delay={(i % 4) * 0.08}
              y={30}
              className={item.className}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-border">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={`Hospitality Placement ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
