'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowRight, Check } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: 'Heritage',
      description: 'Celebrating the rich cultural traditions of the Middle East through thoughtfully crafted pieces.',
      icon: '✦',
    },
    {
      title: 'Artistry',
      description: 'Every garment is a work of art, featuring intricate embroidery and premium craftsmanship.',
      icon: '✦',
    },
    {
      title: 'Luxury',
      description: 'Premium materials and meticulous attention to detail in every stitch and seam.',
      icon: '✦',
    },
    {
      title: 'Elegance',
      description: 'Timeless beauty that transcends trends and seasons, creating lasting impressions.',
      icon: '✦',
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description:
        'RASHQ was founded with a vision to bring authentic Middle Eastern luxury fashion to the world stage.',
    },
    {
      year: '2021',
      title: 'First Collection',
      description:
        'Launched our Heritage Collection, featuring hand-embroidered pieces inspired by Arabic calligraphy.',
    },
    {
      year: '2022',
      title: 'Global Recognition',
      description:
        'Featured in international fashion publications and worn by style icons and celebrities.',
    },
    {
      year: '2024',
      title: 'Present Day',
      description:
        'Expanding our reach while maintaining our commitment to quality and cultural authenticity.',
    },
  ]

  const team = [
    {
      role: 'Founder & Creative Director',
      description: 'Visionary designer with 15+ years in haute couture',
    },
    {
      role: 'Chief Artisan',
      description: 'Master craftsperson specializing in traditional embroidery techniques',
    },
    {
      role: 'Lead Designer',
      description: 'Award-winning designer bringing heritage and modernity together',
    },
    {
      role: 'Quality Manager',
      description: 'Ensures every piece meets our exacting luxury standards',
    },
  ]

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-story.jpg"
            alt="RASHQ Brand Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 tracking-tight">
            RASHQ
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Where Heritage Meets Modern Luxury
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            RASHQ is more than a fashion brand—it's a celebration of Middle Eastern cultural artistry, crafted for the modern world.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-background py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
                Preserving Legacy, Creating Future
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                At RASHQ, we believe that fashion is a powerful medium for cultural expression. Our mission is to create luxury pieces that honor the rich traditions of Middle Eastern heritage while embracing contemporary design sensibilities.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Each garment is meticulously crafted using premium materials and traditional embroidery techniques, representing years of artisanal expertise. We're committed to sustainable practices and ethical sourcing, ensuring that luxury doesn't compromise values.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-lg group"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative h-80 sm:h-96 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/collection-1.jpg"
                alt="RASHQ Collections"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-muted py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Values
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-secondary">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-background py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              A Timeline of Growth
            </h2>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xl">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary to-primary/20 mt-4"></div>
                  )}
                </div>

                <div className="pb-12">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-muted py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Team
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Talented Visionaries
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our team is composed of industry experts dedicated to bringing RASHQ's vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6"></div>
                <h3 className="text-lg font-serif font-bold text-primary mb-2">
                  {member.role}
                </h3>
                <p className="text-sm text-foreground/70">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="w-full bg-background py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Our Commitment
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Sustainable Luxury
            </h2>
          </div>

          <div className="bg-muted rounded-lg p-12 space-y-6">
            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ethical Sourcing
                </h3>
                <p className="text-foreground/80">
                  We partner with suppliers who share our values and commitment to fair labor practices.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Premium Materials
                </h3>
                <p className="text-foreground/80">
                  We use only the finest fabrics and materials, sourced responsibly and sustainably.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Eco-Friendly Packaging
                </h3>
                <p className="text-foreground/80">
                  Our packaging is 100% recyclable and made from sustainable materials.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Artisan Support
                </h3>
                <p className="text-foreground/80">
                  We invest in supporting traditional artisans and preserving cultural craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Experience RASHQ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover our collections and become part of the RASHQ community
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
