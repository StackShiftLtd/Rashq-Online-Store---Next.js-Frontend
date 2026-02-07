'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart } from 'lucide-react'

export default function FeaturedCollections() {
  const collections = [
    {
      id: 1,
      name: 'Heritage Collection',
      description: 'Timeless pieces inspired by Arabic heritage and cultural artistry',
      image: '/collection-1.jpg',
      items: 24,
      href: '/collections/heritage',
    },
    {
      id: 2,
      name: 'Modern Luxe',
      description: 'Contemporary cuts with traditional embellishments',
      image: '/collection-1.jpg',
      items: 18,
      href: '/collections/modern-luxe',
    },
    {
      id: 3,
      name: 'Flame Collection',
      description: 'Bold designs featuring our signature gold and amber accents',
      image: '/collection-1.jpg',
      items: 15,
      href: '/collections/flame',
    },
  ]

  const featured = [
    {
      id: 1,
      name: 'Emerald Silk Abaya',
      price: '$450',
      image: '/collection-1.jpg',
      rating: 4.8,
      reviews: 23,
    },
    {
      id: 2,
      name: 'Gold Embroidered Thobe',
      price: '$520',
      image: '/collection-1.jpg',
      rating: 4.9,
      reviews: 31,
    },
    {
      id: 3,
      name: 'Rose Silk Evening Wear',
      price: '$480',
      image: '/collection-1.jpg',
      rating: 4.7,
      reviews: 18,
    },
    {
      id: 4,
      name: 'Flame Gradient Kaftan',
      price: '$390',
      image: '/collection-1.jpg',
      rating: 4.9,
      reviews: 27,
    },
  ]

  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collections Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Explore Our World
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Featured Collections
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover our curated collections, each telling a unique story of elegance and cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={collection.href}
                className="group overflow-hidden rounded-lg"
              >
                <div className="relative h-80 bg-muted overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif font-bold text-background mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-background/90 text-sm mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-background/80 text-sm font-medium">
                      {collection.items} Items
                    </span>
                    <ArrowRight className="w-5 h-5 text-background/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Best Sellers */}
        <div>
          <div className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Customer Favorites
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Best Sellers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product) => (
              <div key={product.id} className="group flex flex-col h-full">
                <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-72">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    New
                  </span>
                </div>

                <Link href={`/product/${product.id}`} className="group/link">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover/link:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? 'text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-foreground/70">
                    ({product.reviews})
                  </span>
                </div>

                <p className="text-2xl font-serif font-bold text-primary mt-auto">
                  {product.price}
                </p>

                <button className="mt-4 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 uppercase tracking-wide text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
