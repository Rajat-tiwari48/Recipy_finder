import React from "react";
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";
import MealDetails from "./components/MealDetails";
import { ChefHat } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>

      <header className="pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl mb-4 shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
            <ChefHat size={40} className="text-white transform -rotate-3" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Recipe Finder
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing recipes by ingredient. Perfect for home cooks and food lovers! 🍳✨
          </p>
        </div>

        <div className="mt-10">
          <SearchBar />
        </div>
      </header>

      <main>
        <MealList />
      </main>

      <MealDetails />
      
      <footer className="py-10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-gray-600 font-medium">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by Rajat Tiwari</span>
          </div>
        </div>
      </footer>
    </div>
  );
}