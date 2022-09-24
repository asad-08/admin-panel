import { Icon } from "@mui/material";
import React, { useState } from "react";

const Button = ({ classes, btnText, handleClick, hasIcon, iconName }) => {
  return (
    <button className={classes} onClick={(e) => handleClick(e)}>
      {hasIcon ? <Icon sx={{ fontSize: "20px" }}>{iconName}</Icon> : null}
      {btnText}
    </button>
  );
};
export default Button;
