import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { WhyChoose } from '@/components/why-choose'
import { Services } from '@/components/services'
import { Placements } from '@/components/placements'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { BookServiceForm } from '@/components/book-service-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <WhyChoose />
      <Services />
      <Placements />
      <Faq />
      <Cta />
      <BookServiceForm />
      <Footer />
    </main>
  )
}
