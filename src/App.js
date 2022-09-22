import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/home/Home";
import { getMode, getTheme } from "./redux/theme/themeSlice";

function App() {
  const theme = useSelector(getTheme);
  const mode = useSelector(getMode);
  return (
    <div
      className={
        theme === "purple"
          ? "theme-purple " + mode
          : theme === "pink"
          ? "theme-pink " + mode
          : theme === "yellow"
          ? "theme-yellow " + mode
          : theme === "green"
          ? "theme-green " + mode
          : ""
      }
    >
      <Home />
    </div>
  );
}

export default App;
