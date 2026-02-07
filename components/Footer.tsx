'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Shop: [
      { label: 'New Arrivals', href: '/shop?filter=new' },
      { label: 'Collections', href: '/collections' },
      { label: 'Best Sellers', href: '/shop?filter=bestsellers' },
      { label: 'Gift Cards', href: '/gift-cards' },
    ],
    Customer: [
      { label: 'About RASHQ', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
    ],
    Account: [
      { label: 'My Account', href: '/account' },
      { label: 'Orders', href: '/orders' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'My Preferences', href: '/preferences' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  }

  const socials = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer className="w-full bg-primary text-primary-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-6">RASHQ</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Premium Middle Eastern luxury fashion blending cultural heritage with modern couture.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} RASHQ. All rights reserved. | Crafted with elegance.
            </p>
            <div className="flex items-center justify-start sm:justify-end gap-4">
              <span>Accepted Payment Methods:</span>
              <div className="flex gap-2">
                <span className="text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                  Visa
                </span>
                <span className="text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                  Mastercard
                </span>
                <span className="text-xs bg-primary-foreground/10 px-2 py-1 rounded">
                  Apple Pay
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-primary-foreground/60 text-xs">
          <p>Shipping & Returns | Size Guide | Contact Us</p>
        </div>
      </div>
    </footer>
  )
}
