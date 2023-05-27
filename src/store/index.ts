import { configureStore } from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";
import { databaseSlice, databaseTypes } from "../slices/database";
import { userDataSlice, userDataSliceTypes } from "../slices/userData";
import { preferenceSlice, preferencesTypes } from "../slices/preferences";

export interface StoreRootTypes {
  auth: authSliceTypes;
  database: databaseTypes;
  userData: userDataSliceTypes;
  preferences: preferencesTypes;
}

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [databaseSlice.name]: databaseSlice.reducer,
    [userDataSlice.name]: userDataSlice.reducer,
    [preferenceSlice.name]: preferenceSlice.reducer,
  },
});
