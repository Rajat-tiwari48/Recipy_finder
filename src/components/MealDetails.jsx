import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedMeal } from "../features/recipesSlice";
import Loader from "./Loader";
import { X, ChefHat, Globe, Youtube } from "lucide-react";

export default function MealDetails() {
  const dispatch = useDispatch();
  const { selectedMeal, detailsLoading } = useSelector((s) => s.recipes);

  if (!selectedMeal && !detailsLoading) return null;

  const close = () => dispatch(clearSelectedMeal());

  if (detailsLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
        <div onClick={close} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl max-w-md">
          <Loader />
          <p className="text-center text-gray-600 mt-4">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (!selectedMeal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = selectedMeal[`strIngredient${i}`];
    const measure = selectedMeal[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${measure ? measure : ""} ${ing}`.trim());
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 px-4 pb-4 overflow-y-auto animate-fadeIn">
      <div onClick={close} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-5xl w-full my-8 animate-slideUp">
        <button
          onClick={close}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="relative h-64 md:h-80 rounded-t-3xl overflow-hidden">
          <img 
            src={selectedMeal.strMealThumb} 
            alt={selectedMeal.strMeal}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {selectedMeal.strMeal}
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-white/90 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
                <ChefHat size={16} />
                {selectedMeal.strCategory}
              </span>
              <span className="px-4 py-1.5 bg-white/90 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
                <Globe size={16} />
                {selectedMeal.strArea}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🥘</span>
              Ingredients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ingredients.map((it, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-sm">{it}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              Instructions
            </h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedMeal.strInstructions}
            </div>
          </div>

          {selectedMeal.strYoutube && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Youtube className="text-red-500" size={24} />
                Video Tutorial
              </h3>
              <a
                href={selectedMeal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                <Youtube size={20} />
                Watch on YouTube
              </a>
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <button
              onClick={close}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
