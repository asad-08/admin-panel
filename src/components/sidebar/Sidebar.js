import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveMenu,
  getScreenSize,
  setActiveMenu,
} from "../../redux/theme/themeSlice";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Icon from "@mui/material/Icon";
const Sidebar = () => {
  const dispatch = useDispatch();
  const screenSize = useSelector(getScreenSize);
  const activeMenu = useSelector(getActiveMenu);
  const [activeLink, setActiveLink] = useState("");

  const menuList = [
    {
      label: "Dashboard",
      links: [{ path: "", name: "ecommerce", icon: "add_shopping_cart" }],
    },
    {
      label: "Pages",
      links: [
        { path: "", name: "products", icon: "list" },
        { path: "", name: "add-product", icon: "add" },
        { path: "", name: "orders", icon: "list" },
        { path: "", name: "add-order", icon: "add" },
        { path: "", name: "customers", icon: "group_add" },
        { path: "", name: "employees", icon: "groups" },
      ],
    },
    {
      label: "Apps",
      links: [
        { path: "", name: "calendar", icon: "calendar_month" },
        { path: "", name: "editor", icon: "edit" },
      ],
    },
    {
      label: "Chars",
      links: [
        { path: "", name: "line", icon: "show_chart_rounded" },
        { path: "", name: "area", icon: "analytics_rounded" },
        { path: "", name: "bar", icon: "bar_chart_rounded" },
        { path: "", name: "pie", icon: "pie_chart_outlined" },
        { path: "", name: "stacked", icon: "stacked_bar_chart_rounded" },
      ],
    },
  ];

  const handleCloseSidebar = (link) => {
    // if (activeMenu && screenSize <= 767) {
    dispatch(setActiveMenu(!activeMenu));
    setActiveLink(link);
    // }
  };

  return (
    <div className={`sidebar w-64 fixed  h-screen shadow-lg z-50`}>
      <div className="h-[70px] text-slate-100 bg-skin-btn flex items-center justify-between px-2 ">
        <h2 className="text-2xl font-bold">ReAdmin</h2>
        {activeMenu && screenSize <= 767 ? (
          <div
            onClick={() => handleCloseSidebar()}
            className="bg-white px-2 py-1 text-slate-700 rounded-[50%] hover:cursor-pointer hover:bg-slate-100"
          >
            <ArrowBack sx={{ height: "16px", width: "16px" }} />
          </div>
        ) : null}
      </div>
      <div className="h-screen bg-skin-base overflow-y-auto dark:bg-slate-700 dark:text-slate-100">
        <ul className="p-2 flex flex-col gap-1 pb-24">
          {menuList.map((item, index) => (
            <>
              <label key={index} className="text-slate-500 dark:text-slate-400">
                {item.label}
              </label>
              {item.links.map((sitem, sindex) => (
                <li
                  key={sindex}
                  onClick={() => handleCloseSidebar()}
                  className={`flex items-center gap-3 p-3 text-sm rounded-lg hover:cursor-pointer hover:bg-skin-btn hover:text-skin-btnText`}
                >
                  <Icon>{sitem.icon}</Icon>{" "}
                  <span className="">{sitem.name}</span>
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
