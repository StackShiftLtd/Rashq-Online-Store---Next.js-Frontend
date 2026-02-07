'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function CollectionsPage() {
  const collections = [
    {
      id: 'heritage',
      name: 'Heritage Collection',
      description: 'Timeless pieces inspired by Arabic heritage and cultural artistry. Each piece celebrates the rich traditions of Middle Eastern craftsmanship with modern sensibility.',
      image: '/collection-1.jpg',
      items: 24,
      featured: true,
    },
    {
      id: 'modern-luxe',
      name: 'Modern Luxe',
      description: 'Contemporary cuts with traditional embellishments. This collection bridges the gap between classic elegance and modern fashion, perfect for the discerning individual.',
      image: '/collection-1.jpg',
      items: 18,
      featured: true,
    },
    {
      id: 'flame',
      name: 'Flame Collection',
      description: 'Bold designs featuring our signature gold and amber accents. Inspired by the warmth of fire and the richness of precious metals, this collection radiates confidence.',
      image: '/collection-1.jpg',
      items: 15,
      featured: true,
    },
    {
      id: 'rose-garden',
      name: 'Rose Garden',
      description: 'Delicate and romantic, our Rose Garden collection celebrates the timeless beauty of roses in fabric and embroidery. Soft, luxurious, and eternally elegant.',
      image: '/product-3.jpg',
      items: 12,
      featured: false,
    },
    {
      id: 'emerald-dreams',
      name: 'Emerald Dreams',
      description: 'Deep, rich emerald tones combined with intricate gold work. This collection embodies luxury, mystery, and timeless sophistication.',
      image: '/product-1.jpg',
      items: 20,
      featured: false,
    },
    {
      id: 'midnight-elegance',
      name: 'Midnight Elegance',
      description: 'Dark, dramatic, and undeniably sophisticated. Perfect for evening wear and special occasions, this collection exudes refined luxury.',
      image: '/product-2.jpg',
      items: 16,
      featured: false,
    },
  ]

  const featured = collections.filter((c) => c.featured)
  const other = collections.filter((c) => !c.featured)

  return (
    <div className="w-full">
      <Navigation />

      {/* Page Header */}
      <div className="bg-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
            Collections
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Explore our curated collections, each telling a unique story of elegance and cultural heritage
          </p>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group"
              >
                <div className="relative h-96 bg-muted rounded-lg overflow-hidden mb-6">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {collection.name}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {collection.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/70">
                    {collection.items} Items
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Collections */}
        <div className="border-t border-border pt-20">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">
            Explore More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {other.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group flex gap-6"
              >
                <div className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-foreground/70 text-sm line-clamp-2">
                      {collection.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground/70">
                      {collection.items} Items
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Shop?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover the perfect piece from our exclusive collections
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
