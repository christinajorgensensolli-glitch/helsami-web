// app/oppskrifter/page.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { recipes } from '@/lib/recipes'
import Image from 'next/image'

export default function OppskilterPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['Alle', 'Fisk', 'Kylling', 'Kjøtt', 'Vegetar', 'Frokost']

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'Alle' || recipe.kategori === selectedCategory
    const matchesSearch = recipe.tittel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.beskrivelse.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Oppskrifter</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Utforsk hundrevis av lage- og næringsrika oppskrifter
        </p>
      </div>

      {/* Søk og filter */}
      <div className="mb-12 space-y-6">
        {/* Søkefelt */}
        <input
          type="text"
          placeholder="Søk oppskrifter..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:border-teal-500 focus:outline-none"
        />

        {/* Kategorier */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Oppskrifter grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} href={`/oppskrifter/${recipe.id}`}>
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer h-full flex flex-col">
              {/* Bilde placeholder - vil bli AI-generert */}
              <div className="relative w-full h-48 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl mb-2">🍳</div>
                  <p className="text-sm text-slate-600">Bilde genereres...</p>
                  <p className="text-xs text-slate-500 mt-1">{recipe.tittel}</p>
                </div>

                {/* Premium badge */}
                {recipe.premiun && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                )}
              </div>

              {/* Innhold */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{recipe.tittel}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
                  {recipe.beskrivelse}
                </p>

                {/* Makroer */}
                <div className="grid grid-cols-4 gap-2 mb-4 text-center">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-2">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Kcal</div>
                    <div className="font-bold text-sm">{recipe.kalori}</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-2">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Protein</div>
                    <div className="font-bold text-sm">{recipe.protein}g</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-2">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Karbs</div>
                    <div className="font-bold text-sm">{recipe.karbs}g</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-2">
                    <div className="text-xs text-slate-600 dark:text-slate-400">Fett</div>
                    <div className="font-bold text-sm">{recipe.fett}g</div>
                  </div>
                </div>

                {/* Tid */}
                <div className="text-xs text-slate-500 flex gap-4">
                  <span>⏱️ {recipe.forberedelse + recipe.tilberedning} min</span>
                  <span>🍽️ {recipe.porsjoner} porsjoner</span>
                </div>
              </div>

              {/* Button */}
              <div className="border-t border-slate-200 dark:border-slate-700 p-4">
                <button className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition">
                  Se oppskrift
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Ingen oppskrifter funnet. Prøv et annet søk!
          </p>
        </div>
      )}
    </div>
  )
}
