'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Emerald Silk Abaya',
      price: 450,
      quantity: 1,
      size: 'M',
      color: 'Emerald Green',
      image: '/product-1.jpg',
    },
    {
      id: 2,
      name: 'Gold Embroidered Thobe',
      price: 520,
      quantity: 1,
      size: 'L',
      color: 'Gold',
      image: '/product-2.jpg',
    },
  ])

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      )
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 30
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="w-full">
      <Navigation />

      {/* Page Header */}
      <div className="bg-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
            Shopping Cart
          </h1>
          <p className="text-foreground/70 text-lg">
            Review and manage your items before checkout
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6">
              <svg
                className="w-24 h-24 text-muted-foreground mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-foreground/70 mb-8 max-w-md">
              Explore our collections and discover premium fashion pieces
            </p>
            <Link
              href="/shop"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-lg flex items-center gap-2"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                  >
                    {/* Image */}
                    <Link href={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="relative w-32 h-40 bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link href={`/product/${item.id}`} className="group">
                          <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {item.name}
                          </h3>
                        </Link>

                        <div className="text-sm text-foreground/70 space-y-1 mb-4">
                          <p>
                            Size: <span className="font-semibold">{item.size}</span>
                          </p>
                          <p>
                            Color: <span className="font-semibold">{item.color}</span>
                          </p>
                        </div>

                        <p className="text-2xl font-serif font-bold text-primary">
                          ${item.price}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive/80 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link
                href="/shop"
                className="inline-block mt-8 text-primary hover:text-primary/80 font-semibold"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-8 sticky top-24">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-accent font-semibold' : ''}>
                      {shipping === 0 ? (
                        <>Free</>
                      ) : (
                        <>${shipping.toFixed(2)}</>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  {subtotal <= 200 && (
                    <p className="text-xs text-accent font-semibold pt-2">
                      Free shipping on orders over $200
                    </p>
                  )}
                </div>

                <div className="flex justify-between text-xl font-serif font-bold text-primary mb-8">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 uppercase tracking-wide text-center mb-4"
                >
                  Proceed to Checkout
                </Link>

                <button className="w-full border-2 border-border text-foreground font-semibold py-3 rounded-lg hover:bg-muted/50 transition-colors uppercase tracking-wide text-sm">
                  Continue Shopping
                </button>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-border space-y-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-lg">✓</span>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-lg">✓</span>
                    <span>30-day returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-lg">✓</span>
                    <span>Premium packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
