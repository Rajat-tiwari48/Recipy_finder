// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setIngredient, fetchMealsByIngredient, clearMeals } from "../features/recipesSlice";

// // export default function SearchBar() {
// //   const dispatch = useDispatch();
// //   const ingredient = useSelector((s) => s.recipes.ingredient);
// //   const [local, setLocal] = useState(ingredient || "");

// //   const submit = (e) => {
// //     e.preventDefault();
// //     const value = local.trim();
// //     if (!value) {
// //       dispatch(clearMeals());
// //       return;
// //     }
// //     dispatch(setIngredient(value));
// //     dispatch(fetchMealsByIngredient(value));
// //   };

// //   return (
// //     <form onSubmit={submit} className="w-full max-w-3xl mx-auto px-4">
// //       <div className="flex gap-3 items-center">
// //         <input
// //           value={local}
// //           onChange={(e) => setLocal(e.target.value)}
// //           placeholder="Enter an ingredient (e.g., chicken, egg, rice)"
// //           className="flex-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition"
// //         >
// //           Search
// //         </button>
// //       </div>
// //     </form>
// //   );
// // }

// function SearchBar() {
//   const dispatch = useDispatch();
//   const ingredient = useSelector((s) => s.recipes.ingredient);
//   const [local, setLocal] = useState(ingredient || "");
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const value = local.trim();
//     if (!value) {
//       dispatch(clearMeals());
//       return;
//     }
//     dispatch(setIngredient(value));
//     dispatch(fetchMealsByIngredient(value));
//   };

//   const handleSearch = () => {
//     const value = local.trim();
//     if (!value) {
//       dispatch(clearMeals());
//       return;
//     }
//     dispatch(setIngredient(value));
//     dispatch(fetchMealsByIngredient(value));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const quickIngredients = ['Chicken', 'Beef', 'Salmon', 'Pasta', 'Rice', 'Egg'];

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4">
//       <div className="relative">
//         <div className={`relative flex items-center gap-3 bg-white rounded-2xl shadow-lg transition-all duration-300 ${isFocused ? 'shadow-2xl ring-4 ring-orange-200' : ''}`}>
//           <div className="absolute left-5 text-gray-400 pointer-events-none">
//             <Search size={22} />
//           </div>
//           <input
//             value={local}
//             onChange={(e) => setLocal(e.target.value)}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setTimeout(() => setIsFocused(false), 200)}
//             onKeyPress={handleKeyPress}
//             placeholder="Search by ingredient... (e.g., chicken, pasta, tomato)"
//             className="flex-1 py-4 pl-14 pr-4 bg-transparent rounded-2xl focus:outline-none text-gray-700 text-lg"
//           />
//           {local && (
//             <button
//               type="button"
//               onClick={() => setLocal('')}
//               className="mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <X size={18} className="text-gray-400" />
//             </button>
//           )}
//           <button
//             type="button"
//             onClick={handleSearch}
//             className="mr-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-8 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
//           >
//             Search
//           </button>
//         </div>
//       </div>
      
//       <div className="mt-6 flex flex-wrap gap-2 justify-center">
//         {quickIngredients.map(ing => (
//           <button
//             key={ing}
//             onClick={() => {
//               setLocal(ing);
//               dispatch(setIngredient(ing));
//               dispatch(fetchMealsByIngredient(ing));
//             }}
//             className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
//           >
//             {ing}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIngredient, fetchMealsByIngredient, clearMeals } from "../features/recipesSlice";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const ingredient = useSelector((s) => s.recipes.ingredient);
  const [local, setLocal] = useState(ingredient || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    const value = local.trim();
    if (!value) {
      dispatch(clearMeals());
      return;
    }
    dispatch(setIngredient(value));
    dispatch(fetchMealsByIngredient(value));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const quickIngredients = ['Chicken', 'Beef', 'Salmon', 'Pasta', 'Rice', 'Egg'];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative">
        <div className={`relative flex items-center gap-3 bg-white rounded-2xl shadow-lg transition-all duration-300 ${isFocused ? 'shadow-2xl ring-4 ring-orange-200' : ''}`}>
          <div className="absolute left-5 text-gray-400 pointer-events-none">
            <Search size={22} />
          </div>
          <input
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyPress={handleKeyPress}
            placeholder="Search by ingredient... (e.g., chicken, pasta, tomato)"
            className="flex-1 py-4 pl-14 pr-4 bg-transparent rounded-2xl focus:outline-none text-gray-700 text-lg"
          />
          {local && (
            <button
              type="button"
              onClick={() => setLocal('')}
              className="mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={18} className="text-gray-400" />
            </button>
          )}
          <button
            type="button"
            onClick={handleSearch}
            className="mr-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-8 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {quickIngredients.map(ing => (
          <button
            key={ing}
            onClick={() => {
              setLocal(ing);
              dispatch(setIngredient(ing));
              dispatch(fetchMealsByIngredient(ing));
            }}
            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {ing}
          </button>
        ))}
      </div>
    </div>
  );
}