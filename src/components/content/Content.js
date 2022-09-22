import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Bell from "@mui/icons-material/NotificationsActiveOutlined";
import Chat from "@mui/icons-material/MessageOutlined";
import Cart from "@mui/icons-material/ShoppingBagOutlined";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Content = () => {
  return (
    <div className="content pl-64">
      <div className="header h-[70px]  bg-skin-base flex items-center justify-between px-2 shadow-lg fixed left-64 right-0 dark:bg-slate-700 dark:text-slate-100">
        <div className="flex w-[30%] items-center gap-2">
          <div className="bg-white p-2 text-slate-700 rounded-[50%] hover:cursor-pointer hover:bg-slate-100">
            <Menu />
          </div>
          <div className="bg-white w-full rounded-md flex items-center justify-start py-2 px-2 shadow-md">
            <div className="text-slate-700 ">
              <SearchIcon />
            </div>
            <div className="w-full">
              <input
                className="w-full px-2 py-1 text-slate-700 outline-none border-none"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="utility flex items-center justify-between gap-3">
          <div className=" text-skin-base bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative">
            <Bell />
            <div
              className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-skin-btn rounded-full 
             border-white dark:border-gray-900"
            >
              10
            </div>
          </div>
          <div className=" text-skin-base bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative">
            <Chat />
          </div>
          <div className=" text-skin-base bg-white p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer relative">
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
            <label className="font-semibold text-sm  hover:cursor-pointer">
              Admin
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
