import {configureStore} from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";

export interface StoreRootTypes {
    auth: authSliceTypes;
    
  }

export const store = configureStore({
    reducer: {
        [authSlice.name] : authSlice.reducer
    }
})

