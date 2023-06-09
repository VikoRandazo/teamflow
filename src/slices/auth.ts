import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

export interface authSliceTypes {
  setToken: string;
  user: User | null;
  isLoggedIn: boolean;
}

const authInitState = {
  setToken: "",
  user: null,
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
    isLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
    },
      resetAuth: () => authInitState
  },
});

export const authActions = authSlice.actions;
