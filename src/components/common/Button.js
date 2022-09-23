import React, {useState} from "react";

const Button = ({classes, btnText, handleClick}) => {
    return <button className={classes} onClick={(e) => handleClick(e)}>
        {btnText}
    </button>
}
export default  Button;