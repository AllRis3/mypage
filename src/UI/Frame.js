import React from "react";
import FrameCss from "./Frame.module.css";

export default function Frame(props) {
  return (
    <div className={FrameCss.mainFrame}>
        {props.children}
    </div>
  )
}
