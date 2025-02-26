This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🐶 Dog Shelter - Trova una casa per ogni amico a quattro zampe

Un sito web per aiutare i canili a trovare una famiglia per i loro ospiti. Gli utenti possono esplorare gli animali disponibili, visualizzare dettagli sulle loro caratteristiche e contattare direttamente il rifugio.

## 🚀 Demo

🔗 [Live Website](https://caniledimacondo.net)

## 🛠 Tecnologie Utilizzate

- ⚡ [Next.js](https://nextjs.org/)
- 🎨 [CSS Modules](https://github.com/css-modules/css-modules)
- 🗺️ [Leaflet.js](https://leafletjs.com/) per la mappa interattiva
- 🔥 [MongoDB](https://www.mongodb.com/) per la gestione dei dati
- 📡 [Express.js](https://expressjs.com/) per l'API backend

## ✨ Funzionalità

✅ Ricerca e filtro degli animali disponibili per l'adozione  
✅ Pagina dettagliata per ogni animale con foto e descrizione  
✅ Mappa interattiva con la posizione dei rifugi  
✅ Form di contatto per chi è interessato all’adozione  
✅ Design responsivo per mobile e desktop

## 📸 Screenshot

![Anteprima del sito](https://via.placeholder.com/800x400.png?text=Screenshot+del+progetto)

## 🛠 Installazione Locale

````bash
git clone https://github.com/tuo-username/dog-shelter
cd dog-shelter
npm install
npm run dev

## Test

Learnt:
useSearchParams for links to form
dropdowns
[id] - dynamic links
filters
planning for changes: ex change colors, use vars instead of hardcode
stripe / paypal
lightbox (?)
variable favicon
openGraph metadata
relative pathing
local storage 4 favs (?)
useParams to populate form

TODO:
create branch with only 1 version
underline effect while hover on nav (?)
lightbox (maybe?)
refractor navbar

DONE:
hide text selection on filters?
scroll animations - AOS (Animate On Scroll) (o altri?)
bug on previewsection? on altri ospiti simili
carosello still bugged (not perfect but seems good now)
in i nostri ospiti: "Aggiungi filtri" > dropdown per i filtri
put icon as favicon - make it check color scheme
chiudere sublinks su desktop dopo click
page titles? ex. Canile | Home
contact form - put in its own component
donate component
dove siamo - integrate maps

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
