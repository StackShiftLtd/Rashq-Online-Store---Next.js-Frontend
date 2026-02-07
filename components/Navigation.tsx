'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag, Heart, User } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-12 h-12 relative">
              <Image
                src="/rashq-logo.jpg"
                alt="RASHQ Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline text-xl font-serif font-bold text-primary">
              RASHQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/wishlist"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/account"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="/cart"
              className="relative text-foreground hover:text-primary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
