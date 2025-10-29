import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMealsByIngredient = createAsyncThunk(
  "recipes/fetchByIngredient",
  async (ingredient, thunkAPI) => {
    if (!ingredient || !ingredient.trim()) return thunkAPI.rejectWithValue("Empty ingredient");
    const q = encodeURIComponent(ingredient.trim());
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${q}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch meals");
    const data = await res.json();
    // API returns { meals: [...] } or { meals: null }
    return data.meals;
  }
);

export const fetchMealDetails = createAsyncThunk(
  "recipes/fetchMealDetails",
  async (idMeal, thunkAPI) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch meal details");
    const data = await res.json();
    // returns { meals: [ detailedMeal ] }
    return data.meals ? data.meals[0] : null;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    ingredient: "",
    meals: [],
    selectedMeal: null,
    loading: false,
    detailsLoading: false,
    error: null,
    detailsError: null,
  },
  reducers: {
    setIngredient(state, action) {
      state.ingredient = action.payload;
    },
    clearMeals(state) {
      state.meals = [];
      state.error = null;
    },
    clearSelectedMeal(state) {
      state.selectedMeal = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchMealsByIngredient
      .addCase(fetchMealsByIngredient.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.meals = [];
      })
      .addCase(fetchMealsByIngredient.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload || []; // null becomes []
        if (!action.payload) {
          state.error = "No meals found for this ingredient.";
        }
      })
      .addCase(fetchMealsByIngredient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || action.payload || "Error fetching meals";
      })

      // fetchMealDetails
      .addCase(fetchMealDetails.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
        state.selectedMeal = null;
      })
      .addCase(fetchMealDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.selectedMeal = action.payload;
        if (!action.payload) state.detailsError = "Details not available.";
      })
      .addCase(fetchMealDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error?.message || "Error fetching details";
      });
  }
});

export const { setIngredient, clearMeals, clearSelectedMeal } = recipesSlice.actions;
export default recipesSlice.reducer;
