'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-300 md:px-8 ${
          scrolled ? 'mt-2' : 'mt-0'
        }`}
      >
        <a
          href="#home"
          className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 ${
            scrolled ? 'bg-card/80 shadow-sm backdrop-blur' : ''
          }`}
        >
          <Image
            src="/images/whatsapp-image.jpeg"
            alt="Jaggery Logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-heading text-2xl leading-none tracking-wide">
            Jaggery
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 md:flex ${
            scrolled ? 'bg-card/80 shadow-sm backdrop-blur' : ''
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book-service"
            className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary md:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-sm md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-2 flex flex-col gap-1 rounded-3xl bg-card p-4 shadow-lg md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-service"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-base font-medium text-background"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </motion.nav>
      )}
    </motion.header>
  )
}
