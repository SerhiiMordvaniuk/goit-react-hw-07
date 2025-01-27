import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReduser = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const filterName = (state) => state.filter.name;
