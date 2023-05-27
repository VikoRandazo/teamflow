import { createSlice } from "@reduxjs/toolkit";
import { ApplicantProps, FreelancerProps, JobOfferProps } from "../models/jobMarket";

export interface userDataSliceTypes {
  favorite: ApplicantProps | FreelancerProps | JobOfferProps;
}

export const userDataInitState = {
  favorite: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: userDataInitState,
  reducers: {
    setFavorite(state, { payload }) {
      state.favorite = payload;
    },
    // setFavorites(state, {payload}) {
    //     state.favorites = [...state.favorites, ...payload];
    // }
    resetUserData: () => userDataInitState
  },
});

export const userDataActions = userDataSlice.actions;
