import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

export interface authSliceTypes {
  setToken: string;
  user: User | null;
  purpose: string | null;
  isLoggedIn: boolean;
}

const authInitState = {
  setToken: "",
  user: null,
  purpose: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitState,
  reducers: {
    setToken(state, { payload }) {
      state.setToken = payload;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },

    setPurpose(state, { payload }) {
      state.purpose = payload;
    },
    isLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
    },
  },
});

export const authActions = authSlice.actions;
