import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { setMode, setTheme } from "../../redux/theme/themeSlice";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Settings = () => {
  const dispatch = useDispatch();
  const [isOpenDrawer, setIsOpenDrawer] = useState(true);
  const [clickedColor, setClickedColor] = useState("");
  const [theme, setCurrentTheme] = useState("");
  const [mode, setCurrentMode] = useState("light");

  const themeColors = [
    { color: "rgb(168 85 247)", name: "purple", actualName: "bg-purple-500" },
    { color: "rgb(236 72 153)", name: "pink", actualName: "bg-pink-500" },
    { color: "rgb(234 179 8)", name: "yellow", actualName: "bg-yellow-500" },
    { color: "rgb(16 185 129)", name: "green", actualName: "bg-green-500" },
  ];
  function handleDrawer(e) {
    e.preventDefault();
    setIsOpenDrawer(!isOpenDrawer);
  }
  function handleColor(e, name) {
    e.preventDefault();
    setClickedColor(name);
    setCurrentTheme(name);
    dispatch(setTheme(name));
  }
  function handleMode(e) {
    e.preventDefault();
    setCurrentMode(e.target.value);
    dispatch(setMode(e.target.value));
  }

  return (
    <>
      <div
        className="settings fixed top-24 right-2 h-10 w-10 bg-skin-btn text-skin-btnText rounded-md flex items-center justify-center hover:cursor-pointer shadow-md"
        onClick={(e) => handleDrawer(e)}
      >
        <SettingsIcon className="animate-spin delay-[2000] hover:animate-none" />
      </div>
      {isOpenDrawer ? (
        <div
          className="fixed right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 bg-skin-base shadow-lg dark:bg-slate-700 dark:text-slate-100"
          tabIndex="-1"
        >
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold ">Theme Settings</h2>
          </div>
          <button
            type="button"
            onClick={(e) => handleDrawer(e)}
            className=" bg-transparent hover:bg-skin-btn hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="mt-8">
            <h2 className="text-sm font-semibold ">Mode</h2>
            <div className="mt-4 flex items-center gap-2 ">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="light"
                    control={
                      <Radio
                        color="default"
                        checked={mode === "light"}
                        onChange={handleMode}
                      />
                    }
                    label="Light"
                  />
                  <FormControlLabel
                    value="dark"
                    control={
                      <Radio checked={mode === "dark"} onChange={handleMode} />
                    }
                    label="Dark"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-sm font-semibold ">Theme Color</h2>
            <div className="mt-4 flex gap-4">
              {themeColors.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center hover:cursor-pointer"
                >
                  <div
                    onClick={(e) => handleColor(e, item.name)}
                    className={`relative h-7 w-7 ${item.actualName} rounded-[50%] flex items-center justify-center text-slate-100`}
                  >
                    {clickedColor === item.name ? (
                      <CheckCircleOutlineIcon
                        sx={{ width: "20px", height: "20px" }}
                      />
                    ) : null}
                  </div>
                  <label className="text-sm ">{item.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Settings;
