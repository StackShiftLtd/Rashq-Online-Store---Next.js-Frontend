'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedCollections from '@/components/FeaturedCollections'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <Newsletter />
      <Footer />
    </main>
  )
}
