import {configureStore} from "@reduxjs/toolkit";
import { authSlice, authSliceTypes } from "../slices/auth";
import { searchActions, searchSlice, searchTypes } from "../slices/search";

export interface StoreRootTypes {
    auth: authSliceTypes;
    search:searchTypes;
    
  }

export const store = configureStore({
    reducer: {
        [authSlice.name] : authSlice.reducer,
        [searchSlice.name] : searchSlice.reducer
    }
})

