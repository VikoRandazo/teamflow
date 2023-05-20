import { createSlice } from "@reduxjs/toolkit";

export interface preferencesTypes {
  distance: number;
  categories: string[];
  salary: number;
  tags: [];
}
export const preferencesInitState = {
  distance: 20,
  categories: [],
  salary: 6000,
  tags: [],
};

export const preferenceSlice = createSlice({
  name: `preferences`,
  initialState: preferencesInitState,
  reducers: {
    setDistance(state, { payload }) {
      state.distance = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setSalary(state, { payload }) {},
    setTags(state, { payload }) {},
  },
});

export const preferencesActions = preferenceSlice.actions;
