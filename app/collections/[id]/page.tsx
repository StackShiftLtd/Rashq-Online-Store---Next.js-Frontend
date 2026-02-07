'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react'

interface CollectionDetailPageProps {
  params: {
    id: string
  }
}

export default function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const [wishlist, setWishlist] = useState<string[]>([])

  const collectionsData: Record<
    string,
    {
      name: string
      description: string
      longDescription: string
      image: string
      items: number
      products: Array<{
        id: string
        name: string
        price: number
        image: string
        category: string
      }>
    }
  > = {
    heritage: {
      name: 'Heritage Collection',
      description:
        'Timeless pieces inspired by Arabic heritage and cultural artistry.',
      longDescription:
        'Each piece celebrates the rich traditions of Middle Eastern craftsmanship with modern sensibility. Our Heritage Collection represents the pinnacle of elegance, combining ancestral techniques with contemporary design.',
      image: '/collection-1.jpg',
      items: 24,
      products: [
        {
          id: '1',
          name: 'Heritage Abaya',
          price: 450,
          image: '/product-1.jpg',
          category: 'Abayas',
        },
        {
          id: '2',
          name: 'Traditional Thobe',
          price: 380,
          image: '/product-2.jpg',
          category: 'Thobes',
        },
        {
          id: '3',
          name: 'Rose Embroidered Kaftan',
          price: 520,
          image: '/product-3.jpg',
          category: 'Kaftans',
        },
        {
          id: '4',
          name: 'Gold Accented Gown',
          price: 580,
          image: '/product-1.jpg',
          category: 'Gowns',
        },
      ],
    },
    'modern-luxe': {
      name: 'Modern Luxe',
      description:
        'Contemporary cuts with traditional embellishments for the modern individual.',
      longDescription:
        'This collection bridges the gap between classic elegance and modern fashion, perfect for those who appreciate both tradition and contemporary style. Each piece is meticulously crafted to offer comfort without compromising on luxury.',
      image: '/collection-1.jpg',
      items: 18,
      products: [
        {
          id: '5',
          name: 'Modern Abaya',
          price: 420,
          image: '/product-2.jpg',
          category: 'Abayas',
        },
        {
          id: '6',
          name: 'Contemporary Bisht',
          price: 495,
          image: '/product-1.jpg',
          category: 'Bishts',
        },
        {
          id: '7',
          name: 'Minimalist Dress',
          price: 350,
          image: '/product-3.jpg',
          category: 'Dresses',
        },
        {
          id: '8',
          name: 'Sleek Evening Wear',
          price: 550,
          image: '/product-2.jpg',
          category: 'Evening Wear',
        },
      ],
    },
    flame: {
      name: 'Flame Collection',
      description:
        'Bold designs featuring signature gold and amber accents inspiring confidence.',
      longDescription:
        'Inspired by the warmth of fire and the richness of precious metals, this collection radiates confidence and sophistication. Perfect for those who want to make a bold statement with their fashion choices.',
      image: '/collection-1.jpg',
      items: 15,
      products: [
        {
          id: '9',
          name: 'Gold Flame Abaya',
          price: 540,
          image: '/product-1.jpg',
          category: 'Abayas',
        },
        {
          id: '10',
          name: 'Amber Embroidered Kaftan',
          price: 600,
          image: '/product-3.jpg',
          category: 'Kaftans',
        },
        {
          id: '11',
          name: 'Fire-Inspired Gown',
          price: 650,
          image: '/product-2.jpg',
          category: 'Gowns',
        },
        {
          id: '12',
          name: 'Golden Thread Dress',
          price: 480,
          image: '/product-1.jpg',
          category: 'Dresses',
        },
      ],
    },
    'rose-garden': {
      name: 'Rose Garden',
      description:
        'Delicate and romantic collection celebrating the timeless beauty of roses.',
      longDescription:
        'Soft, luxurious, and eternally elegant. The Rose Garden collection showcases intricate floral embroidery and romantic silhouettes that celebrate the natural beauty of blooming roses.',
      image: '/product-3.jpg',
      items: 12,
      products: [
        {
          id: '13',
          name: 'Rose Petal Abaya',
          price: 400,
          image: '/product-3.jpg',
          category: 'Abayas',
        },
        {
          id: '14',
          name: 'Romantic Rose Kaftan',
          price: 510,
          image: '/product-1.jpg',
          category: 'Kaftans',
        },
        {
          id: '15',
          name: 'Garden-Inspired Dress',
          price: 370,
          image: '/product-2.jpg',
          category: 'Dresses',
        },
        {
          id: '16',
          name: 'Rose Embroidered Gown',
          price: 620,
          image: '/product-3.jpg',
          category: 'Gowns',
        },
      ],
    },
    'emerald-dreams': {
      name: 'Emerald Dreams',
      description:
        'Deep emerald tones combined with intricate gold work embodying luxury.',
      longDescription:
        'Deep, rich emerald tones combined with intricate gold work create a collection that embodies luxury, mystery, and timeless sophistication. Each piece is a dream realized in fabric and thread.',
      image: '/product-1.jpg',
      items: 20,
      products: [
        {
          id: '17',
          name: 'Emerald Abaya',
          price: 460,
          image: '/product-1.jpg',
          category: 'Abayas',
        },
        {
          id: '18',
          name: 'Dream-Inspired Kaftan',
          price: 530,
          image: '/product-3.jpg',
          category: 'Kaftans',
        },
        {
          id: '19',
          name: 'Emerald Elegance Gown',
          price: 630,
          image: '/product-2.jpg',
          category: 'Gowns',
        },
        {
          id: '20',
          name: 'Golden Dream Dress',
          price: 410,
          image: '/product-1.jpg',
          category: 'Dresses',
        },
      ],
    },
    'midnight-elegance': {
      name: 'Midnight Elegance',
      description:
        'Dark, dramatic, and sophisticated collection for special occasions.',
      longDescription:
        'Dark, dramatic, and undeniably sophisticated. Perfect for evening wear and special occasions, this collection exudes refined luxury and timeless elegance.',
      image: '/product-2.jpg',
      items: 16,
      products: [
        {
          id: '21',
          name: 'Midnight Abaya',
          price: 470,
          image: '/product-2.jpg',
          category: 'Abayas',
        },
        {
          id: '22',
          name: 'Elegant Midnight Kaftan',
          price: 550,
          image: '/product-1.jpg',
          category: 'Kaftans',
        },
        {
          id: '23',
          name: 'Midnight Gala Gown',
          price: 680,
          image: '/product-3.jpg',
          category: 'Gowns',
        },
        {
          id: '24',
          name: 'Sophisticated Evening Wear',
          price: 490,
          image: '/product-2.jpg',
          category: 'Evening Wear',
        },
      ],
    },
  }

  const collection = collectionsData[params.id]

  if (!collection) {
    return (
      <div className="w-full">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              Collection Not Found
            </h1>
            <p className="text-foreground/70 mb-8">
              The collection you're looking for doesn't exist.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="w-full">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collections
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-muted overflow-hidden mb-16">
        <Image
          src={collection.image || '/placeholder.svg'}
          alt={collection.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-primary-foreground mb-4">
              {collection.name}
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              {collection.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-2">
            Products in this Collection
          </h2>
          <p className="text-foreground/70">
            {collection.items} items available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collection.products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg bg-muted h-64">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    toggleWishlist(product.id)
                  }}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(product.id)
                        ? 'fill-accent text-accent'
                        : 'text-foreground'
                    }`}
                  />
                </button>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-foreground/70 mb-3">{product.category}</p>
              <p className="text-lg font-semibold text-primary">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Explore More Collections
          </h2>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
          >
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
