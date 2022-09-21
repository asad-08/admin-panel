import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    theme: "default",
  },
  reducers: {
    setMode: (state, action) => {
      return { ...state, mode: action.payload };
    },
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
  },
});
export const { setMode, setTheme } = themeSlice.actions;
export const getMode = (state) => state.theme.mode;
export const getTheme = (state) => state.theme.theme;
export default themeSlice.reducer;
