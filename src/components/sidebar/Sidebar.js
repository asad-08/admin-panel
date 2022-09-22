import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupIcon from "@mui/icons-material/Group";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
const Sidebar = () => {
  return (
    <div className="sidebar w-64 fixed h-screen shadow-lg">
      <div className="h-[70px] text-slate-100 bg-skin-btn flex items-center justify-between px-2 ">
        <h2 className="text-2xl font-bold">ReAdmin</h2>
      </div>
      <div className="h-screen overflow-y-auto dark:bg-slate-700 dark:text-slate-100">
        <ul className="p-2 flex flex-col gap-6 pb-24">
          <label className="text-slate-500 dark:text-slate-400">
            Dashboard
          </label>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <ShoppingBagIcon /> <span>Ecommerce</span>
          </li>
          <label className="text-slate-500 dark:text-slate-400">Pages</label>

          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <ListIcon /> <span>Products</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <AddIcon /> <span>Add Product</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <ListIcon /> <span>Orders</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <AddIcon /> <span>Add Order</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <Diversity3Icon /> <span>Customers</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <GroupIcon /> <span>Employees</span>
          </li>

          <label className="text-slate-500 dark:text-slate-400">Apps</label>

          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <CalendarMonthIcon /> <span>Calendar</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <EditIcon /> <span>Editor</span>
          </li>
          <label className="text-slate-500 dark:text-slate-400">Charts</label>

          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <ShowChartIcon /> <span>Line</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <LegendToggleIcon /> <span>Area</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <BarChartIcon /> <span>Bar</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <PieChartIcon /> <span>Pie</span>
          </li>
          <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <StackedBarChartIcon /> <span>Stacked</span>
          </li>
          {/* <li className="flex items-center gap-3 pl-3 text-sm hover:cursor-pointer">
            <MultilineChartIcon /> <span>Pyramid</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
