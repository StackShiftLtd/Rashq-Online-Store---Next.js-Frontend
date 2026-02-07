'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="w-full bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
          Stay Updated
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
          Join Our Exclusive Circle
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Receive early access to new collections, exclusive offers, and stories from the RASHQ world
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-primary-foreground text-primary rounded-lg placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
            {!submitted && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <p className="text-primary-foreground/70 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
