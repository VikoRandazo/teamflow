import { configureStore } from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";
import { searchSlice, searchTypes } from "../slices/search";
import { favoritesSlice, favoritesSliceTypes } from "../slices/favorites";

export interface StoreRootTypes {
  auth: authSliceTypes;
  search: searchTypes;
  favorites: favoritesSliceTypes;
}

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
  },
});
