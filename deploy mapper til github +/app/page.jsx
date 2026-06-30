// app/page.jsx
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-slate-50 dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Din vei til bedre helse
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              HelsAmi kombinerer personalisert treningsprogram, sunn matkost og målinger - alt i en app. 
              Få støtte fra AI-assistenten din hver dag.
            </p>
            <div className="flex gap-4">
              <Link href="/oppskrifter" className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition">
                Utforsk oppskrifter
              </Link>
              <Link href="/treningplaner" className="px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg font-semibold transition">
                Se treningsplaner
              </Link>
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-xl font-semibold">Oppstart av AI-genererte bilder</p>
              <p className="text-sm mt-2 opacity-90">(Bildene lastes når du starter app)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Hva får du med HelsAmi?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold mb-3">100+ Oppskrifter</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Lage- og næringsrika oppskrifter med makronæringsdetaljer for alle 
              mål og preferanser
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-2xl font-bold mb-3">Treningsplaner</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Fra nybegynner til avansert - oppbygg muskler og vekk fett med 
              vitenskapelig baserte programmer
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3">Sporingsverktøy</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Følg fremgangen din med detaljert analyser av kalori, vekt, styrke 
              og andre metrics
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Klar til å starte?</h2>
          <p className="text-xl mb-8 opacity-95">
            Prøv HelsAmi gratis i 14 dager. Premium-funksjoner og avanserte 
            planer låses opp med abonnement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/oppskrifter" className="px-8 py-3 bg-white text-teal-600 hover:bg-slate-100 rounded-lg font-semibold transition">
              Kom i gang gratis
            </Link>
            <Link href="/profil" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-lg font-semibold transition">
              Logg inn
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Prisplan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border-2 border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-2">Gratis</h3>
            <p className="text-4xl font-bold text-teal-600 mb-6">0 kr<span className="text-lg text-slate-600 dark:text-slate-400">/mnd</span></p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 50+ gratis oppskrifter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 3 gratis treningsplaner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Kalori-tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-300">✗</span> <span className="text-slate-500">Premium oppskrifter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-300">✗</span> <span className="text-slate-500">Avanserte treningsplaner</span>
              </li>
            </ul>

            <button className="w-full px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition">
              Allerede aktiv
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 shadow-xl border-2 border-teal-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              POPULÆRT
            </div>

            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-4xl font-bold text-teal-600 mb-6">49 kr<span className="text-lg text-slate-600 dark:text-slate-400">/mnd</span></p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Alt fra Gratis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> 100+ oppskrifter (alle)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Alle treningsplaner
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Personalisert AI-coach
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-500">✓</span> Avansert analyser
              </li>
            </ul>

            <button className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition">
              Oppgrader til Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
