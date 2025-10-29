# 🍳 Recipe Finder

A beautiful and intuitive recipe search application that helps you discover delicious recipes based on ingredients you have at home.  
Built with **React**, **Redux Toolkit**, **Vite**, and **Tailwind CSS**.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://recipy-finder-one.vercel.app/)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

---

## ✨ Features

- 🔍 **Smart Search** – Search recipes by ingredient with real-time results  
- ⚡ **Quick Access** – One-click ingredient shortcuts for popular items (Chicken, Beef, Salmon, Pasta, Rice, Egg)  
- 🎨 **Modern UI** – Beautiful gradient design with smooth animations  
- 📱 **Fully Responsive** – Works seamlessly on desktop, tablet, and mobile  
- 🖼️ **Interactive Cards** – Hover effects and smooth transitions  
- 📖 **Detailed Recipes** – View complete instructions, ingredients, and YouTube tutorials  
- 🎯 **Optimized Performance** – Lightning-fast with Vite and Redux  
- 🌐 **Global Cuisine** – Discover recipes from around the world  

---

## 🚀 Live Demo

👉 **[View Live Application](https://recipy-finder-one.vercel.app/)**  

---

## 🛠️ Built With

- **[React 18](https://react.dev/)** – UI library  
- **[Vite](https://vitejs.dev/)** – Next-generation frontend tooling  
- **[Redux Toolkit](https://redux-toolkit.js.org/)** – State management  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework  
- **[Lucide React](https://lucide.dev/)** – Icon library  
- **[TheMealDB API](https://www.themealdb.com/)** – Free recipe database  

---

## 📋 Prerequisites

Before you begin, make sure you have:  
- **Node.js** (v14.0 or higher)  
- **npm** (v6.0 or higher) or **yarn**

---

## 🔧 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/recipe-finder.git

# 2. Navigate to the project directory
cd recipe-finder

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

```
## 📁 Project Structure
```bash

recipe-finder/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input with quick filters
│   │   ├── MealList.jsx        # Recipe grid display
│   │   ├── MealCard.jsx        # Individual recipe card
│   │   ├── MealDetails.jsx     # Recipe details modal
│   │   ├── Loader.jsx          # Loading spinner
│   │   └── ErrorMessage.jsx    # Error display
│   ├── features/
│   │   └── recipesSlice.js     # Redux slice for recipes
│   ├── store.js                # Redux store config
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles & Tailwind
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 How to Use

1. Type an ingredient (e.g., **"chicken"**, **"pasta"**, **"tomato"**)
2. Press **Enter** or click **Search**
3. Or use quick buttons for popular ingredients  
4. Then:
   - Browse recipe cards with smooth animations  
   - Click on a recipe card to view detailed instructions, ingredients, and a YouTube video tutorial  
   - Explore different cuisines and discover new dishes  

---

## 🔑 API Reference

**Base URL:**  
```bash
https://www.themealdb.com/api.php
```

**Endpoints:**
```bash
GET https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}

GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
```


- Replace `{ingredient}` with the user’s input (e.g., chicken, rice)
- Replace `{mealId}` with the specific meal’s ID to fetch full recipe details

---

## 🎨 Key Features Explained

### 🧩 Redux State Management
- Used **Redux Toolkit** for managing global state  
- **Async Thunks** for handling API calls efficiently  
- Built-in **loading** and **error handling** states  
- Modular **slice-based architecture** for clean code separation  

### ⚡ Vite Benefits
- Super-fast **Hot Module Replacement (HMR)**  
- Simple, minimal **configuration**  
- Optimized **production builds** for better performance  

### 🎨 Tailwind CSS
- Fully **responsive** using utility-first classes  
- Modern **gradients**, **hover effects**, and **animations**  
- Clean, maintainable, and **scalable** design  

---

## 🚀 Deployment

### Deploy on **Vercel**
1. Push your project code to **GitHub**
2. Go to [Vercel](https://vercel.com)
3. Click **“New Project”** → Import your GitHub repo  
4. Vercel automatically detects the **Vite** setup  
5. Click **Deploy 🎉**  

### Deploy on **Netlify**
```bash
npm run build
```

