import { configureStore } from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";
import { databaseSlice, databaseTypes } from "../slices/database";
import { favoritesSlice, favoritesSliceTypes } from "../slices/favorites";
import { preferenceSlice, preferencesTypes } from "../slices/preferences";

export interface StoreRootTypes {
  auth: authSliceTypes;
  database: databaseTypes;
  favorites: favoritesSliceTypes;
  preferences: preferencesTypes;
}

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [databaseSlice.name]: databaseSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
    [preferenceSlice.name]: preferenceSlice.reducer,
  },
});
