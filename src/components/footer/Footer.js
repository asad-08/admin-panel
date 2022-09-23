import moment from "moment";
import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="w-full flex items-center px-4 justify-between py-6 text-slate-400 bg-slate-700">
      <label className="text-slate-400 dark:text-slate-400">
        {moment(new Date()).format("YYYY")} &copy; - Powered by
        <span className="text-slate-300 dark:text-slate-300 ml-2">
          Asadullah Sarker Manik
        </span>
      </label>
      <div className="flex items-center justify-between gap-2 text-white">
        <div className="hover:cursor-pointer">
          <Facebook sx={{ fontSize: "35px" }} />
        </div>
        <div className="hover:cursor-pointer">
          <LinkedIn sx={{ fontSize: "35px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
