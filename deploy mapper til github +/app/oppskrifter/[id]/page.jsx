// app/oppskrifter/[id]/page.jsx
'use client'

import { recipes } from '@/lib/recipes'
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function RecipeDetailPage() {
  const params = useParams()
  const recipe = recipes.find(r => r.id === parseInt(params.id))
  const [servings, setServings] = useState(recipe?.porsjoner || 2)

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-xl">Oppskrift ikke funnet</p>
      </div>
    )
  }

  const scaleFactor = servings / recipe.porsjoner

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Venstre: Bilde */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-square bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center overflow-hidden mb-6">
            <div className="text-center">
              <div className="text-8xl mb-4">🍳</div>
              <p className="text-lg text-slate-600">Bilde genereres...</p>
              <p className="text-sm text-slate-500 mt-2">{recipe.tittel}</p>
            </div>

            {recipe.premiun && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                PREMIUM
              </div>
            )}
          </div>

          {/* Instruksjoner */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Fremgangsmåte</h2>
            <ol className="space-y-4">
              {recipe.instruksjoner.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-lg pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Høyre: Ingredienser og info */}
        <div>
          {/* Header info */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6">
            <h1 className="text-4xl font-bold mb-4">{recipe.tittel}</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
              {recipe.beskrivelse}
            </p>

            {/* Tider */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-xs text-slate-600 dark:text-slate-400">Forberedelse</p>
                <p className="text-2xl font-bold">{recipe.forberedelse} min</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-xs text-slate-600 dark:text-slate-400">Tilberedning</p>
                <p className="text-2xl font-bold">{recipe.tilberedning} min</p>
              </div>
            </div>

            {/* Serverings kontroll */}
            <div className="mb-6">
              <label className="text-sm font-semibold mb-2 block">Porsjoner</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded hover:bg-slate-300 dark:hover:bg-slate-600 font-bold"
                >
                  −
                </button>
                <input
                  type="number"
                  value={servings}
                  onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center px-3 py-2 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800"
                />
                <button
                  onClick={() => setServings(servings + 1)}
                  className="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded hover:bg-slate-300 dark:hover:bg-slate-600 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Makroer */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold mb-6">Næringsinnhold (per porsjon)</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Kalori</span>
                  <span className="text-lg font-bold text-teal-600">{Math.round(recipe.kalori * scaleFactor)} kcal</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Protein</span>
                  <span className="text-lg font-bold text-blue-600">{Math.round(recipe.protein * scaleFactor)}g</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(recipe.protein / 50) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Karbohydrater</span>
                  <span className="text-lg font-bold text-yellow-600">{Math.round(recipe.karbs * scaleFactor)}g</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(recipe.karbs / 100) * 100}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Fett</span>
                  <span className="text-lg font-bold text-orange-600">{Math.round(recipe.fett * scaleFactor)}g</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${(recipe.fett / 50) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredienser */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Ingredienser</h3>
            <ul className="space-y-3">
              {recipe.ingredienser.map((ingredient, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 rounded border-2 border-teal-600 cursor-pointer"
                  />
                  <span className="text-slate-700 dark:text-slate-300">{ingredient}</span>
                </li>
              ))}
            </ul>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="w-full mt-8 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition"
            >
              Skriv ut oppskrift
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
