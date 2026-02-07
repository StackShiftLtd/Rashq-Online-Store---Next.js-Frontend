'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Check, Download, Package, Truck, MapPin, Mail, ArrowRight } from 'lucide-react'

export default function OrderConfirmationPage() {
  const orderNumber = 'RASHQ-2024-0042'
  const orderDate = 'February 7, 2024'
  const estimatedDelivery = 'February 14, 2024'

  const orderItems = [
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
  ]

  const subtotal = 970
  const shipping = 0
  const tax = 97
  const total = subtotal + shipping + tax

  return (
    <div className="w-full">
      <Navigation />

      {/* Success Banner */}
      <div className="bg-accent text-accent-foreground py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-accent-foreground/20 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-2">
            Order Confirmed!
          </h1>
          <p className="text-accent-foreground/90 text-lg">
            Thank you for your purchase from RASHQ
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Order Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70 mb-1">Order Number</p>
                <p className="text-xl font-semibold text-foreground">{orderNumber}</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70 mb-1">Confirmation Email</p>
                <p className="text-lg font-semibold text-foreground">Sent to your email</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground/70 mb-1">Estimated Delivery</p>
                <p className="text-lg font-semibold text-foreground">{estimatedDelivery}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Order Details */}
          <div className="lg:col-span-2">
            {/* Order Items */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Order Items
              </h2>

              <div className="space-y-6 bg-muted rounded-lg p-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="relative w-24 h-32 bg-background rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                        {item.name}
                      </h3>

                      <div className="text-sm text-foreground/70 space-y-1 mb-3">
                        <p>
                          <strong>Size:</strong> {item.size}
                        </p>
                        <p>
                          <strong>Color:</strong> {item.color}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {item.quantity}
                        </p>
                      </div>

                      <p className="text-lg font-serif font-bold text-primary">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-muted rounded-lg p-6 mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Shipping Address
              </h3>

              <p className="text-foreground/80 leading-relaxed">
                Sarah Johnson
                <br />
                123 Luxury Avenue
                <br />
                San Francisco, CA 94105
                <br />
                United States
                <br />
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>

            {/* Tracking Info */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Order Status
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: 'Order Confirmed',
                    description: 'Your order has been received',
                    completed: true,
                  },
                  {
                    title: 'Processing',
                    description: 'We are preparing your items',
                    completed: false,
                  },
                  {
                    title: 'Shipped',
                    description: 'Your package is on the way',
                    completed: false,
                  },
                  {
                    title: 'Delivered',
                    description: `Expected ${estimatedDelivery}`,
                    completed: false,
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.completed
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted-foreground/30 text-foreground/50'
                      }`}
                    >
                      {step.completed ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-semibold">{idx + 1}</span>
                      )}
                    </div>

                    <div className={step.completed ? '' : 'opacity-50'}>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-border text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-semibold text-foreground">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Shipping</span>
                  <span className="font-semibold text-accent">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Tax</span>
                  <span className="font-semibold text-foreground">${tax}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-serif font-bold text-primary mb-8">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                  <Download className="w-4 h-4" />
                  Download Invoice
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Track Order
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm text-foreground/70">
                <p className="mb-2">
                  <strong className="text-foreground">Need help?</strong>
                </p>
                <p className="mb-3">
                  Check your email for tracking details and return instructions.
                </p>
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Thank You for Your Order!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We appreciate your business. Explore more of our collections while you wait for your order.
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
