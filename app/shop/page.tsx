'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Heart, Filter, X } from 'lucide-react'

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'abayas', label: 'Abayas' },
    { id: 'thobes', label: 'Thobes' },
    { id: 'evening', label: 'Evening Wear' },
    { id: 'accessories', label: 'Accessories' },
  ]

  const products = [
    {
      id: 1,
      name: 'Emerald Silk Abaya',
      price: 450,
      category: 'abayas',
      image: '/product-1.jpg',
      rating: 4.8,
      reviews: 23,
      inStock: true,
    },
    {
      id: 2,
      name: 'Gold Embroidered Thobe',
      price: 520,
      category: 'thobes',
      image: '/product-2.jpg',
      rating: 4.9,
      reviews: 31,
      inStock: true,
    },
    {
      id: 3,
      name: 'Rose Silk Evening Wear',
      price: 480,
      category: 'evening',
      image: '/product-3.jpg',
      rating: 4.7,
      reviews: 18,
      inStock: true,
    },
    {
      id: 4,
      name: 'Flame Gradient Kaftan',
      price: 390,
      category: 'evening',
      image: '/collection-1.jpg',
      rating: 4.9,
      reviews: 27,
      inStock: true,
    },
    {
      id: 5,
      name: 'Heritage Embroidered Cape',
      price: 380,
      category: 'abayas',
      image: '/product-1.jpg',
      rating: 4.6,
      reviews: 14,
      inStock: false,
    },
    {
      id: 6,
      name: 'Modern Luxury Scarf',
      price: 180,
      category: 'accessories',
      image: '/product-2.jpg',
      rating: 4.8,
      reviews: 19,
      inStock: true,
    },
    {
      id: 7,
      name: 'Embroidered Evening Gown',
      price: 650,
      category: 'evening',
      image: '/product-3.jpg',
      rating: 4.9,
      reviews: 25,
      inStock: true,
    },
    {
      id: 8,
      name: 'Signature Gold Bracelet',
      price: 280,
      category: 'accessories',
      image: '/collection-1.jpg',
      rating: 4.7,
      reviews: 22,
      inStock: true,
    },
  ]

  const filtered = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  return (
    <div className="w-full">
      <Navigation />

      {/* Page Header */}
      <div className="bg-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
            Shop
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Discover our curated collection of luxury fashion pieces
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0`}
          >
            <div className="bg-muted p-6 rounded-lg sticky top-20">
              <div className="flex items-center justify-between md:block mb-6">
                <h3 className="text-lg font-semibold text-foreground">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="md:hidden"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm text-foreground/80">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">${priceRange[0]}</span>
                    <span className="text-foreground/70">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden mb-6 flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Results Info */}
            <div className="mb-8">
              <p className="text-foreground/70 text-sm">
                Showing {filtered.length} products
              </p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group flex flex-col h-full">
                    <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-72">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-background font-semibold">Out of Stock</span>
                        </div>
                      )}
                      <button
                        className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Add to wishlist"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

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
                      <span className="text-sm text-foreground/70">({product.reviews})</span>
                    </div>

                    <p className="text-2xl font-serif font-bold text-primary mt-auto mb-4">
                      ${product.price}
                    </p>

                    <button
                      className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 uppercase tracking-wide text-sm disabled:opacity-50"
                      disabled={!product.inStock}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/70 mb-4">
                  No products found matching your criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange([0, 1000])
                  }}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
