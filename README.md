# ⚽ Football Legends Portal

A premium, visually stunning Vue 3 single-page web application featuring football player profiles, interactive dashboards, favoriting systems, custom forms, a dependency injection playground, and an administrative CRUD interface powered by a mock JSON API.

---

## ✨ Features

- **🏆 Football Legends Profiles**: Dedicated, immersive pages for legends like **Messi**, **Neymar**, **Ronaldo**, and **Sunil Chhetri** containing details like club, country, position, and jersey numbers.
- **🎨 Modern Dark Theme & Glassmorphism**: Tailored from scratch using Google Fonts (Outfit), customized radial gradients, vibrant glow-hover animations, and premium glassmorphic cards.
- **💖 Favorite System (Pinia)**: Pinia-powered state management to save your favorite players, with an intelligent Vue Router navigation guard (`beforeEach`) preventing entry to `/favorites` until at least one player is favorited.
- **⚡ Administrative CRUD Dashboard**: Fetch, add, update, and delete player profiles in real-time using an Axios service communicating with a local database (`db.json`).
- **📝 Reactive Name Entry Forms**: Real-time two-way data-bound form to capture names and display them instantly as grid preview cards.
- **🧩 Dependency Injection Playground**: A structured visual representation of Vue's `provide` and `inject` API nesting layers, color-coded by hierarchy.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **State Management**: Pinia (Player Store)
- **Routing**: Vue Router (Dynamic paths & navigation guards)
- **HTTP Client**: Axios (Football API service)
- **Styling**: Vanilla CSS with custom design tokens, CSS variables, and Google Font imports

### Workspace Directory Structure

```text
├── db.json                 # Local database for Football CRUD API
├── index.html              # Entry HTML template
├── src/
│   ├── App.vue             # Root component with router outlet
│   ├── main.js             # Application entrypoint & global CSS imports
│   ├── assets/
│   │   ├── main.css        # Global CSS variables, scrollbars, and Outfit font
│   │   ├── card_design.css # Glowing glassmorphic styles for PlayerCards
│   │   └── base.css        # Core Vue resets and tokens
│   ├── components/
│   │   ├── BackBtn.vue      # Animated back navigation button
│   │   ├── FavouriteBtn.vue # Scoped add-to-favorites button
│   │   ├── PlayerCard.vue   # Template wrapper for player profiles
│   │   ├── PlayerInfo.vue   # Display component using inject playerName
│   │   ├── ParentBox.vue    # Provide/inject parent layout (Indigo border)
│   │   ├── ChildBox.vue     # Provide/inject child layout (Amber border)
│   │   ├── GrandChildBox.vue# Provide/inject grandchild layout (Emerald border)
│   │   ├── FormData.vue     # Component to render submitted names as grid cards
│   │   └── HelloWorld.vue   # Starter intro header styled with gradients
│   ├── views/
│   │   ├── HomeView.vue         # Main vertical glass dashboard panel
│   │   ├── MessiView.vue        # Istanbul Ankara Messi View
│   │   ├── NeymarView.vue       # Neymar Junior View
│   │   ├── RonaldoView.vue      # Cristiano Ronaldo View
│   │   ├── ChhetriView.vue      # Sunil Chhetri View
│   │   ├── FavouriteView.vue    # Grid of saved favorite legends
│   │   ├── FootballApiView.vue  # Full CRUD controls, forms, and results
│   │   ├── formView.vue         # Interactive name submit forms & cards
│   │   ├── ProvideInjectView.vue# Dependency Injection playground page
│   │   └── AboutView.vue        # Clean dashboard information view
│   ├── services/
│   │   └── footballService.js   # Axios client config for mock API
│   ├── stores/
│   │   └── playerStore.js       # Pinia favorite player store
│   └── router/
│       └── index.js             # Vue Router registry and routing guards
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine:

### 1. Project Installation
Install all dependencies using npm:
```bash
npm install
```

### 2. Run the Mock API Server
Since the Axios CRUD API depends on a local JSON Server, launch a mock API server referencing `db.json` (running on port `3000` by default):
```bash
npx json-server --watch db.json --port 3000
```

### 3. Run the Development Server
Launch the Vite development server in another terminal:
```bash
npm run dev
```
Open the provided URL (typically `http://localhost:5173`) in your browser to experience the application.

### 4. Build for Production
To compile and minify the project for production distribution:
```bash
npm run build
```

---

## 🎨 Theme Customization

Visual constants are managed inside [main.css](file:///c:/Users/shyam/OneDrive/Desktop/my%20projects/NGP%20INTERNSHIP/Vue%203%20Starter/src/assets/main.css) using CSS Custom Properties. You can easily adapt the color palette:

```css
:root {
  --font-primary: 'Outfit', sans-serif;
  --bg-gradient: radial-gradient(circle at 50% 0%, #1a153b, #0d111d, #06080e);
  --color-primary: #6366f1; /* Main indigo brand color */
  --color-accent: #f59e0b;  /* Orange accent color */
  --glass-bg: rgba(20, 26, 46, 0.65); /* Glass opacity */
}
```
