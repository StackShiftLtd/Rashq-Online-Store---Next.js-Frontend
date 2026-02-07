'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Check, ChevronDown } from 'lucide-react'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    sameAddress: true,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const cartItems = [
    {
      id: 1,
      name: 'Emerald Silk Abaya',
      price: 450,
      quantity: 1,
      size: 'M',
      image: '/product-1.jpg',
    },
    {
      id: 2,
      name: 'Gold Embroidered Thobe',
      price: 520,
      quantity: 1,
      size: 'L',
      image: '/product-2.jpg',
    },
  ]

  const subtotal = 970
  const shipping = 0
  const tax = 97
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="w-full">
      <Navigation />

      {/* Progress Bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
                    step >= num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground/50'
                  }`}
                >
                  {step > num ? <Check className="w-5 h-5" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-colors ${
                      step > num ? 'bg-primary' : 'bg-border'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <span
              className={`text-sm font-semibold ${
                step >= 1 ? 'text-primary' : 'text-foreground/50'
              }`}
            >
              Shipping
            </span>
            <span
              className={`text-sm font-semibold ${
                step >= 2 ? 'text-primary' : 'text-foreground/50'
              }`}
            >
              Payment
            </span>
            <span
              className={`text-sm font-semibold ${
                step >= 3 ? 'text-primary' : 'text-foreground/50'
              }`}
            >
              Review
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="saudi">Saudi Arabia</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Delivery Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border border-primary rounded-lg cursor-pointer bg-primary/5">
                      <input type="radio" name="delivery" defaultChecked className="w-4 h-4" />
                      <div>
                        <p className="font-semibold text-foreground">Standard Shipping</p>
                        <p className="text-sm text-foreground/70">5-7 business days - FREE</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-colors">
                      <input type="radio" name="delivery" className="w-4 h-4" />
                      <div>
                        <p className="font-semibold text-foreground">Express Shipping</p>
                        <p className="text-sm text-foreground/70">2-3 business days - $50</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Payment Details
                </h2>

                <div className="bg-muted p-6 rounded-lg mb-8">
                  <p className="text-sm text-foreground/70 mb-2">
                    <strong>Note:</strong> This is a mock checkout. No real payment will be processed.
                  </p>
                  <p className="text-sm text-foreground/70">
                    Use test card: 4242 4242 4242 4242 | Any future date | Any CVC
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={`${formData.firstName} ${formData.lastName}`}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <label className="flex items-center gap-3 mt-8">
                  <input
                    type="checkbox"
                    name="sameAddress"
                    checked={formData.sameAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">
                    Billing address same as shipping
                  </span>
                </label>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Order Review
                </h2>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Shipping Address</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {formData.firstName} {formData.lastName}
                    <br />
                    {formData.address}
                    <br />
                    {formData.city}, {formData.state} {formData.zip}
                    <br />
                    {formData.country}
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Items</h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                        <div>
                          <p className="font-semibold text-foreground">{item.name}</p>
                          <p className="text-sm text-foreground/70">
                            Size: {item.size} | Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-primary">${item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/order-confirmation"
                  className="w-full bg-accent text-accent-foreground font-semibold py-4 rounded-lg hover:bg-accent/90 transition-colors duration-300 uppercase tracking-wide text-center block"
                  onClick={() => {
                    /* Reset form and show confirmation */
                  }}
                >
                  Place Order
                </Link>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 border-2 border-border text-foreground font-semibold py-4 rounded-lg hover:bg-muted transition-colors uppercase tracking-wide"
                >
                  Back
                </button>
              )}
              {step < 3 && (
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wide"
                >
                  Continue
                </button>
              )}
            </div>
          </form>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-20 bg-background rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-foreground/70">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-primary mt-2">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-border text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-accent font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-serif font-bold text-primary">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
