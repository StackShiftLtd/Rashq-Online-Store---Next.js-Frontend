'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const wishlistItems = [
  {
    id: 1,
    name: 'Heritage Emerald Abaya',
    price: '950 AED',
    image: '/product-1.jpg',
    collection: 'Heritage',
  },
  {
    id: 2,
    name: 'Gold Embroidered Thobe',
    price: '1,200 AED',
    image: '/product-2.jpg',
    collection: 'Modern',
  },
  {
    id: 3,
    name: 'Rose Evening Kaftan',
    price: '1,400 AED',
    image: '/product-3.jpg',
    collection: 'Couture',
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <main className="w-full">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-secondary fill-secondary" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              My Wishlist
            </h1>
          </div>
          <p className="text-foreground/70">
            {items.length} item{items.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 text-muted mx-auto mb-6" />
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-foreground/70 mb-8">
                Start adding items to your wishlist to save them for later.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="w-5 h-5 text-secondary fill-secondary" />
                    </button>
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.collection}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-foreground mb-2 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {item.price}
                    </p>

                    <div className="flex gap-3">
                      <Link
                        href={`/product/${item.id}`}
                        className="flex-1 bg-muted text-foreground py-2 rounded-lg font-semibold hover:bg-muted/80 transition-colors text-center"
                      >
                        View Details
                      </Link>
                      <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
