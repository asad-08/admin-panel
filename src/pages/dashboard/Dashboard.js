import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Icon, Menu, MenuItem } from "@mui/material";
import React from "react";
import LineColumnAreaChart from "../../components/charts/LineColumnAreaChart";
import { recentTransactions } from "../../dummyData/mock";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={
        "min-h-screen bg-skin-base p-4 shadow-xl rounded-2xl dark:text-slate-100 dark:bg-slate-600"
      }
    >
      <label className={"text-2xl font-semibold"}>
        Dashboard
        <span className={"text-xs font-normal ml-8"}>Home / Dashboard</span>
      </label>
      {/*<div className={"at_a_glance p-4 w-full rounded-2xl shadow-md flex flex-col items-start bg-slate-100 dark:bg-slate-500"}>*/}
      <div
        className={
          "mt-10 w-full flex gap-8 md:gap-4 items-center justify-between flex-col flex-wrap md:flex-nowrap md:flex-row"
        }
      >
        <div
          className={
            "w-full h-[170px] flex-1 rounded-2xl p-4 text-white bg-white dark:bg-slate-500 shadow-lg relative"
          }
        >
          <div className={"flex items-center justify-end"}>
            <label
              className={
                "font-normal absolute shadow-md rounded-br-full left-[10px] top-[-15px] bg-green-500 py-3 min-w-[120px] text-center px-2"
              }
            >
              Revenue
            </label>
            <label
              className={
                "absolute bottom-1 right-2 bg-green-100 text-green-800 px-4 py-1 rounded-lg text-sm"
              }
            >
              Today
            </label>
          </div>
          <label className={"leading-[7]"}>
            <span
              className={
                "text-slate-700 dark:text-slate-100 text-4xl font-semibold"
              }
            >
              $
            </span>
            <span
              className={
                "text-slate-500 dark:text-slate-100 text-xl font-semibold"
              }
            >
              10.2K
            </span>
          </label>

          <div className="md mt-[-35px] text-base font-medium text-green-700 dark:text-green-500 text-right">
            75%
          </div>
          <div className="w-full bg-gray-200 h-2 mb-6 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2 dark:bg-green-500"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div
          className={
            "w-full h-[170px] flex-1 rounded-2xl p-4 text-white bg-white dark:bg-slate-500 shadow-lg relative"
          }
        >
          <div className={"flex items-center justify-end"}>
            <label
              className={
                "font-normal absolute shadow-md rounded-br-full left-[10px] top-[-15px] bg-yellow-500 text-slate-800 py-3 min-w-[120px] text-center px-2"
              }
            >
              Orders
            </label>
            <label
              className={
                "absolute bottom-1 right-2 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg text-sm"
              }
            >
              Last Week
            </label>
          </div>
          <label className={"leading-[7]"}>
            <span
              className={
                "text-slate-700 dark:text-slate-100 text-4xl font-semibold"
              }
            ></span>
            <span
              className={
                "text-slate-500 dark:text-slate-100 text-xl font-semibold"
              }
            >
              180
            </span>
          </label>

          <div className="md mt-[-35px] text-base font-medium text-yellow-700 dark:text-yellow-500 text-right">
            60%
          </div>
          <div className="w-full bg-gray-200 h-2 mb-6 dark:bg-gray-700">
            <div
              className="bg-yellow-600 h-2 dark:bg-yellow-500"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div
          className={
            "w-full h-[170px] flex-1 rounded-2xl p-4 text-white bg-white dark:bg-slate-500 shadow-lg relative"
          }
        >
          <div className={"flex items-center justify-end"}>
            <label
              className={
                "font-normal absolute shadow-md rounded-br-full left-[10px] top-[-15px] bg-pink-500 py-3 min-w-[120px] text-center px-2"
              }
            >
              Customers
            </label>
            <label
              className={
                "absolute bottom-1 right-2 bg-pink-100 text-pink-800 px-4 py-1 rounded-lg text-sm"
              }
            >
              All Times
            </label>
          </div>
          <label className={"leading-[7]"}>
            <span
              className={
                "text-slate-700 dark:text-slate-100 text-4xl font-semibold"
              }
            ></span>
            <span
              className={
                "text-slate-500 dark:text-slate-100 text-xl font-semibold"
              }
            >
              1500
            </span>
          </label>

          <div className="md mt-[-35px] text-base font-medium text-pink-700 dark:text-pink-500 text-right">
            80%
          </div>
          <div className="w-full bg-gray-200 h-2 mb-6 dark:bg-gray-700">
            <div
              className="bg-pink-600 h-2 dark:bg-pink-500"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div
          className={
            "w-full h-[170px] flex-1 rounded-2xl p-4 text-white bg-white dark:bg-slate-500 shadow-lg relative"
          }
        >
          <div className={"flex items-center justify-end"}>
            <label
              className={
                "font-normal absolute shadow-md rounded-br-full left-[10px] top-[-15px] bg-purple-500 py-3 min-w-[120px] text-center px-2"
              }
            >
              Pending Delivery
            </label>
            <label
              className={
                "absolute bottom-1 right-2 bg-purple-100 text-purple-800 px-4 py-1 rounded-lg text-sm"
              }
            >
              Last Month
            </label>
          </div>
          <label className={"leading-[7]"}>
            <span
              className={
                "text-slate-700 dark:text-slate-100 text-4xl font-semibold"
              }
            ></span>
            <span
              className={
                "text-slate-500 dark:text-slate-100 text-xl font-semibold"
              }
            >
              40
            </span>
          </label>

          <div className="md mt-[-35px] text-base font-medium text-purple-700 dark:text-purple-300 text-right">
            85%
          </div>
          <div className="w-full bg-gray-200 h-2 mb-6 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2 dark:bg-purple-500"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>
      {/*</div>*/}
      <div
        className={
          "mt-8 flex gap-4 items-center flex-col md:flex-row flex-wrap md:flex-nowrap"
        }
      >
        <div
          className={
            "h-[460px] line_column_area p-4 w-full md:w-1/2 rounded-2xl shadow-md flex flex-col items-start bg-slate-100 dark:bg-slate-500"
          }
        >
          <div className="w-full flex items-center justify-between">
            <label className={"font-semibold"}>Sales Statistics</label>
            <button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              className="bg-skin-btn text-skin-btnText py-2 px-4 rounded-lg"
            >
              By Month <KeyboardArrowDown />
            </button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                By Month
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                By Year
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                By Day
              </MenuItem>
            </Menu>
          </div>
          <LineColumnAreaChart />
        </div>

        <div
          className={
            "h-[460px] line_column_area p-4 w-full md:w-1/2 rounded-2xl shadow-md flex flex-col items-start bg-slate-100 dark:bg-slate-500"
          }
        >
          <div className="w-full flex flex-col items-start justify-between">
            <label className="text-xl font-semibold">Recent Transaction</label>
            <hr className="w-full h-[2px] bg-skin-btn my-4" />
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <Icon>list</Icon>
                <div className="flex flex-col items-start">
                  <label>Deposite PayPal</label>
                  <label>Date</label>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <label>amount</label>
                <label>currency</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
