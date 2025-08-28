# BookYourSpaDay — Store Build
- Booking email: bookyourspaday@gmail.com
- Sleek dark/glass theme with Tailwind
- Gallery placeholders (swap any time)
- Ayurveda video: public/media/ayurveda.mp4 (autoplay/muted/loop)
- Store: Quantum Nume Card ($120) with mail-order CTA and Zelle

## Dev
npm install
npm run dev

## Build
npm run build
npm run preview

## Deploy on Vercel (recommended)
1) Push this folder to a new GitHub repo.
2) In Vercel → New Project → Import the repo.
   - Framework: Vite (auto)
   - Build: npm run build
   - Output: dist
3) Deploy. Add your domain in Project → Settings → Domains.

## Vercel CLI (no GitHub)
npm i -g vercel
npm install
npm run build
vercel && vercel --prod

## Swap fonts to Alta
Paste your Adobe Fonts kit link in index.html:
<link rel=\"stylesheet\" href=\"https://use.typekit.net/XXXXXXX.css\">


## Optional payments (one-click)
Set these in Vercel → Project → Settings → Environment Variables:
- `VITE_STRIPE_PAYMENT_LINK` = your Stripe Payment Link URL (product $120)
- `VITE_PAYPAL_LINK` = your PayPal.Me link with amount (e.g., https://paypal.me/yourname/120)

If not set, the Store shows Email/Zelle buttons by default.
