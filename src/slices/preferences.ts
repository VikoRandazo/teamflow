import { createSlice } from "@reduxjs/toolkit";

export interface preferencesTypes {
  distance: number;
  category: string;
  salary: number;
  tags: string[];
}
export const preferencesInitState = {
  distance: 20,
  category: "",
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
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setSalary(state, { payload }) {},
    setTags(state, { payload }) {},
    resetPreferences: () => preferencesInitState
  },
});

export const preferencesActions = preferenceSlice.actions;
