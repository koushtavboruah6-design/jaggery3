import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const pages = ['Home', 'About', 'Services', 'Contact', 'FAQ']
const socials = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-16 md:px-8">
      {/* background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/jaggery-hero.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-background/80" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-heading text-xl">
                J
              </span>
              <span className="font-heading text-2xl tracking-wide text-foreground">
                Jaggery
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hospitality consultancy for hotels, restaurants, cafés, and food
              businesses across India.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@jaggeryhospitality.in"
                  className="transition-colors hover:text-foreground"
                >
                  hello@jaggeryhospitality.in
                </a>
              </li>
              <li>+91 Hospitality Consultancy</li>
              <li>Northeast India, serving businesses across India</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg tracking-wide text-foreground">
              Pages
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {pages.map((page) => (
                <li key={page}>
                  <a
                    href={`#${page.toLowerCase()}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg tracking-wide text-foreground">
              Social Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {socials.map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Jaggery Hospitality. All rights reserved.</p>
          <p>Built for hospitality businesses.</p>
        </div>
      </div>
    </footer>
  )
}
