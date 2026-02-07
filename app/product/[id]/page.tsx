'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Heart, Share2, ChevronDown, Truck, Shield, RotateCcw } from 'lucide-react'

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data
  const products: Record<string, any> = {
    '1': {
      id: 1,
      name: 'Emerald Silk Abaya',
      price: 450,
      rating: 4.8,
      reviews: 23,
      collection: 'Heritage Collection',
      description:
        'A stunning abaya crafted from premium emerald silk with delicate gold embroidery detailing. This timeless piece combines traditional elegance with modern sophistication, making it perfect for any occasion.',
      fabric: 'Premium Silk Blend',
      care: 'Dry clean only. Store in cool, dry place away from direct sunlight.',
      images: ['/product-1.jpg', '/collection-1.jpg', '/product-2.jpg'],
      colors: ['Emerald Green', 'Midnight Black', 'Rose Gold'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      features: [
        'Hand-embroidered gold details',
        'Premium silk blend fabric',
        'Comfortable fit with elegant drape',
        'Perfect for special occasions',
      ],
    },
    '2': {
      id: 2,
      name: 'Gold Embroidered Thobe',
      price: 520,
      rating: 4.9,
      reviews: 31,
      collection: 'Heritage Collection',
      description:
        'A luxurious thobe featuring intricate gold embroidery and premium fabric. This piece celebrates traditional craftsmanship while maintaining contemporary style.',
      fabric: 'Premium Linen Blend',
      care: 'Gentle wash in cold water. Dry flat. Iron on low heat if needed.',
      images: ['/product-2.jpg', '/product-1.jpg', '/collection-1.jpg'],
      colors: ['Gold', 'White', 'Cream'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      features: [
        'Intricate gold embroidery',
        'Premium linen blend',
        'Traditional and modern fusion',
        'Comfortable for all-day wear',
      ],
    },
    '3': {
      id: 3,
      name: 'Rose Silk Evening Wear',
      price: 480,
      rating: 4.7,
      reviews: 18,
      collection: 'Modern Luxe',
      description:
        'An enchanting evening piece in rose silk with gold accents. Perfect for making a statement at any evening event.',
      fabric: 'Silk Satin',
      care: 'Dry clean only. Professional cleaning recommended.',
      images: ['/product-3.jpg', '/collection-1.jpg', '/product-1.jpg'],
      colors: ['Rose Gold', 'Blush', 'Deep Rose'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      inStock: true,
      features: [
        'Luxurious silk satin',
        'Gold thread detailing',
        'Perfect drape for evening',
        'Flattering silhouette',
      ],
    },
  }

  const product = products[params.id] || products['1']
  const relatedProducts = [
    { id: 2, name: 'Gold Embroidered Thobe', price: 520, image: '/product-2.jpg' },
    { id: 3, name: 'Rose Silk Evening Wear', price: 480, image: '/product-3.jpg' },
    { id: 4, name: 'Flame Gradient Kaftan', price: 390, image: '/collection-1.jpg' },
  ]

  return (
    <div className="w-full">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-primary">
              {product.collection}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="bg-muted rounded-lg overflow-hidden mb-4 h-screen max-h-96 sm:max-h-full md:h-auto md:aspect-square relative">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? 'border-primary'
                      : 'border-transparent hover:border-foreground/30'
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2">
                {product.collection}
              </p>
              <h1 className="text-4xl font-serif font-bold text-primary mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
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
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <p className="text-4xl font-serif font-bold text-primary mb-8">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-6 mb-8 border-t border-b border-border py-6">
              {/* Color Selection */}
              <div>
                <label className="block font-semibold text-foreground mb-4">
                  Color
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      className="px-4 py-2 border-2 border-border rounded-lg hover:border-primary transition-colors text-sm font-medium"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block font-semibold text-foreground mb-4">
                  Size
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Link href="/size-guide" className="text-primary text-sm mt-3 inline-block">
                  Size Guide →
                </Link>
              </div>

              {/* Quantity */}
              <div>
                <label className="block font-semibold text-foreground mb-4">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-8">
              <button className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 uppercase tracking-wide">
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full border-2 border-border text-foreground font-semibold py-4 rounded-lg hover:bg-muted transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-current text-primary' : ''}`}
                />
                {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="w-full border-2 border-border text-foreground font-semibold py-4 rounded-lg hover:bg-muted transition-colors duration-300 flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Info */}
            <div className="space-y-4 mb-8 bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Free Shipping</h4>
                  <p className="text-sm text-foreground/70">
                    On orders over $200
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Secured Payment</h4>
                  <p className="text-sm text-foreground/70">
                    Safe and secure checkout
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RotateCcw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">30-Day Returns</h4>
                  <p className="text-sm text-foreground/70">
                    Hassle-free returns
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 text-sm">
              <details className="group border-b border-border pb-4">
                <summary className="cursor-pointer flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                  Fabric & Care
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 space-y-2 text-foreground/70">
                  <p>
                    <strong>Fabric:</strong> {product.fabric}
                  </p>
                  <p>
                    <strong>Care:</strong> {product.care}
                  </p>
                </div>
              </details>

              <details className="group border-b border-border pb-4">
                <summary className="cursor-pointer flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                  Features
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-4 space-y-2 text-foreground/70 list-disc list-inside">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-border pt-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} href={`/product/${related.id}`}>
                <div className="group flex flex-col h-full">
                  <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-72">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-2xl font-serif font-bold text-primary mt-auto">
                    ${related.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
