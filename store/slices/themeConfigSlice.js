import { createSlice } from "@reduxjs/toolkit";

const themeConfigSlice = createSlice({
  name: "themeConfig",
  initialState: {
    darkMode: false,
    collapsed: false, // ✅ new state for sidebar
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
    setSidebar: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleSidebar, setSidebar } = themeConfigSlice.actions;
export default themeConfigSlice.reducer;
