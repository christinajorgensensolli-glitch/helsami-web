[README.md](https://github.com/user-attachments/files/29505301/README.md)
# HelsAmi Web - Next.js App

Fullstendig Next.js web-applikasjon for HelsAmi med 10 oppskrifter, Stripe-betaling og AI-bildegenerering.

## 📋 Innhold

- ✅ 10 oppskrifter med AI-genererte bilder
- ✅ Stripe Premium-abonnement (49 kr/mnd)
- ✅ Søk og filtreringssystem
- ✅ Responsiv design (mobil/tablet/desktop)
- ✅ Dark mode
- ✅ Netlify deployment-klar
- ✅ Norsk bokmål

## 🚀 Rask start

### 1. Installasjon

```bash
cd helsami-web
npm install
# eller
yarn install
```

### 2. Environment variabler

Kopier `.env.local` og fyll inn Stripe-nøkler:

```bash
cp .env.local.example .env.local
```

Rediger `.env.local`:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Hent nøklene fra: https://dashboard.stripe.com/apikeys

### 3. Kjør lokalt

```bash
npm run dev
```

Åpne http://localhost:3000 i nettleseren.

## 🎨 AI-bildegenerering

### Alternativ 1: Replicate (Anbefalt)

1. Lag konto på https://replicate.com
2. Hent API-nøkkel fra https://replicate.com/account
3. Kjør script:

```bash
export REPLICATE_API_TOKEN=r8_...
node scripts/generate-all-images.js
```

Bilder lagres i `public/images/recipes/1.jpg`, `2.jpg`, etc.

### Alternativ 2: Hugging Face

1. Lag konto på https://huggingface.co
2. Hent token fra https://huggingface.co/settings/tokens
3. Kjør:

```bash
export HF_API_TOKEN=hf_...
node scripts/generate-all-images.js
```

### Alternativ 3: SVG-illustrasjoner (Raskest)

Vi har lagt til SVG-fallback som vises når bilder ikke er generert.

## 📦 Deployment til Netlify

### Oppsett (første gang)

1. **Push koden til GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Koble til Netlify:**
   - Gå til https://app.netlify.com
   - Klikk "New site from Git"
   - Velg GitHub-repo
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Sett domene:**
   - Gå til Site settings → Domain management
   - Legg til helsami.ai
   - Oppdater DNS-innstillinger

4. **Sett Stripe-variabler:**
   - Gå til Site settings → Build & deploy → Environment
   - Legg til:
     - `STRIPE_SECRET_KEY=sk_live_...`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...`
     - `NEXT_PUBLIC_BASE_URL=https://helsami.ai`

### Auto-deployment

Hver gang du pusher til main-branch, deployes appen automatisk.

## 🏗️ Filstruktur

```
helsami-web/
├── app/
│   ├── layout.jsx          # Hovedlayout
│   ├── page.jsx            # Hjemmeside
│   ├── globals.css         # Global CSS
│   ├── providers.jsx       # Stripe + State
│   └── oppskrifter/
│       ├── page.jsx        # Oppskriftliste
│       └── [id]/
│           └── page.jsx    # Oppskrift detalj
├── pages/
│   ├── api/
│   │   ├── checkout.js     # Stripe API
│   │   └── generate-image.js
│   └── _app.js
├── lib/
│   └── recipes.js          # Oppskrift data
├── scripts/
│   └── generate-all-images.js  # AI batch-generering
├── public/
│   └── images/
│       └── recipes/        # Genererte bilder
├── netlify.toml            # Netlify config
├── next.config.js
├── tailwind.config.js
├── package.json
└── .env.local              # Hemmeligheter (git ignore)
```

## 💳 Stripe Integration

### Testkort

For testing i development:
- Kortnummer: `4242 4242 4242 4242`
- Utløp: Enhver fremtidig dato
- CVC: Vilkårlig 3 sifre

### Webhook (for produksjon)

Sett opp Stripe webhook på:
- Événement: `customer.subscription.updated`, `customer.subscription.deleted`
- Endpoint: `https://helsami.ai/api/webhooks`

## 📱 Mobilresponsiv

Appen er fullt responsiv:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🔍 SEO & Performance

- ✅ Meta tags (title, description)
- ✅ Open Graph (social sharing)
- ✅ Image optimization
- ✅ CSS minification
- ✅ Fast rendering

## 🐛 Troubleshooting

### Stripe error: "Public key not set"
- Sjekk `.env.local`
- Viss omstart av `npm run dev`

### Bilder vises ikke
- Kjør `node scripts/generate-all-images.js`
- Check `public/images/recipes/` folder

### Build feil på Netlify
- Sjekk build logs på Netlify dashboard
- Viss `.env` variabler er satt korrekt

## 📚 Resources

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com
- Stripe: https://stripe.com/docs
- Replicate: https://replicate.com/docs

## ✅ Sjekkliste før launch

- [ ] Stripe live keys satt inn
- [ ] Domene helsami.ai konfigurert
- [ ] Bilder generert og lastet opp
- [ ] Testet checkout-flow
- [ ] Meta tags og SEO sjekket
- [ ] Privacy policy / Terms lagd
- [ ] Email-verifikasjon (valgfritt)
- [ ] Analytics (Google/Plausible)

---

**Laget av Claude for Christina**
Sist oppdatert: Juni 2026
