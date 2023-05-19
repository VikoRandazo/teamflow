import { createSlice } from "@reduxjs/toolkit";
import { ApplicantProps, FreelancerProps, JobOfferProps } from "../models/jobMarket";

export interface favoritesSliceTypes {
  favorite: ApplicantProps | FreelancerProps | JobOfferProps;
//   favorites: [] | any;
}

export const favInitState = {
  favorite: null,
//   favorites: '',
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favInitState,
  reducers: {
    setFavorite(state, { payload }) {
      state.favorite = payload;
    },
    // setFavorites(state, {payload}) {
    //     state.favorites = [...state.favorites, ...payload];
    // }
  },
});

export const favoritesActions = favoritesSlice.actions;
