import { useEffect, useState } from "react";
import "./App.css";
import {
  getMode,
  getTheme,
  getScreenSize,
  getActiveMenu,
  setActiveMenu,
  setScreenSize,
} from "./redux/theme/themeSlice";

import { useDispatch, useSelector } from "react-redux";
import Settings from "./components/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";

function App() {
  const theme = useSelector(getTheme);
  const mode = useSelector(getMode);
  const dispatch = useDispatch();
  const screenSize = useSelector(getScreenSize);
  const activeMenu = useSelector(getActiveMenu);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenSize(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setActiveMenu(0));
    } else {
      dispatch(setActiveMenu(1));
    }
  }, [screenSize]);

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
      <Settings />
      {activeMenu ? <Sidebar /> : null}
      <div
        className={`min-h-screen w-full ${activeMenu ? "custom:pl-64" : "flex-2"}`}
      >
        <div className="fixed md:static navbar w-full">
          <Navbar />
        </div>
        <div className="wrapper pt-[90px] p-4 dark:bg-slate-700 min-h-screen dark:text-slate-100">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} exact />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      {/* <Home /> */}
    </div>
  );
}

export default App;
