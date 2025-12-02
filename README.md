🎬 Movies Explorer App

A beautiful React Native + Expo application for browsing and searching movies using the TMDB API.

Built with:

Expo + React Native

TypeScript

TailwindCSS (NativeWind)

Custom Hooks (useFetch)

TMDB API

Expo Router (file-based routing)

🚀 Features
🔍 Search Movies

Live movie search

Debounced input (500ms)

Shows "No movies found for 'query'" when empty results

🎞 Movie List

3-column movie grid

Posters, title, and rating

Smooth, fast UI

🎨 UI & UX

Background hero image

Custom search bar

Clean, minimal responsive layout

⚙️ Code Architecture

services/api.ts → TMDB API calls

services/useFetch.ts → Custom fetch hook

Reusable UI components (MoveCard, SearchBar)

📦 Installation
1️⃣ Install dependencies
npm install

2️⃣ Start the app
npx expo start
