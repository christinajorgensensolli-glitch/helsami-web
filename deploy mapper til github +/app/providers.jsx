// app/providers.jsx
'use client'

import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Initialisér Stripe
let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    )
  }
  return stripePromise
}

// Globalt state med Zustand
import { create } from 'zustand'

export const useStore = create((set) => ({
  isPremium: false,
  userId: null,
  recipes: [],
  
  setPremium: (isPremium) => set({ isPremium }),
  setUserId: (userId) => set({ userId }),
  setRecipes: (recipes) => set({ recipes }),
}))

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Elements stripe={getStripe()}>
      {children}
    </Elements>
  )
}
