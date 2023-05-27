import { createSlice } from "@reduxjs/toolkit";

export interface databaseTypes {
  data: [];
  purpose: string;
  categories: string[]
}

export const databaseInitState = {
  data: [],
  purpose: "",
  categories: []
};
export const databaseSlice = createSlice({
  name: `database`,
  initialState: databaseInitState,
  reducers: {
    setPurpose(state, { payload }) {
      state.purpose = payload;
    },
    setData(state, { payload }) {
      state.data = payload;
    },
    setCategories (state, { payload }) {
      state.categories = payload
    },
    resetDatabase: () => databaseInitState,
  },
});

export const databaseActions = databaseSlice.actions;
