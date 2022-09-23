import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import Bell from "@mui/icons-material/NotificationsActiveOutlined";
import Chat from "@mui/icons-material/MessageOutlined";
import Cart from "@mui/icons-material/ShoppingBagOutlined";
import { Avatar } from "@mui/material";
import {Close, Menu} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveMenu,
  getScreenSize,
  setActiveMenu,
} from "../../redux/theme/themeSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const screenSize = useSelector(getScreenSize);
  const activeMenu = useSelector(getActiveMenu);
  const [isClickedMobileSearch, setIsClickedMobileSearch] = useState(false);

  const handleCloseSidebar = () => {
    // if (activeMenu && screenSize <= 900) {
    dispatch(setActiveMenu(!activeMenu));
    // }
  };
  const handleSearchMobile = (e) => {
    e.preventDefault();
    setIsClickedMobileSearch(!isClickedMobileSearch);
  }
  return (
    <div
      className={`header h-[70px]  bg-skin-base flex items-center justify-between px-2 shadow-lg dark:shadow-md dark:shadow-slate-400 fixed ${
        activeMenu && screenSize > 900
          ? " left-64 "
          : activeMenu && screenSize <= 900
          ? "left-0"
          : "left-0"
      }  right-0 dark:bg-slate-700 dark:text-slate-100`}
    >
      {isClickedMobileSearch ?
          (<div className={"px-4 flex gap-4 items-center justify-between bg-white rounded-md z-[60] h-[70px] w-full absolute top-0 left-0 dark:bg-slate-700"}>
            <input
              className="w-full px-2 py-1 text-slate-700 outline-none border-b dark:bg-transparent dark:text-slate-100"
              placeholder="Search..."
            />
            <div className={"text-skin-iconText p-2 border rounded-[50%] flex items-center justify-center hover:cursor-pointer"} onClick={(e) => handleSearchMobile((e))}>
              <Close />
            </div>
          </div>) : null}
      <div className="flex w-[30%] items-center gap-2">
        <div
          onClick={handleCloseSidebar}
          className="bg-white p-2 text-skin-iconText rounded-[50%] hover:cursor-pointer hover:bg-slate-100"
        >
          <Menu />
        </div>
        <div className="hidden md:flex bg-white w-full rounded-md flex items-center justify-start py-2 px-2 shadow-md">
          <div className=" text-skin-iconText">
            <SearchIcon />
          </div>
          <div className="w-full">
            <input
              className="w-full px-2 py-1 text-slate-700 outline-none border-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex md:hidden " onClick={(e) => handleSearchMobile(e)}>
          <div className="bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer text-skin-iconText">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="utility flex items-center justify-between gap-3">
        <div className="bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative text-skin-iconText">
          <Bell />
          <div
            className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-skin-btn rounded-full 
       border-white dark:border-gray-900"
          >
            10
          </div>
        </div>
        <div className="bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative text-skin-iconText">
          <Chat />
        </div>
        <div className="bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative text-skin-iconText">
          <Cart />
          <div
            className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-skin-btn rounded-full 
       border-white dark:border-gray-900"
          >
            5
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-2 text-skin-base rounded-md gap-2 hover:cursor-pointer">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <label className="hidden sm:flex font-semibold text-sm  hover:cursor-pointer">
            Admin
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
