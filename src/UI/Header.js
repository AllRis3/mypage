import React from "react";
import HeaderCss from "./Header.module.css";

export default function Header(props) {
  return (
    <h1 className={HeaderCss.header}>
      {props.children}
      <div className={HeaderCss.line}></div>
    </h1>
  );
}
