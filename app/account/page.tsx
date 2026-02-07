'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  User,
  Heart,
  Package,
  MapPin,
  LogOut,
  ChevronRight,
  Download,
  ArrowRight,
} from 'lucide-react'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const userInfo = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joined: 'January 15, 2024',
  }

  const orders = [
    {
      id: 'RASHQ-2024-0042',
      date: 'February 7, 2024',
      total: 1067,
      status: 'Processing',
      items: [
        {
          name: 'Emerald Silk Abaya',
          image: '/product-1.jpg',
          quantity: 1,
        },
        {
          name: 'Gold Embroidered Thobe',
          image: '/product-2.jpg',
          quantity: 1,
        },
      ],
    },
    {
      id: 'RASHQ-2024-0001',
      date: 'January 20, 2024',
      total: 480,
      status: 'Delivered',
      items: [
        {
          name: 'Rose Silk Evening Wear',
          image: '/product-3.jpg',
          quantity: 1,
        },
      ],
    },
  ]

  const wishlist = [
    {
      id: 1,
      name: 'Flame Gradient Kaftan',
      price: 390,
      image: '/collection-1.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Heritage Embroidered Cape',
      price: 380,
      image: '/product-1.jpg',
      inStock: false,
    },
    {
      id: 3,
      name: 'Embroidered Evening Gown',
      price: 650,
      image: '/product-3.jpg',
      inStock: true,
    },
  ]

  const addresses = [
    {
      id: 1,
      name: 'Home',
      address: '123 Luxury Avenue, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      default: true,
    },
    {
      id: 2,
      name: 'Work',
      address: '456 Fashion Blvd, San Francisco, CA 94106',
      phone: '+1 (555) 123-4568',
      default: false,
    },
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ]

  return (
    <div className="w-full">
      <Navigation />

      {/* Page Header */}
      <div className="bg-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-2">
                My Account
              </h1>
              <p className="text-foreground/70 text-lg">Welcome back, {userInfo.name}</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 px-6 py-3 text-foreground hover:text-primary transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-foreground text-center mb-1">
                {userInfo.name}
              </h3>
              <p className="text-sm text-foreground/70 text-center">{userInfo.email}</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{tab.label}</span>
                    {activeTab === tab.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                )
              })}
            </nav>

            <button className="w-full mt-8 flex items-center justify-center gap-2 px-4 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors lg:hidden">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-primary">Account Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Personal Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-foreground/70">Full Name</p>
                        <p className="font-semibold text-foreground">{userInfo.name}</p>
                      </div>
                      <div>
                        <p className="text-foreground/70">Email</p>
                        <p className="font-semibold text-foreground">{userInfo.email}</p>
                      </div>
                      <div>
                        <p className="text-foreground/70">Phone</p>
                        <p className="font-semibold text-foreground">{userInfo.phone}</p>
                      </div>
                      <div>
                        <p className="text-foreground/70">Member Since</p>
                        <p className="font-semibold text-foreground">{userInfo.joined}</p>
                      </div>
                    </div>
                    <button className="mt-6 w-full px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-background transition-colors">
                      Edit Profile
                    </button>
                  </div>

                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Account Stats
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/70 mb-1">Total Orders</p>
                        <p className="text-3xl font-bold text-primary">2</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70 mb-1">Total Spent</p>
                        <p className="text-3xl font-bold text-primary">$1,547</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70 mb-1">Wishlist Items</p>
                        <p className="text-3xl font-bold text-primary">3</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Account Settings
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-background transition-colors flex items-center justify-between group">
                      <span className="font-semibold text-foreground">Change Password</span>
                      <ChevronRight className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
                    </button>
                    <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-background transition-colors flex items-center justify-between group">
                      <span className="font-semibold text-foreground">Email Preferences</span>
                      <ChevronRight className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
                    </button>
                    <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-background transition-colors flex items-center justify-between group">
                      <span className="font-semibold text-foreground">Privacy Settings</span>
                      <ChevronRight className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-primary">Order History</h2>

                {orders.length === 0 ? (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <p className="text-lg text-foreground/70 mb-4">No orders yet</p>
                    <Link
                      href="/shop"
                      className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90"
                    >
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="bg-muted px-6 py-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{order.id}</h3>
                            <p className="text-sm text-foreground/70">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-serif font-bold text-primary">
                              ${order.total}
                            </p>
                            <span
                              className={`text-xs font-semibold uppercase px-3 py-1 rounded-full ${
                                order.status === 'Delivered'
                                  ? 'bg-accent/20 text-accent'
                                  : 'bg-secondary/20 text-secondary'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex gap-4 mb-6">
                            {order.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="relative w-20 h-24 bg-background rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                              <ArrowRight className="w-4 h-4" />
                              Track Order
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                              <Download className="w-4 h-4" />
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-primary">My Wishlist</h2>

                {wishlist.length === 0 ? (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <p className="text-lg text-foreground/70 mb-4">Wishlist is empty</p>
                    <Link
                      href="/shop"
                      className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90"
                    >
                      Explore Products
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wishlist.map((item) => (
                      <div key={item.id} className="group flex flex-col h-full">
                        <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-72">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-background font-semibold">
                                Out of Stock
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                          {item.name}
                        </h3>

                        <p className="text-2xl font-serif font-bold text-primary mt-auto mb-4">
                          ${item.price}
                        </p>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm disabled:opacity-50"
                            disabled={!item.inStock}
                          >
                            Add to Cart
                          </button>
                          <button className="flex-1 border border-border text-foreground font-semibold py-2 rounded-lg hover:bg-muted transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-serif font-bold text-primary">
                    Saved Addresses
                  </h2>
                  <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`border-2 rounded-lg p-6 transition-all ${
                        addr.default
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-serif font-bold text-lg text-foreground">
                          {addr.name}
                        </h3>
                        {addr.default && (
                          <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                            Default
                          </span>
                        )}
                      </div>

                      <p className="text-foreground/80 mb-4">{addr.address}</p>
                      <p className="text-sm text-foreground/70 mb-4">{addr.phone}</p>

                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm">
                          Edit
                        </button>
                        <button className="flex-1 px-4 py-2 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
