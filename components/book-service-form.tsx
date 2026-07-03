'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Reveal } from './reveal'

// TODO: replace with the real Jaggery Hospitality WhatsApp number,
// in international format with country code and no symbols/spaces.
// Example for an Indian number 98765 43210 -> "919876543210"
const WHATSAPP_NUMBER = '919999999999'

const services = [
  'Hotel Operational Consultancy',
  'Staff Training & Development',
  'Pre-Opening Support',
  'Recruitment',
  'Other / Not Sure Yet',
]

export function BookServiceForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [service, setService] = useState(services[0])
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const lines = [
      `Hi Jaggery Hospitality, I'd like to book a consultation.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      businessName ? `Business: ${businessName}` : null,
      `Service: ${service}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="book-service" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-border">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Book A Service
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-heading text-4xl tracking-wide text-foreground md:text-5xl">
            Let&apos;s Talk On WhatsApp
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
            Fill in a few details and we&apos;ll open WhatsApp with your
            message ready to send straight to our team.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-5 rounded-3xl bg-card p-7 ring-1 ring-border md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="businessName"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Business Name{' '}
                <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="businessName"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Hotel / restaurant / café name"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Service Needed
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message{' '}
                <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a bit about what you need help with"
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Send Via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
