// app/treningsplaner/page.jsx
'use client'

import Link from 'next/link'

const workoutPlans = [
  {
    id: 1,
    tittel: 'Nybegynner Styrke',
    beskrivelse: 'Perfekt for deg som starter på treningsreisen. Opplær på grunnleggende øvelser.',
    uker: 4,
    dager: 3,
    kalori: '300-400 kcal',
    fokus: 'Styrke, fundamentals',
    level: 'Nybegynner',
    premium: false,
    icon: '💪'
  },
  {
    id: 2,
    tittel: 'HIIT Kardio',
    beskrivelse: 'Høyintensiv intervalløkt for maksimal fettforbrenning på kort tid.',
    uker: 4,
    dager: 3,
    kalori: '400-500 kcal',
    fokus: 'Kardio, utholdenhet',
    level: 'Nybegynner',
    premium: false,
    icon: '🔥'
  },
  {
    id: 3,
    tittel: 'Muskelbygging Intermediate',
    beskrivelse: 'Hypertrofi-fokusert program med periodisering og progressive overload.',
    uker: 8,
    dager: 4,
    kalori: '500-600 kcal',
    fokus: 'Muskelbygging, styrke',
    level: 'Intermediate',
    premium: true,
    icon: '🏋️'
  },
  {
    id: 4,
    tittel: 'Full Body Intermediate',
    beskrivelse: 'Komplett treningsprogram som jobber alle muskelgrupper hver uke.',
    uker: 6,
    dager: 3,
    kalori: '450-550 kcal',
    fokus: 'Generell fitness',
    level: 'Intermediate',
    premium: false,
    icon: '🤸'
  },
  {
    id: 5,
    tittel: 'Avansert Styrkeløfting',
    beskrivelse: 'Spesialisert program for squat, bench og deadlift med max strength fokus.',
    uker: 12,
    dager: 4,
    kalori: '600-800 kcal',
    fokus: 'Max styrke, powerlifting',
    level: 'Avansert',
    premium: true,
    icon: '🦾'
  }
]

export default function WorkoutPlansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Treningsplaner</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Velg en treningsplan tilpasset ditt nivå og mål
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workoutPlans.map(plan => (
          <div
            key={plan.id}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-4xl">{plan.icon}</div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.tittel}</h3>
              
              <div className="flex gap-2 mt-4">
                <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  {plan.level}
                </span>
                {plan.premium && (
                  <span className="inline-block bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    PREMIUM
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {plan.beskrivelse}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Varighet</p>
                  <p className="font-bold text-lg">{plan.uker} uker</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Dager/uke</p>
                  <p className="font-bold text-lg">{plan.dager}x</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg col-span-2">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Kalori per økt</p>
                  <p className="font-bold text-lg">{plan.kalori}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mb-6 p-4 bg-teal-50 dark:bg-slate-900 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold text-teal-600 dark:text-teal-400">Fokus:</span>
                  <br/>
                  {plan.fokus}
                </p>
              </div>

              {/* Button */}
              <button className={`w-full px-4 py-3 rounded-lg font-semibold transition ${
                plan.premium
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}>
                {plan.premium ? '🔓 Oppgrader for å låse opp' : '✓ Kom i gang'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="mt-20 bg-slate-100 dark:bg-slate-900 rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-8">Ofte stilte spørsmål</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Hvilket nivå er rett for meg?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Nybegynner: Liten eller ingen treningserfaring. Intermediate: 6-12 mnd erfaring. Avansert: 2+ år erfaring.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Kan jeg bytte plan underveis?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Ja! Du kan bytte plan når som helst. Vi anbefaler dog å fullføre minst 4 uker før bytte.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Hva hvis jeg ikke har tilgang til treningsutstyr?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Vi har bodyweight-varianter av de fleste øvelser. Alternativer blir presentert i appen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Hvordan kombineres trening med kosthold?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Bruk oppskriftene våre som tilbakes til målet ditt. Gå til oppskrifter-seksjonen for kalori-matched målinger.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
