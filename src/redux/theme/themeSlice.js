import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    theme: "purple",
    screenSize: 0,
    activeMenu: 1,
  },
  reducers: {
    setMode: (state, action) => {
      return { ...state, mode: action.payload };
    },
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    setScreenSize: (state, action) => {
      return { ...state, screenSize: action.payload };
    },
    setActiveMenu: (state, action) => {
      return { ...state, activeMenu: action.payload };
    },
  },
});
export const { setMode, setTheme, setScreenSize, setActiveMenu } =
  themeSlice.actions;
export const getMode = (state) => state.theme.mode;
export const getTheme = (state) => state.theme.theme;
export const getScreenSize = (state) => state.theme.screenSize;
export const getActiveMenu = (state) => state.theme.activeMenu;
export default themeSlice.reducer;
