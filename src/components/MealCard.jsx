import React from "react";
import { Sparkles } from "lucide-react";

export default function MealCard({ meal, onClick, index }) {
  return (
    <div
      onClick={() => onClick(meal.idMeal)}
      style={{ animationDelay: `${index * 50}ms` }}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 text-white text-sm">
            <Sparkles size={16} />
            <span>Click for recipe</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
}
