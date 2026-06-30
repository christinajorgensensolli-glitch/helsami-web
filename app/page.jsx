'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          HelsAmi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Din personlige trenings- og kostholdsassistent
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link 
            href="/oppskrifter"
            className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Oppskrifter
          </Link>
          <Link 
            href="/treningsplaner"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Treningsplaner
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Priser</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Gratis</h3>
            <p className="text-gray-600 mb-6">Basis oppskrifter og treningsplaner</p>
            <button className="w-full px-6 py-2 bg-gray-200 text-gray-800 rounded-lg">
              Komme i gang
            </button>
          </div>
          <div className="border-2 border-teal-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Premium - 49 kr/mnd</h3>
            <p className="text-gray-600 mb-6">Alt fra gratis + eksklusivt innhold</p>
            <button className="w-full px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              Kjøp Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
