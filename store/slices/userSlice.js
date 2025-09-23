import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;

export const selectIsLoading = (state) => state.app.isLoading;

export default appSlice.reducer;
