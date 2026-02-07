'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start px-6 sm:px-8 lg:px-12 py-20 lg:py-0 min-h-screen lg:min-h-auto">
          <div className="max-w-md animate-fade-in-up">
            {/* Label */}
            <div className="mb-8">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                New Collection
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              <span className="text-foreground">Timeless</span>
              <br />
              <span className="text-primary">Elegance</span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-foreground/70 mb-10 leading-relaxed">
              Discover our Heritage Collection. Where traditional Middle Eastern artistry meets contemporary sophistication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 group whitespace-nowrap"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/collections"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground/30 text-foreground font-semibold transition-all duration-300 hover:border-primary hover:text-primary whitespace-nowrap"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block h-screen">
          <Image
            src="/hero-fashion.jpg"
            alt="RASHQ Heritage Collection"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20"></div>
        </div>
      </div>

    </section>
  )
}
