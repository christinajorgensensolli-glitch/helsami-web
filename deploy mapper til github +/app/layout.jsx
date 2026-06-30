// app/layout.jsx
import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'HelsAmi - Helse og Fitness',
  description: 'Din personlige trenings- og kostholdsassistent',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <Providers>
          <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HA</span>
                </div>
                <span className="font-bold text-lg hidden sm:inline">HelsAmi</span>
              </div>
              <div className="flex gap-4">
                <a href="/" className="hover:text-teal-600">Hjem</a>
                <a href="/oppskrifter" className="hover:text-teal-600">Oppskrifter</a>
                <a href="/treningSplaner" className="hover:text-teal-600">Trening</a>
                <a href="/profil" className="hover:text-teal-600">Profil</a>
              </div>
            </div>
          </nav>

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-bold mb-2">HelsAmi</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Din personlige helse- og fitness-kompanjon
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Ressurser</h4>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li><a href="#" className="hover:text-teal-600">Blogg</a></li>
                    <li><a href="#" className="hover:text-teal-600">FAQ</a></li>
                    <li><a href="#" className="hover:text-teal-600">Kontakt</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Juridisk</h4>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li><a href="#" className="hover:text-teal-600">Personvern</a></li>
                    <li><a href="#" className="hover:text-teal-600">Vilkår</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-300 dark:border-slate-700 pt-4 text-center text-sm text-slate-600 dark:text-slate-400">
                © 2026 HelsAmi. Alle rettigheter reservert.
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
