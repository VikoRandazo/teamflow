import { configureStore } from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";
import { searchSlice, searchTypes } from "../slices/search";
import { favoritesSlice, favoritesSliceTypes } from "../slices/favorites";
import { preferenceSlice, preferencesTypes } from "../slices/preferences";

export interface StoreRootTypes {
  auth: authSliceTypes;
  search: searchTypes;
  favorites: favoritesSliceTypes;
  preferences: preferencesTypes;
}

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
    [preferenceSlice.name]: preferenceSlice.reducer,
  },
});
