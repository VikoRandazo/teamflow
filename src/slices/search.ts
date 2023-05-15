import { createSlice } from "@reduxjs/toolkit";

export interface searchTypes {
    results: [];
}
export const searchSlice = createSlice({
    name:`search`,
    initialState:{results:[]},
    reducers: {
        setNewResults(state, {payload}) {
            state.results = payload
        }
    }
})

export const searchActions = searchSlice.actions