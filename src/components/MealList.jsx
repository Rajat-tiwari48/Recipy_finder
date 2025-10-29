import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MealCard from "./MealCard";
import Loader from "./Loader";
import { fetchMealDetails } from "../features/recipesSlice";

export default function MealList() {
  const { meals, loading, error } = useSelector((s) => s.recipes);
  const dispatch = useDispatch();

  const handleOpen = (idMeal) => {
    dispatch(fetchMealDetails(idMeal));
  };

  if (loading) {
    return (
      <div className="py-12">
        <Loader />
        <p className="text-center text-gray-500 mt-4">Finding delicious recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 px-4 max-w-3xl mx-auto">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
          <div className="text-red-500 text-5xl mb-2">🍳</div>
          <p className="text-red-700 font-semibold">{error}</p>
          <p className="text-red-600 text-sm mt-2">Try searching for a different ingredient</p>
        </div>
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return (
      <div className="py-16 px-4 max-w-3xl mx-auto text-center">
        <div className="text-8xl mb-4">👨‍🍳</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">Ready to Cook Something Amazing?</h3>
        <p className="text-gray-500">Enter an ingredient above to discover delicious recipes</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Found <span className="font-bold text-orange-600">{meals.length}</span> delicious recipes
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.map((meal, index) => (
          <MealCard key={meal.idMeal} meal={meal} onClick={handleOpen} index={index} />
        ))}
      </div>
    </div>
  );
}
