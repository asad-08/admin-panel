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
import Footer from "./components/footer/Footer";
import LineChart from "./components/charts/LineChart";
import AreaChart from "./components/charts/AreaChart";
import BubbleChart from "./components/charts/BubbleChart";
import PieChart from "./components/charts/PieChart";
import BarStackedChart from "./components/charts/BarStackedChart";
import Editor from "./components/editor/Editor";
import Calendar from "./components/calendar/Calendar";
import OrderList from "./pages/orders/Orders";

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
    <BrowserRouter>
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
        <div className={` w-full ${activeMenu ? "custom:pl-64" : "flex-2"}`}>
          <div className="navbar w-full">
            <Navbar />
          </div>
          <div className="wrapper pt-[90px] p-4 dark:bg-slate-700 min-h-screen dark:text-slate-100">
            <Routes>
              {/* Dashboard */}
              <Route path="/admin-panel" element={<Dashboard />} exact />
              {/* pages */}
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<OrderList />} />
              {/* Apps */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/editor" element={<Editor />} />
              {/* Charts */}
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/area-chart" element={<AreaChart />} />
              <Route path="/bubble-chart" element={<BubbleChart />} />
              <Route path="/pie-chart" element={<PieChart />} />
              <Route path="/stacked-chart" element={<BarStackedChart />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
